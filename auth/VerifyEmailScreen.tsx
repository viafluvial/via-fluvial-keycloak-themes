import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Confirmação de E-mail - verify-email.ftl
 * Template correspondente no Keycloak
 */
export function VerifyEmailScreen() {
  return (
    <AuthLayout
      title="Verifique seu e-mail"
      subtitle="Estamos quase lá!"
    >
      {/* Ícone de E-mail */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E8F5E9] rounded-full mb-4">
          <svg className="w-10 h-10 text-[#1A5F3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Mensagem Principal */}
      <Alert type="info">
        Enviamos um e-mail de confirmação para <strong>seu@email.com</strong>
      </Alert>

      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          Clique no link que enviamos para ativar sua conta e começar a usar o ViaFluvialAM.
        </p>
      </div>

      {/* Instruções */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Não recebeu o e-mail?
        </h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Verifique sua caixa de spam ou lixo eletrônico</li>
          <li>• Aguarde alguns minutos e tente reenviar</li>
          <li>• Certifique-se de que o e-mail está correto</li>
        </ul>
      </div>

      {/* Botão Reenviar E-mail */}
      <form method="post" action="/auth/resend-email">
        <FormButton type="submit" variant="outline">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reenviar e-mail
        </FormButton>
      </form>

      {/* Link para Voltar */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <a
          href="/auth/login"
          className="text-sm text-[#1A5F3B] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-1"
        >
          Voltar para o login
        </a>
      </div>
    </AuthLayout>
  );
}
