import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';

/**
 * Tela de Confirmação de Logout - logout-confirm.ftl
 * Template correspondente no Keycloak
 */
export function LogoutConfirmScreen() {
  return (
    <AuthLayout
      title="Sair da Conta"
      subtitle="Tem certeza que deseja sair?"
    >
      {/* Ícone */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
      </div>

      {/* Mensagem */}
      <div className="text-center mb-6">
        <p className="text-gray-700">
          Você será desconectado e precisará fazer login novamente para acessar sua conta.
        </p>
      </div>

      {/* Informações da Sessão */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-[#1A5F3B] rounded-full flex items-center justify-center text-white text-lg font-bold">
            JS
          </div>
          <div>
            <p className="font-medium text-gray-900">João Silva</p>
            <p className="text-sm text-gray-500">usuario@email.com</p>
          </div>
        </div>
        
        <div className="pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Sessão iniciada em:</span>
            <span className="font-medium">23/01/2026 às 14:30</span>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <form method="post" action="/auth/logout">
        <div className="space-y-3">
          {/* Botão Sair */}
          <FormButton
            type="submit"
            name="action"
            value="logout"
            variant="primary"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            }
          >
            Sim, sair da conta
          </FormButton>

          {/* Botão Cancelar */}
          <FormButton
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
          >
            Cancelar
          </FormButton>
        </div>
      </form>

      {/* Opção de Lembrar */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="logout-all-sessions"
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#1A5F3B] focus:ring-[#1A5F3B]"
          />
          <span className="text-xs text-blue-800">
            Encerrar todas as sessões ativas em todos os dispositivos
          </span>
        </label>
      </div>

      {/* Informação Adicional */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Suas reservas e dados estarão seguros e disponíveis quando você voltar.
        </p>
      </div>
    </AuthLayout>
  );
}
