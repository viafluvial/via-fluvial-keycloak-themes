import { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Recuperação de Senha - login-reset-password.ftl
 * Template correspondente no Keycloak
 */
export function ResetPasswordScreen() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <AuthLayout
      title="Esqueceu sua senha?"
      subtitle="Sem problemas, vamos te ajudar a recuperar"
    >
      {/* Mensagem de Sucesso (simulação) */}
      {showSuccess && (
        <Alert type="success" onClose={() => setShowSuccess(false)}>
          E-mail de recuperação enviado! Verifique sua caixa de entrada.
        </Alert>
      )}

      {/* Texto Explicativo */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Digite seu e-mail cadastrado e enviaremos um link para você criar uma nova senha.
        </p>
      </div>

      {/* Formulário de Recuperação */}
      <form method="post" action="/auth/reset-password">
        <FormInput
          id="username"
          name="username"
          type="email"
          label="E-mail"
          placeholder="seu@email.com"
          required
          autoComplete="email"
        />

        {/* Botão Enviar Link */}
        <FormButton type="submit" variant="primary">
          Enviar link de recuperação
        </FormButton>
      </form>

      {/* Link para Voltar ao Login */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <a
          href="/auth/login"
          className="text-sm text-[#1A5F3B] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-1 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o login
        </a>
      </div>
    </AuthLayout>
  );
}
