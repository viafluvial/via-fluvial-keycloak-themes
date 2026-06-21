import { FormEvent, MouseEvent, useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';
import { isKeycloakConfigured, redirectToKeycloak } from '@/app/services/keycloakAuth';

/**
 * Tela de Cadastro - register.ftl
 * Template correspondente no Keycloak
 */
export function RegisterScreen() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const redirected = redirectToKeycloak({ action: 'register' });
    setShowSuccess(false);
    setShowError(!redirected);
  };

  const handleLoginRedirect = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const redirected = redirectToKeycloak({ action: 'login' });
    setShowSuccess(false);
    setShowError(!redirected);
  };

  return (
    <AuthLayout
      title="Criar conta"
      subtitle="Cadastre-se para reservar suas viagens"
    >
      {/* Mensagem de Sucesso (simulação) */}
      {showSuccess && (
        <Alert type="success" onClose={() => setShowSuccess(false)}>
          Conta criada com sucesso! Verifique seu e-mail.
        </Alert>
      )}

      {showError && (
        <Alert type="error" onClose={() => setShowError(false)}>
          Configuração de autenticação indisponível. Verifique SSO/Client ID do Keycloak.
        </Alert>
      )}

      {!isKeycloakConfigured() && !showError && (
        <Alert type="warning">
          SSO ainda não configurado no frontend. O botão Criar conta precisa das variáveis do Keycloak.
        </Alert>
      )}

      {/* Formulário de Cadastro */}
      <form onSubmit={handleRegister}>
        <FormInput
          id="firstName"
          name="firstName"
          type="text"
          label="Nome completo"
          placeholder="João da Silva"
          required
          autoComplete="name"
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="E-mail"
          placeholder="seu@email.com"
          required
          autoComplete="email"
          helperText="Usaremos este e-mail para confirmar sua conta"
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="••••••••"
          required
          autoComplete="new-password"
          helperText="Mínimo de 8 caracteres"
        />

        <FormInput
          id="password-confirm"
          name="password-confirm"
          type="password"
          label="Confirmar senha"
          placeholder="••••••••"
          required
          autoComplete="new-password"
        />

        {/* Termos e Condições */}
        <div className="mb-6">
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-0.5 rounded border-gray-300 text-[#1A5F3B] focus:ring-[#1A5F3B]"
            />
            <span>
              Aceito os{' '}
              <a href="/termos" className="text-[#1A5F3B] hover:underline">
                Termos de Uso
              </a>{' '}
              e{' '}
              <a href="/privacidade" className="text-[#1A5F3B] hover:underline">
                Política de Privacidade
              </a>
            </span>
          </label>
        </div>

        {/* Botão Criar Conta */}
        <FormButton type="submit" variant="primary">
          Criar conta
        </FormButton>
      </form>

      {/* Link para Login */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Já tem uma conta?{' '}
          <a
            href="/auth/login"
            onClick={handleLoginRedirect}
            className="text-[#1A5F3B] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-1"
          >
            Entrar
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
