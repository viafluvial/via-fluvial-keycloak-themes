import { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Autenticação em Dois Fatores (OTP) - login-otp.ftl
 * Template correspondente no Keycloak
 */
export function OTPScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Auto-focus próximo campo
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <AuthLayout
      title="Verificação em Duas Etapas"
      subtitle="Digite o código de verificação"
    >
      {/* Ícone de Segurança */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F5E9] rounded-full mb-4">
          <svg className="w-8 h-8 text-[#1A5F3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>

      <Alert type="info">
        Digite o código de 6 dígitos do seu aplicativo autenticador.
      </Alert>

      {/* Texto Explicativo */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600">
          Abra seu aplicativo autenticador (Google Authenticator, Microsoft Authenticator, etc.) e digite o código gerado.
        </p>
      </div>

      {/* Formulário */}
      <form method="post" action="/auth/verify-otp">
        {/* Campos de OTP */}
        <div className="flex justify-center gap-2 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#1A5F3B] focus:ring-2 focus:ring-[#1A5F3B] focus:outline-none transition-all"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <input
          type="hidden"
          name="otp"
          value={code.join('')}
        />

        {/* Botão Confirmar */}
        <FormButton
          type="submit"
          variant="primary"
          disabled={code.some(d => !d)}
        >
          Confirmar código
        </FormButton>
      </form>

      {/* Opções Alternativas */}
      <div className="mt-6 space-y-3">
        <FormButton
          type="button"
          variant="outline"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          }
        >
          Não recebeu o código? Gerar novo
        </FormButton>

        <div className="text-center pt-4 border-t border-gray-200">
          <a
            href="/auth/alternative-verification"
            className="text-sm text-[#1A5F3B] hover:underline inline-flex items-center gap-1"
          >
            Tentar outro método de verificação
          </a>
        </div>
      </div>

      {/* Informação de Segurança */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-800">
          <strong>Dica de segurança:</strong> Nunca compartilhe seus códigos de verificação com ninguém. Nossa equipe nunca solicitará esse código.
        </p>
      </div>
    </AuthLayout>
  );
}
