import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Perfil do Usuário - account.ftl
 * Template correspondente no Keycloak
 */
export function AccountScreen() {
  return (
    <AuthLayout
      title="Meu Perfil"
      subtitle="Gerencie suas informações pessoais"
    >
      {/* Informações do Usuário */}
      <div className="space-y-4 mb-6">
        {/* Avatar */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
          <div className="w-16 h-16 bg-[#1A5F3B] rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JS
          </div>
          <div>
            <h3 className="font-medium text-gray-900">João Silva</h3>
            <p className="text-sm text-gray-500">usuario@email.com</p>
          </div>
        </div>

        {/* Dados Pessoais */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Dados pessoais</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Nome completo</p>
                <p className="text-xs text-gray-500">João Silva</p>
              </div>
              <button className="text-[#1A5F3B] text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-2">
                Editar
              </button>
            </div>

            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">E-mail</p>
                <p className="text-xs text-gray-500">usuario@email.com</p>
              </div>
              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verificado
              </span>
            </div>

            <div className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Telefone</p>
                <p className="text-xs text-gray-500">(92) 99999-9999</p>
              </div>
              <button className="text-[#1A5F3B] text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-[#1A5F3B] rounded px-2">
                Editar
              </button>
            </div>
          </div>
        </div>

        {/* Segurança */}
        <div className="pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Segurança</h4>
          <div className="space-y-3">
            <button className="w-full flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">Alterar senha</p>
                  <p className="text-xs text-gray-500">Última alteração: há 30 dias</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Ações */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <FormButton
          type="button"
          variant="outline"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        >
          Editar perfil completo
        </FormButton>

        <FormButton
          type="button"
          variant="outline"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          }
        >
          Sair da conta
        </FormButton>
      </div>

      {/* Informação Adicional */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Membro desde janeiro de 2026
        </p>
      </div>
    </AuthLayout>
  );
}
