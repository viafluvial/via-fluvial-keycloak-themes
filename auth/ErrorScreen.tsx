import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Erro Genérico - error.ftl
 * Template correspondente no Keycloak
 */
export function ErrorScreen() {
  return (
    <AuthLayout
      title="Algo deu errado"
      subtitle="Não foi possível completar sua solicitação"
    >
      {/* Ícone de Erro */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
          <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      {/* Mensagem de Erro */}
      <Alert type="error">
        Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.
      </Alert>

      {/* Detalhes do Erro */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900 mb-1">Detalhes do erro</h4>
            <p className="text-xs text-gray-600 mb-2">
              Não foi possível completar a operação solicitada.
            </p>
            <div className="bg-white border border-gray-200 rounded px-3 py-2">
              <p className="text-xs font-mono text-gray-700">
                Código: <span className="text-red-600 font-bold">AUTH_ERROR_001</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Timestamp: 23/01/2026 14:45:32
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* O que fazer */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h4 className="text-sm font-bold text-blue-900 mb-3">O que você pode fazer:</h4>
        <ul className="text-xs text-blue-800 space-y-2">
          <li className="flex gap-2">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Volte ao login e tente novamente
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Limpe o cache e cookies do navegador
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Tente usar outro navegador
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Se o problema persistir, entre em contato com o suporte
          </li>
        </ul>
      </div>

      {/* Ações */}
      <div className="space-y-3">
        <FormButton
          type="button"
          variant="primary"
          onClick={() => window.location.href = '/auth/login'}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          }
        >
          Voltar ao login
        </FormButton>

        <FormButton
          type="button"
          variant="outline"
          onClick={() => window.location.href = '/'}
        >
          Ir para página inicial
        </FormButton>
      </div>

      {/* Suporte */}
      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-2">Precisa de ajuda?</p>
        <a
          href="mailto:suporte@viafluvial.am.gov.br"
          className="text-sm text-[#1A5F3B] hover:underline font-medium inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Entre em contato com o suporte
        </a>
      </div>
    </AuthLayout>
  );
}
