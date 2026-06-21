import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Redefinição de Senha - login-update-password.ftl
 * Template correspondente no Keycloak
 */
export function UpdatePasswordScreen() {
  return (
    <AuthLayout
      title="Criar nova senha"
      subtitle="Digite sua nova senha de acesso"
    >
      {/* Informação */}
      <Alert type="info">
        Sua senha deve ter no mínimo 8 caracteres, incluindo letras e números.
      </Alert>

      {/* Formulário de Nova Senha */}
      <form method="post" action="/auth/update-password">
        <FormInput
          id="password-new"
          name="password-new"
          type="password"
          label="Nova senha"
          placeholder="••••••••"
          required
          autoComplete="new-password"
          helperText="Mínimo de 8 caracteres"
        />

        <FormInput
          id="password-confirm"
          name="password-confirm"
          type="password"
          label="Confirmar nova senha"
          placeholder="••••••••"
          required
          autoComplete="new-password"
        />

        {/* Indicador de Força da Senha */}
        <div className="mb-6">
          <div className="text-xs text-gray-600 mb-2">Força da senha:</div>
          <div className="flex gap-1">
            <div className="h-1 flex-1 bg-gray-200 rounded"></div>
            <div className="h-1 flex-1 bg-gray-200 rounded"></div>
            <div className="h-1 flex-1 bg-gray-200 rounded"></div>
            <div className="h-1 flex-1 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Botão Salvar */}
        <FormButton type="submit" variant="primary">
          Salvar nova senha
        </FormButton>
      </form>

      {/* Link para Login */}
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
