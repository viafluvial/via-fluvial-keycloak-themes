import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Alerta de Tentativa de Login Inválida - event-login-error.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function LoginErrorMessage() {
  return (
    <EmailLayout preheader="Alerta de segurança: tentativa de login não autorizada detectada">
      {/* Alerta Visual */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#fef2f2',
        border: '2px solid #ef4444',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' as const }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '12px',
              }}>
                🚨
              </div>
              <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#991b1b',
                margin: 0,
              }}>
                Alerta de Segurança
              </h2>
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
        Detectamos uma <strong>tentativa de login com falha</strong> na sua conta do <strong>ViaFluvialAM</strong>.
      </p>

      {/* Detalhes da Tentativa */}
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
                📊 Detalhes da Tentativa:
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
                      23/01/2026 às 14:45:32 (horário de Brasília)
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
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <strong>Localização:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      São Paulo, SP, Brasil
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                    }}>
                      <strong>Navegador:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      textAlign: 'right' as const,
                    }}>
                      Chrome 120.0 (Windows)
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Foi você? */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px' }}>
              <p style={{
                fontSize: '16px',
                color: '#1e40af',
                margin: '0 0 16px 0',
                fontWeight: 'bold',
              }}>
                Foi você?
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#1e40af',
                margin: '0 0 16px 0',
                lineHeight: '1.6',
              }}>
                <strong>✅ Se foi você:</strong> Ignore este e-mail. Pode ser que você tenha digitado a senha incorretamente.
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#1e40af',
                margin: 0,
                lineHeight: '1.6',
              }}>
                <strong>❌ Se não foi você:</strong> Sua conta pode estar em risco. Recomendamos que você altere sua senha imediatamente.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botão de Ação */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/reset-password"
        text="Alterar Minha Senha Agora"
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
          🔒 Dicas de Segurança:
        </p>
        <ul style={{
          fontSize: '13px',
          color: '#6b7280',
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
        }}>
          <li>Use senhas fortes e únicas para cada serviço</li>
          <li>Ative a verificação em duas etapas para maior segurança</li>
          <li>Nunca compartilhe sua senha com ninguém</li>
          <li>Desconfie de e-mails ou mensagens suspeitas</li>
          <li>Mantenha seu dispositivo e navegador atualizados</li>
        </ul>
      </div>

      {/* Contato de Emergência */}
      <div style={{
        marginTop: '32px',
        paddingTop: '24px',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center' as const,
      }}>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          lineHeight: '1.6',
          margin: '0 0 12px 0',
        }}>
          <strong>Suspeita de atividade não autorizada?</strong>
        </p>
        <p style={{
          fontSize: '14px',
          color: '#1A5F3B',
          margin: 0,
        }}>
          Entre em contato imediatamente:<br />
          <a href="mailto:seguranca@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'underline', fontWeight: 'bold' }}>
            seguranca@viafluvial.am.gov.br
          </a>
        </p>
      </div>
    </EmailLayout>
  );
}
