import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { ArrowLeft } from 'lucide-react';

/**
 * Tela de Sessão Expirada - session-expired.ftl
 * Template correspondente no Keycloak
 */
export function SessionExpiredScreen() {
  return (
    <AuthLayout
      title="Sessão Expirada"
      subtitle="Por segurança, sua sessão foi encerrada"
    >
      {/* Ícone de Relógio */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Mensagem Principal */}
      <div className="text-center mb-8">
        <p className="text-gray-700 mb-4">
          Sua sessão expirou devido à inatividade. Por favor, faça login novamente para continuar.
        </p>
      </div>

      {/* Informações */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Por que isso aconteceu?</h3>
        <ul className="text-xs text-gray-700 space-y-2">
          <li className="flex gap-2">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Você ficou inativo por muito tempo
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Medida de segurança para proteger sua conta
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Seus dados estão seguros
          </li>
        </ul>
      </div>

      {/* Botão de Login */}
      <form method="get" action="/auth/login">
        <FormButton
          type="submit"
          variant="primary"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          }
        >
          Fazer login novamente
        </FormButton>
      </form>

      {/* Dica */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-800">
          <strong>Dica:</strong> Para evitar que isso aconteça, mantenha-se ativo na plataforma ou marque a opção "Manter conectado" no próximo login.
        </p>
      </div>

      {/* Botão Voltar para Home */}
      <div className="text-center mt-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[#1A5F3B] hover:border-[#1A5F3B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </a>
      </div>
    </AuthLayout>
  );
}