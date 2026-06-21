import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Recuperação de Senha - password-reset.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function PasswordResetMessage() {
  return (
    <EmailLayout preheader="Solicitação de redefinição de senha - ViaFluvialAM">
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
        Recebemos uma solicitação para redefinir a senha da sua conta no <strong>ViaFluvialAM</strong>.
      </p>

      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
      }}>
        Para criar uma nova senha, clique no botão abaixo:
      </p>

      {/* Botão de Redefinição */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/reset-password?token=xyz789abc"
        text="Redefinir Senha"
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
          https://viafluvial.am.gov.br/auth/reset-password?token=xyz789abc
        </p>
      </div>

      {/* Aviso de Tempo */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: '6px',
        marginBottom: '24px',
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
                <strong>⏰ Validade:</strong> Este link expira em <strong>1 hora</strong>. Após esse período, você precisará solicitar um novo link.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Aviso de Segurança */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '6px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '16px' }}>
              <p style={{
                fontSize: '14px',
                color: '#991b1b',
                margin: '0 0 12px 0',
                fontWeight: 'bold',
              }}>
                🔒 Aviso de Segurança
              </p>
              <ul style={{
                fontSize: '13px',
                color: '#991b1b',
                margin: 0,
                paddingLeft: '20px',
                lineHeight: '1.6',
              }}>
                <li>Se você não solicitou esta alteração, <strong>ignore este e-mail</strong></li>
                <li>Sua senha atual permanecerá ativa</li>
                <li>Nunca compartilhe este link com outras pessoas</li>
                <li>Se suspeitar de atividade não autorizada, <a href="mailto:seguranca@viafluvial.am.gov.br" style={{ color: '#991b1b', textDecoration: 'underline' }}>contate nossa equipe</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Informação Adicional */}
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
          <strong>Detalhes da solicitação:</strong><br />
          Data e hora: 23/01/2026 às 14:45<br />
          Endereço IP: 177.123.45.67<br />
          Localização aproximada: Manaus, AM
        </p>
      </div>
    </EmailLayout>
  );
}
