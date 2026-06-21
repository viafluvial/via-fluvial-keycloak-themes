import { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Configuração de MFA/Authenticator - login-config-totp.ftl
 * Template correspondente no Keycloak
 */
export function ConfigTOTPScreen() {
  const [step, setStep] = useState(1);

  return (
    <AuthLayout
      title="Configurar Verificação em Duas Etapas"
      subtitle="Proteja sua conta com segurança adicional"
    >
      <Alert type="info">
        A verificação em duas etapas adiciona uma camada extra de segurança à sua conta.
      </Alert>

      {/* Indicador de Progresso */}
      <div className="flex items-center justify-center gap-2 mb-8 mt-6">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#1A5F3B] text-white' : 'bg-gray-200 text-gray-500'}`}>
          1
        </div>
        <div className={`h-1 w-12 ${step >= 2 ? 'bg-[#1A5F3B]' : 'bg-gray-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#1A5F3B] text-white' : 'bg-gray-200 text-gray-500'}`}>
          2
        </div>
        <div className={`h-1 w-12 ${step >= 3 ? 'bg-[#1A5F3B]' : 'bg-gray-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-[#1A5F3B] text-white' : 'bg-gray-200 text-gray-500'}`}>
          3
        </div>
      </div>

      <form method="post" action="/auth/config-totp">
        {/* Passo 1: Baixar Aplicativo */}
        <div className={step === 1 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            1. Baixe um aplicativo autenticador
          </h3>
          
          <div className="space-y-3 mb-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-[#1A5F3B] rounded-lg flex items-center justify-center text-white font-bold">
                G
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Google Authenticator</p>
                <p className="text-xs text-gray-500">Android e iOS</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="https://www.microsoft.com/en-us/security/mobile-authenticator-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-[#00A4EF] rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Microsoft Authenticator</p>
                <p className="text-xs text-gray-500">Android e iOS</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <FormButton
            type="button"
            variant="primary"
            onClick={() => setStep(2)}
          >
            Continuar
          </FormButton>
        </div>

        {/* Passo 2: Escanear QR Code */}
        <div className={step === 2 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            2. Escaneie o QR Code
          </h3>

          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-4">
              Abra o aplicativo autenticador e escaneie este código:
            </p>

            {/* QR Code */}
            <div className="inline-block p-4 bg-white border-2 border-gray-300 rounded-lg">
              <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
            </div>

            {/* Código Manual */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Ou digite o código manualmente:</p>
              <div className="bg-gray-100 rounded px-3 py-2 font-mono text-sm">
                JBSW Y3DP EHPK 3PXP
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <FormButton
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              fullWidth={false}
              className="flex-1"
            >
              Voltar
            </FormButton>
            <FormButton
              type="button"
              variant="primary"
              onClick={() => setStep(3)}
              fullWidth={false}
              className="flex-1"
            >
              Continuar
            </FormButton>
          </div>
        </div>

        {/* Passo 3: Validar Código */}
        <div className={step === 3 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            3. Digite o código de verificação
          </h3>

          <p className="text-sm text-gray-600 mb-6">
            Digite o código de 6 dígitos exibido no seu aplicativo autenticador para confirmar a configuração.
          </p>

          <FormInput
            id="totp-code"
            name="totp-code"
            type="text"
            label="Código de verificação"
            placeholder="000000"
            required
            maxLength={6}
            pattern="[0-9]{6}"
            inputMode="numeric"
          />

          <div className="flex gap-3">
            <FormButton
              type="button"
              variant="outline"
              onClick={() => setStep(2)}
              fullWidth={false}
              className="flex-1"
            >
              Voltar
            </FormButton>
            <FormButton
              type="submit"
              variant="primary"
              fullWidth={false}
              className="flex-1"
            >
              Ativar verificação
            </FormButton>
          </div>
        </div>
      </form>

      {/* Informação */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-3">
        <p className="text-xs text-green-800">
          <strong>Benefícios:</strong> Com a verificação em duas etapas, mesmo que alguém descubra sua senha, não conseguirá acessar sua conta sem o código do seu celular.
        </p>
      </div>
    </AuthLayout>
  );
}
