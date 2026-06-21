import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Confirmação de Alteração de E-mail - event-update-email.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function EmailUpdatedMessage() {
  return (
    <EmailLayout preheader="Seu e-mail foi alterado com sucesso - ViaFluvialAM">
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
                backgroundColor: '#dbeafe',
                borderRadius: '50%',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>📧</span>
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
        O endereço de e-mail da sua conta no <strong>ViaFluvialAM</strong> foi alterado com sucesso.
      </p>

      {/* Novo E-mail */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#eff6ff',
        border: '2px solid #3b82f6',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' as const }}>
              <p style={{
                fontSize: '14px',
                color: '#1e40af',
                margin: '0 0 8px 0',
                fontWeight: 'bold',
              }}>
                Novo endereço de e-mail:
              </p>
              <p style={{
                fontSize: '18px',
                color: '#1e40af',
                margin: 0,
                fontWeight: 'bold',
                fontFamily: 'monospace',
              }}>
                novoemail@example.com
              </p>
            </td>
          </tr>
        </tbody>
      </table>

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
                📊 Informações da Alteração:
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
                      <strong>E-mail Anterior:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      antigoemail@example.com
                    </td>
                  </tr>
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
                      23/01/2026 às 15:45
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                    }}>
                      <strong>Endereço IP:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      textAlign: 'right' as const,
                    }}>
                      177.123.45.67 (Manaus, AM)
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Próximos Passos */}
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
                <strong>✓ Importante:</strong> A partir de agora, use o novo e-mail <strong>novoemail@example.com</strong> para fazer login e receber comunicações.
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
                ⚠️ Você não fez esta alteração?
              </p>
              <p style={{
                fontSize: '13px',
                color: '#991b1b',
                margin: '0 0 12px 0',
                lineHeight: '1.6',
              }}>
                Se você <strong>não alterou seu e-mail</strong>, alguém pode ter acesso não autorizado à sua conta.
              </p>
              <p style={{
                fontSize: '13px',
                color: '#991b1b',
                margin: 0,
                lineHeight: '1.6',
              }}>
                <strong>Ação urgente:</strong> Entre em contato imediatamente com nossa equipe de segurança:{' '}
                <a href="mailto:seguranca@viafluvial.am.gov.br" style={{ color: '#991b1b', textDecoration: 'underline', fontWeight: 'bold' }}>
                  seguranca@viafluvial.am.gov.br
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botão de Ação */}
      <EmailButton
        href="https://viafluvial.am.gov.br/account"
        text="Ver Minha Conta"
        variant="primary"
      />

      {/* Informação de Segurança */}
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
          <strong>Dica de segurança:</strong> Este e-mail foi enviado para ambos os endereços (antigo e novo) para garantir que você seja notificado sobre esta alteração importante.
        </p>
      </div>
    </EmailLayout>
  );
}
