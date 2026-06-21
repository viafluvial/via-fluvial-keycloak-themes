import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Confirmação de E-mail - verify-email.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function VerifyEmailMessage() {
  return (
    <EmailLayout preheader="Confirme seu e-mail para ativar sua conta no ViaFluvialAM">
      {/* Saudação */}
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: '0 0 16px 0',
      }}>
        Olá, João!
      </h1>

      {/* Mensagem Principal */}
      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
      }}>
        Bem-vindo ao <strong>ViaFluvialAM</strong>! Estamos felizes em ter você conosco.
      </p>

      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
      }}>
        Para começar a usar nossa plataforma e reservar suas viagens pela Amazônia, precisamos confirmar seu endereço de e-mail.
      </p>

      {/* Botão de Confirmação */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/verify?token=abc123xyz"
        text="Confirmar E-mail"
        variant="primary"
      />

      {/* Link Alternativo */}
      <p style={{
        fontSize: '14px',
        color: '#6b7280',
        lineHeight: '1.6',
        margin: '20px 0',
        textAlign: 'center' as const,
      }}>
        Ou copie e cole este link no seu navegador:
      </p>

      <div style={{
        backgroundColor: '#f3f4f6',
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <p style={{
          fontSize: '12px',
          color: '#6b7280',
          wordBreak: 'break-all',
          margin: 0,
          fontFamily: 'monospace',
        }}>
          https://viafluvial.am.gov.br/auth/verify?token=abc123xyz
        </p>
      </div>

      {/* Aviso de Validade */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: '6px',
        marginTop: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '16px' }}>
              <p style={{
                fontSize: '14px',
                color: '#92400e',
                margin: 0,
                lineHeight: '1.5',
              }}>
                <strong>⏰ Atenção:</strong> Este link é válido por <strong>24 horas</strong>. Após esse período, você precisará solicitar um novo e-mail de confirmação.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Segurança */}
      <div style={{
        marginTop: '32px',
        paddingTop: '24px',
        borderTop: '1px solid #e5e7eb',
      }}>
        <p style={{
          fontSize: '13px',
          color: '#6b7280',
          lineHeight: '1.6',
          margin: 0,
        }}>
          <strong>Dica de segurança:</strong> Nunca compartilhe este link com outras pessoas. Se você não criou uma conta no ViaFluvialAM, ignore este e-mail.
        </p>
      </div>
    </EmailLayout>
  );
}
