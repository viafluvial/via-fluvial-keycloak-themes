import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Conta Desabilitada/Bloqueada - event-user-disabled.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function AccountDisabledMessage() {
  return (
    <EmailLayout preheader="Sua conta ViaFluvialAM foi temporariamente bloqueada">
      {/* Alerta Visual */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#fef2f2',
        border: '3px solid #ef4444',
        borderRadius: '8px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '24px', textAlign: 'center' as const }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                backgroundColor: '#ef4444',
                borderRadius: '50%',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px', color: '#ffffff' }}>⚠️</span>
              </div>
              <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#991b1b',
                margin: 0,
              }}>
                Conta Temporariamente Bloqueada
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
        Informamos que sua conta no <strong>ViaFluvialAM</strong> foi temporariamente <strong>bloqueada</strong> por motivos de segurança ou violação de nossos termos de uso.
      </p>

      {/* Detalhes do Bloqueio */}
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
                📊 Informações do Bloqueio:
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
                      <strong>Data do Bloqueio:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      23/01/2026 às 17:00
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <strong>Motivo:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '8px 0',
                      borderBottom: '1px solid #e5e7eb',
                      textAlign: 'right' as const,
                    }}>
                      Atividade suspeita detectada
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '8px 0',
                    }}>
                      <strong>Status:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#ef4444',
                      padding: '8px 0',
                      textAlign: 'right' as const,
                      fontWeight: 'bold',
                    }}>
                      BLOQUEADA
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Possíveis Motivos */}
      <div style={{
        backgroundColor: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: '6px',
        padding: '20px',
        marginBottom: '24px',
      }}>
        <p style={{
          fontSize: '14px',
          color: '#92400e',
          margin: '0 0 12px 0',
          fontWeight: 'bold',
        }}>
          🔍 Possíveis motivos do bloqueio:
        </p>
        <ul style={{
          fontSize: '13px',
          color: '#92400e',
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
        }}>
          <li>Múltiplas tentativas de login com falha</li>
          <li>Atividade suspeita ou não autorizada detectada</li>
          <li>Violação dos termos de uso da plataforma</li>
          <li>Solicitação de bloqueio por segurança</li>
          <li>Pagamentos contestados ou irregularidades financeiras</li>
        </ul>
      </div>

      {/* O que fazer */}
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
                ✓ Como resolver:
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '14px',
                  color: '#1e40af',
                  margin: '0 0 8px 0',
                  fontWeight: 'bold',
                }}>
                  1. Entre em contato com nosso suporte
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#3b82f6',
                  margin: 0,
                  lineHeight: '1.5',
                }}>
                  Nossa equipe analisará o caso e fornecerá orientações para reativar sua conta.
                </p>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  fontSize: '14px',
                  color: '#1e40af',
                  margin: '0 0 8px 0',
                  fontWeight: 'bold',
                }}>
                  2. Forneça informações de identificação
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#3b82f6',
                  margin: 0,
                  lineHeight: '1.5',
                }}>
                  Pode ser necessário confirmar sua identidade para questões de segurança.
                </p>
              </div>
              
              <div>
                <p style={{
                  fontSize: '14px',
                  color: '#1e40af',
                  margin: '0 0 8px 0',
                  fontWeight: 'bold',
                }}>
                  3. Aguarde análise
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#3b82f6',
                  margin: 0,
                  lineHeight: '1.5',
                }}>
                  Nosso time responderá em até 48 horas úteis.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botão de Contato */}
      <EmailButton
        href="mailto:suporte@viafluvial.am.gov.br?subject=Conta Bloqueada - Solicitar Reativação"
        text="Contatar Suporte"
        variant="primary"
      />

      {/* Informações de Contato */}
      <div style={{
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        padding: '20px',
        marginTop: '24px',
        marginBottom: '24px',
      }}>
        <p style={{
          fontSize: '14px',
          color: '#374151',
          margin: '0 0 16px 0',
          fontWeight: 'bold',
          textAlign: 'center' as const,
        }}>
          📞 Canais de Atendimento:
        </p>
        
        <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{
                fontSize: '13px',
                color: '#6b7280',
                padding: '6px 0',
                textAlign: 'center' as const,
              }}>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:suporte@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>
                  suporte@viafluvial.am.gov.br
                </a>
              </td>
            </tr>
            <tr>
              <td style={{
                fontSize: '13px',
                color: '#6b7280',
                padding: '6px 0',
                textAlign: 'center' as const,
              }}>
                <strong>Telefone:</strong>{' '}
                <a href="tel:+559230001234" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>
                  (92) 3000-1234
                </a>
              </td>
            </tr>
            <tr>
              <td style={{
                fontSize: '13px',
                color: '#6b7280',
                padding: '6px 0',
                textAlign: 'center' as const,
              }}>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/5592999991234" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>
                  (92) 99999-1234
                </a>
              </td>
            </tr>
            <tr>
              <td style={{
                fontSize: '12px',
                color: '#9ca3af',
                padding: '12px 0 0 0',
                textAlign: 'center' as const,
              }}>
                Horário de atendimento: Segunda a Sexta, 8h às 18h
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Aviso Importante */}
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
                fontSize: '13px',
                color: '#991b1b',
                margin: 0,
                lineHeight: '1.6',
              }}>
                <strong>⚠️ Importante:</strong> Enquanto sua conta estiver bloqueada, você não poderá fazer login, realizar reservas ou acessar serviços da plataforma. Todas as reservas ativas serão mantidas e não serão afetadas.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Informação sobre Dados */}
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
          textAlign: 'center' as const,
        }}>
          <strong>Seus dados estão seguros:</strong> Todas as suas informações pessoais e histórico de viagens permanecem protegidos e armazenados com segurança, mesmo durante o bloqueio.
        </p>
      </div>
    </EmailLayout>
  );
}
