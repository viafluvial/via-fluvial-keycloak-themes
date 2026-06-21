import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Atualização de Perfil Obrigatória - login-update-profile.ftl
 * Template correspondente no Keycloak
 */
export function UpdateProfileScreen() {
  return (
    <AuthLayout
      title="Complete seu perfil"
      subtitle="Precisamos de algumas informações adicionais"
    >
      {/* Alerta Informativo */}
      <Alert type="warning">
        Para continuar, complete os dados do seu perfil.
      </Alert>

      {/* Formulário de Atualização */}
      <form method="post" action="/auth/update-profile">
        <FormInput
          id="firstName"
          name="firstName"
          type="text"
          label="Nome"
          placeholder="João"
          required
          autoComplete="given-name"
        />

        <FormInput
          id="lastName"
          name="lastName"
          type="text"
          label="Sobrenome"
          placeholder="Silva"
          required
          autoComplete="family-name"
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="E-mail"
          value="usuario@email.com"
          disabled
          helperText="Este e-mail não pode ser alterado"
        />

        <FormInput
          id="phone"
          name="phone"
          type="tel"
          label="Telefone (opcional)"
          placeholder="(92) 99999-9999"
          autoComplete="tel"
        />

        {/* Informação sobre Dados */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-blue-800">
            <strong>Privacidade:</strong> Seus dados são protegidos e usados apenas para melhorar sua experiência na plataforma.
          </p>
        </div>

        {/* Botão Salvar */}
        <FormButton type="submit" variant="primary">
          Salvar e continuar
        </FormButton>
      </form>
    </AuthLayout>
  );
}
