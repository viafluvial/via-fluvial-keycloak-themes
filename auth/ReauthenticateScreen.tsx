import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Reautenticação - login-reauthenticate.ftl
 * Template correspondente no Keycloak
 */
export function ReauthenticateScreen() {
  return (
    <AuthLayout
      title="Confirme sua identidade"
      subtitle="Por segurança, digite sua senha novamente"
    >
      {/* Ícone de Segurança */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-full mb-4">
          <svg className="w-8 h-8 text-[#F9C74F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      <Alert type="warning">
        Esta ação requer que você confirme sua senha por motivos de segurança.
      </Alert>

      {/* Informação do Usuário */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 flex items-center gap-3">
        <div className="w-12 h-12 bg-[#1A5F3B] rounded-full flex items-center justify-center text-white text-lg font-bold">
          JS
        </div>
        <div>
          <p className="font-medium text-gray-900">João Silva</p>
          <p className="text-sm text-gray-500">usuario@email.com</p>
        </div>
      </div>

      {/* Explicação */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Você está prestes a realizar uma ação sensível que requer confirmação de identidade:
        </p>
        <div className="mt-3 bg-blue-50 border-l-4 border-[#1A5F3B] p-3">
          <p className="text-sm font-medium text-gray-900">
            Alterar configurações de segurança da conta
          </p>
        </div>
      </div>

      {/* Formulário */}
      <form method="post" action="/auth/reauthenticate">
        <FormInput
          id="password"
          name="password"
          type="password"
          label="Senha atual"
          placeholder="••••••••"
          required
          autoComplete="current-password"
          autoFocus
        />

        {/* Botão Confirmar */}
        <FormButton type="submit" variant="primary">
          Confirmar identidade
        </FormButton>
      </form>

      {/* Link de Ajuda */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">
          Esqueceu sua senha?
        </p>
        <a
          href="/auth/forgot-password"
          className="text-sm text-[#1A5F3B] hover:underline font-medium"
        >
          Recuperar senha
        </a>
      </div>

      {/* Cancelar */}
      <div className="text-center mt-4">
        <a
          href="/account"
          className="text-sm text-gray-600 hover:text-[#1A5F3B] hover:underline"
        >
          Cancelar e voltar
        </a>
      </div>
    </AuthLayout>
  );
}
