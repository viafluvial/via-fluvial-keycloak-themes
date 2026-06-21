import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Novo Login Detectado - event-login.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function NewLoginMessage() {
  return (
    <EmailLayout preheader="Novo acesso detectado em sua conta - ViaFluvialAM">
      {/* Ícone de Dispositivo */}
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
                <span style={{ fontSize: '32px' }}>🔔</span>
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
        Detectamos um novo acesso à sua conta do <strong>ViaFluvialAM</strong>.
      </p>

      {/* Detalhes do Login */}
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
                📱 Detalhes do Acesso:
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
                      23/01/2026 às 16:20 (horário de Brasília)
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <strong>Tipo de Dispositivo:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      📱 Mobile (Android)
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <strong>Navegador:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      Chrome Mobile 120.0
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
                      <strong>Localização Aproximada:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      textAlign: 'right' as const,
                    }}>
                      Manaus, Amazonas, Brasil
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Plataforma Detectada */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '16px', textAlign: 'center' as const }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '8px',
              }}>
                APLICATIVO MOBILE
              </div>
              <p style={{
                fontSize: '13px',
                color: '#1e40af',
                margin: 0,
                lineHeight: '1.5',
              }}>
                Este login foi realizado através do aplicativo mobile do ViaFluvialAM
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Foi você? */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#d1fae5',
        border: '1px solid #6ee7b7',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px' }}>
              <p style={{
                fontSize: '16px',
                color: '#065f46',
                margin: '0 0 16px 0',
                fontWeight: 'bold',
              }}>
                Foi você?
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#065f46',
                margin: '0 0 12px 0',
                lineHeight: '1.6',
              }}>
                <strong>✅ Se foi você:</strong> Ótimo! Nenhuma ação é necessária. Este é apenas um aviso de segurança.
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#065f46',
                margin: 0,
                lineHeight: '1.6',
              }}>
                <strong>❌ Se não foi você:</strong> Sua conta pode estar comprometida. Altere sua senha imediatamente.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botão de Segurança */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/reset-password"
        text="Alterar Minha Senha"
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
        Ou revise seus acessos recentes:
      </p>

      <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', marginBottom: '24px' }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' as const }}>
              <a
                href="https://viafluvial.am.gov.br/account/sessions"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#ffffff',
                  color: '#1A5F3B',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  border: '2px solid #1A5F3B',
                  borderRadius: '6px',
                  textAlign: 'center' as const,
                }}
              >
                Ver Todas as Sessões Ativas
              </a>
            </td>
          </tr>
        </tbody>
      </table>

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
          🔒 Mantenha sua conta segura:
        </p>
        <ul style={{
          fontSize: '13px',
          color: '#6b7280',
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
        }}>
          <li>Sempre faça logout em dispositivos compartilhados</li>
          <li>Ative a verificação em duas etapas</li>
          <li>Revise periodicamente suas sessões ativas</li>
          <li>Use senhas fortes e únicas</li>
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
          fontSize: '13px',
          color: '#6b7280',
          lineHeight: '1.6',
          margin: '0 0 8px 0',
        }}>
          <strong>Suspeita de acesso não autorizado?</strong>
        </p>
        <p style={{
          fontSize: '14px',
          color: '#1A5F3B',
          margin: 0,
        }}>
          Contate nossa equipe de segurança:<br />
          <a href="mailto:seguranca@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'underline', fontWeight: 'bold' }}>
            seguranca@viafluvial.am.gov.br
          </a>
        </p>
      </div>
    </EmailLayout>
  );
}
