import { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { FormButton } from './FormButton';
import { Alert } from './Alert';

/**
 * Tela de Aceite de Termos de Uso / LGPD - login-terms.ftl
 * Template correspondente no Keycloak
 */
export function TermsScreen() {
  const [accepted, setAccepted] = useState(false);

  return (
    <AuthLayout
      title="Termos de Uso e Política de Privacidade"
      subtitle="Por favor, leia e aceite os termos para continuar"
    >
      <Alert type="info">
        Para usar o ViaFluvialAM, você precisa concordar com nossos termos de uso e política de privacidade.
      </Alert>

      {/* Container de Termos Scrollável */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 max-h-80 overflow-y-auto">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Termos de Uso</h3>
        
        <div className="text-xs text-gray-700 space-y-3">
          <p>
            <strong>1. Aceitação dos Termos</strong><br />
            Ao acessar e usar a plataforma ViaFluvialAM, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
          </p>
          
          <p>
            <strong>2. Uso da Plataforma</strong><br />
            Esta plataforma destina-se à reserva de passagens e camarotes para transporte fluvial na região amazônica. O uso inadequado ou fraudulento pode resultar no cancelamento de sua conta.
          </p>
          
          <p>
            <strong>3. Privacidade e Dados Pessoais (LGPD)</strong><br />
            Coletamos e processamos seus dados pessoais conforme nossa Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
          
          <p>
            <strong>4. Dados Coletados</strong><br />
            • Nome completo e CPF<br />
            • E-mail e telefone de contato<br />
            • Informações de pagamento (processadas por terceiros seguros)<br />
            • Histórico de viagens e preferências
          </p>
          
          <p>
            <strong>5. Uso dos Dados</strong><br />
            Seus dados são utilizados exclusivamente para:<br />
            • Processar reservas e pagamentos<br />
            • Enviar confirmações e atualizações de viagem<br />
            • Melhorar nossos serviços<br />
            • Cumprir obrigações legais
          </p>
          
          <p>
            <strong>6. Compartilhamento de Dados</strong><br />
            Não vendemos seus dados. Compartilhamos apenas com:<br />
            • Barqueiros e operadores de embarcações (para prestação do serviço)<br />
            • Processadores de pagamento autorizados<br />
            • Autoridades legais quando exigido por lei
          </p>
          
          <p>
            <strong>7. Seus Direitos (LGPD)</strong><br />
            Você tem direito a:<br />
            • Acessar seus dados pessoais<br />
            • Corrigir dados incompletos ou desatualizados<br />
            • Solicitar a exclusão de dados (exceto quando legalmente obrigatório mantê-los)<br />
            • Revogar o consentimento a qualquer momento
          </p>
          
          <p>
            <strong>8. Segurança</strong><br />
            Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou destruição.
          </p>
          
          <p>
            <strong>9. Alterações nos Termos</strong><br />
            Reservamo-nos o direito de modificar estes termos. Você será notificado sobre alterações significativas.
          </p>
          
          <p>
            <strong>10. Contato</strong><br />
            Para questões sobre privacidade: privacidade@viafluvial.am.gov.br<br />
            Encarregado de Dados (DPO): dpo@viafluvial.am.gov.br
          </p>
        </div>
      </div>

      {/* Link para Download */}
      <div className="mb-6 text-center">
        <a
          href="/termos-completos.pdf"
          className="text-sm text-[#1A5F3B] hover:underline inline-flex items-center gap-1"
          download
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Baixar termos completos (PDF)
        </a>
      </div>

      {/* Checkbox de Aceitação */}
      <form method="post" action="/auth/terms">
        <div className="mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="terms-accepted"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#1A5F3B] focus:ring-[#1A5F3B]"
              required
            />
            <span className="text-sm text-gray-700">
              Declaro que li e aceito os <strong>Termos de Uso</strong> e a{' '}
              <strong>Política de Privacidade</strong>, e estou ciente de como meus dados pessoais serão tratados conforme a LGPD.
            </span>
          </label>
        </div>

        {/* Botão Aceitar */}
        <FormButton
          type="submit"
          variant="primary"
          disabled={!accepted}
        >
          Aceitar e continuar
        </FormButton>
      </form>

      {/* Link de Cancelamento */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <a
          href="/auth/logout"
          className="text-sm text-gray-600 hover:text-[#1A5F3B] hover:underline"
        >
          Não aceito os termos - Cancelar cadastro
        </a>
      </div>
    </AuthLayout>
  );
}
