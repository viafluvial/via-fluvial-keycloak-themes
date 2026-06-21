import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Senha Alterada com Sucesso - event-update-password.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function PasswordUpdatedMessage() {
  return (
    <EmailLayout preheader="Sua senha foi alterada com sucesso - ViaFluvialAM">
      {/* Ícone de Confirmação */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' as const }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                backgroundColor: '#d1fae5',
                borderRadius: '50%',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>✓</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

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
        Sua senha do <strong>ViaFluvialAM</strong> foi alterada com sucesso.
      </p>

      {/* Detalhes da Alteração */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px' }}>
              <p style={{
                fontSize: '14px',
                color: '#374151',
                margin: '0 0 16px 0',
                fontWeight: 'bold',
              }}>
                📊 Detalhes da Alteração:
              </p>
              
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <strong>Data e Hora:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      23/01/2026 às 15:30 (horário de Brasília)
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <strong>Endereço IP:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      177.123.45.67
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                    }}>
                      <strong>Localização:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      textAlign: 'right' as const,
                    }}>
                      Manaus, AM, Brasil
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Confirmação Visual */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#d1fae5',
        border: '1px solid #6ee7b7',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '16px' }}>
              <p style={{
                fontSize: '14px',
                color: '#065f46',
                margin: 0,
                lineHeight: '1.5',
              }}>
                <strong>✓ Confirmação:</strong> A partir de agora, use sua nova senha para acessar sua conta.
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
        marginBottom: '24px',
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
                🔒 Você não reconhece esta alteração?
              </p>
              <p style={{
                fontSize: '13px',
                color: '#991b1b',
                margin: '0 0 12px 0',
                lineHeight: '1.6',
              }}>
                Se você <strong>não alterou sua senha</strong>, sua conta pode estar comprometida.
              </p>
              <p style={{
                fontSize: '13px',
                color: '#991b1b',
                margin: 0,
                lineHeight: '1.6',
              }}>
                <strong>Ação imediata:</strong> Entre em contato com nossa equipe de segurança pelo e-mail{' '}
                <a href="mailto:seguranca@viafluvial.am.gov.br" style={{ color: '#991b1b', textDecoration: 'underline' }}>
                  seguranca@viafluvial.am.gov.br
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botão de Ação */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/login"
        text="Acessar Minha Conta"
        variant="primary"
      />

      {/* Dicas de Segurança */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '20px',
        borderRadius: '6px',
        marginTop: '32px',
        border: '1px solid #e5e7eb',
      }}>
        <p style={{
          fontSize: '14px',
          color: '#374151',
          margin: '0 0 12px 0',
          fontWeight: 'bold',
        }}>
          💡 Dicas para manter sua conta segura:
        </p>
        <ul style={{
          fontSize: '13px',
          color: '#6b7280',
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
        }}>
          <li>Nunca compartilhe sua senha com ninguém</li>
          <li>Use senhas únicas e fortes para cada serviço</li>
          <li>Ative a verificação em duas etapas</li>
          <li>Atualize sua senha regularmente</li>
        </ul>
      </div>
    </EmailLayout>
  );
}
