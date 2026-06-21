import { MouseEvent, FormEvent, useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';
import { isKeycloakConfigured, redirectToKeycloak } from '@/app/services/keycloakAuth';

/**
 * Tela de Login - login.ftl
 * Template correspondente no Keycloak
 */
export function LoginScreen() {
  const [showError, setShowError] = useState(false);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const redirected = redirectToKeycloak({ action: 'login' });
    setShowError(!redirected);
  };

  const handleSocialLogin = (idpHint: string) => {
    const redirected = redirectToKeycloak({ action: 'login', idpHint });
    setShowError(!redirected);
  };

  const handleRegisterRedirect = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const redirected = redirectToKeycloak({ action: 'register' });
    setShowError(!redirected);
  };

  return (
    <AuthLayout
      title="Entrar"
      subtitle="Acesse sua conta para reservar passagens"
    >
      {/* Mensagem de Erro (simulação) */}
      {showError && (
        <Alert type="error" onClose={() => setShowError(false)}>
          Configuração de autenticação indisponível. Verifique SSO/Client ID do Keycloak.
        </Alert>
      )}

      {!isKeycloakConfigured() && !showError && (
        <Alert type="warning">
          SSO ainda não configurado no frontend. O botão Entrar precisa das variáveis do Keycloak.
        </Alert>
      )}

      {/* Formulário de Login */}
      <form onSubmit={handleLogin}>
        <FormInput
          id="username"
          name="username"
          type="email"
          label="E-mail"
          placeholder="seu@email.com"
          required
          autoComplete="email"
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />

        {/* Link Esqueci Senha */}
        <div className="text-right mb-6">
          <a
            href="/auth/forgot-password"
            className="text-sm text-[#1A5F3B] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-1"
          >
            Esqueci minha senha
          </a>
        </div>

        {/* Botão Entrar */}
        <FormButton type="submit" variant="primary">
          Entrar
        </FormButton>
      </form>

      {/* Divisor */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">ou continue com</span>
        </div>
      </div>

      {/* Login Social */}
      <div className="space-y-3">
        <FormButton
          type="button"
          variant="social"
          onClick={() => handleSocialLogin('google')}
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          }
        >
          Continuar com Google
        </FormButton>

        <FormButton
          type="button"
          variant="social"
          onClick={() => handleSocialLogin('facebook')}
          icon={
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          }
        >
          Continuar com Facebook
        </FormButton>

        <FormButton
          type="button"
          variant="social"
          onClick={() => handleSocialLogin('instagram')}
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <defs>
                <radialGradient id="instagram-gradient" cx="30%" cy="107%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="90%" stopColor="#285AEB" />
                </radialGradient>
              </defs>
              <path
                fill="url(#instagram-gradient)"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          }
        >
          Continuar com Instagram
        </FormButton>
      </div>

      {/* Link para Cadastro */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Ainda não tem conta?{' '}
          <a
            href="/auth/register"
            onClick={handleRegisterRedirect}
            className="text-[#1A5F3B] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-1"
          >
            Criar conta
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
