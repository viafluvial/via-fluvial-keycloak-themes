import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Confirmação de Vinculação de Conta Social - login-idp-link-confirm.ftl
 * Template correspondente no Keycloak
 */
export function LinkIDPScreen() {
  return (
    <AuthLayout
      title="Vincular Contas"
      subtitle="Uma conta já existe com este e-mail"
    >
      <Alert type="warning">
        Encontramos uma conta existente com o e-mail <strong>usuario@email.com</strong>
      </Alert>

      {/* Informação Visual */}
      <div className="my-6">
        <div className="flex items-center justify-center gap-4">
          {/* Conta Existente */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#1A5F3B] rounded-full flex items-center justify-center text-white text-xl font-bold mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 text-center">Conta<br />ViaFluvialAM</p>
          </div>

          {/* Seta de Vinculação */}
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-[#F9C74F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>

          {/* Conta Social */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-xl font-bold mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 text-center">Conta<br />Facebook</p>
          </div>
        </div>
      </div>

      {/* Explicação */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-bold text-gray-900 mb-2">O que significa vincular contas?</h3>
        <ul className="text-xs text-gray-700 space-y-2">
          <li className="flex gap-2">
            <svg className="w-4 h-4 text-[#1A5F3B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Você poderá fazer login com sua conta do Facebook ou com e-mail e senha
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 text-[#1A5F3B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Suas reservas e dados permanecerão os mesmos
          </li>
          <li className="flex gap-2">
            <svg className="w-4 h-4 text-[#1A5F3B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            É mais seguro e conveniente
          </li>
        </ul>
      </div>

      {/* Formulário */}
      <form method="post" action="/auth/link-accounts">
        <div className="space-y-3">
          {/* Botão Vincular */}
          <FormButton
            type="submit"
            name="action"
            value="link"
            variant="primary"
          >
            Sim, vincular minhas contas
          </FormButton>

          {/* Botão Cancelar */}
          <FormButton
            type="submit"
            name="action"
            value="cancel"
            variant="outline"
          >
            Não, usar contas separadas
          </FormButton>
        </div>
      </form>

      {/* Nota de Segurança */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-800">
          <strong>Segurança:</strong> Certifique-se de que você é o dono das duas contas antes de vinculá-las. Esta ação não pode ser desfeita facilmente.
        </p>
      </div>
    </AuthLayout>
  );
}
