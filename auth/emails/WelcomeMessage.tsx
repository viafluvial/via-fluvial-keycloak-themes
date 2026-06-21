import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Boas-vindas / Conta Criada - welcome.ftl (template customizado)
 * Template correspondente no Keycloak (Email Theme)
 */
export function WelcomeMessage() {
  return (
    <EmailLayout preheader="Bem-vindo ao ViaFluvialAM - Sua jornada pelos rios da Amazônia começa aqui!">
      {/* Banner de Boas-vindas */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: 'linear-gradient(135deg, #1A5F3B, #2d7a52)',
        borderRadius: '8px',
        marginBottom: '32px',
      }}>
        <tbody>
          <tr>
            <td style={{
              background: 'linear-gradient(135deg, #1A5F3B, #2d7a52)',
              padding: '40px 30px',
              textAlign: 'center' as const,
              borderRadius: '8px',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚢</div>
              <h1 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ffffff',
                margin: '0 0 12px 0',
              }}>
                Bem-vindo ao ViaFluvialAM!
              </h1>
              <p style={{
                fontSize: '16px',
                color: '#F9C74F',
                margin: 0,
                fontWeight: '500',
              }}>
                Sua jornada pelos rios da Amazônia começa aqui
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Saudação Personalizada */}
      <h2 style={{
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: '0 0 16px 0',
      }}>
        Olá, João! 👋
      </h2>

      {/* Mensagem de Boas-vindas */}
      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
      }}>
        É com grande satisfação que damos as boas-vindas a você no <strong>ViaFluvialAM</strong>, a plataforma digital de transporte fluvial da Amazônia!
      </p>

      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 32px 0',
      }}>
        Sua conta foi criada com sucesso e agora você pode reservar passagens, escolher camarotes e navegar pelos rios mais incríveis do Brasil com praticidade e segurança.
      </p>

      {/* Confirmação de Conta */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#d1fae5',
        border: '2px solid #10b981',
        borderRadius: '8px',
        marginBottom: '32px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' as const }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                marginBottom: '12px',
              }}>
                <span style={{ fontSize: '24px', color: '#ffffff' }}>✓</span>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#065f46',
                margin: 0,
                fontWeight: 'bold',
              }}>
                Sua conta está ativa e pronta para uso!
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Sobre a Plataforma */}
      <div style={{
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#1e40af',
          margin: '0 0 16px 0',
        }}>
          🌊 Navegue pela Amazônia com facilidade
        </h3>
        
        <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>🎫</span>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      color: '#1e40af',
                      margin: '0 0 4px 0',
                      fontWeight: 'bold',
                    }}>
                      Reserve Passagens Online
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#3b82f6',
                      margin: 0,
                      lineHeight: '1.5',
                    }}>
                      Compre suas passagens com antecedência e garanta seu lugar nas melhores embarcações.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>🛏️</span>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      color: '#1e40af',
                      margin: '0 0 4px 0',
                      fontWeight: 'bold',
                    }}>
                      Escolha seu Camarote
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#3b82f6',
                      margin: 0,
                      lineHeight: '1.5',
                    }}>
                      Viaje com conforto! Selecione entre diferentes categorias de camarotes.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>📱</span>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      color: '#1e40af',
                      margin: '0 0 4px 0',
                      fontWeight: 'bold',
                    }}>
                      Bilhete Digital
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#3b82f6',
                      margin: 0,
                      lineHeight: '1.5',
                    }}>
                      Receba seu bilhete com QR Code direto no celular. Sem papel, sem filas!
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '8px 0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>🗺️</span>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      color: '#1e40af',
                      margin: '0 0 4px 0',
                      fontWeight: 'bold',
                    }}>
                      Rotas e Horários
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#3b82f6',
                      margin: 0,
                      lineHeight: '1.5',
                    }}>
                      Consulte horários de partida, rotas disponíveis e duração das viagens.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Botão Principal */}
      <EmailButton
        href="https://viafluvial.am.gov.br"
        text="Acessar Plataforma"
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
        Ou comece explorando nossas rotas:
      </p>

      <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', marginBottom: '32px' }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' as const }}>
              <a
                href="https://viafluvial.am.gov.br/rotas"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#F9C74F',
                  color: '#1A5F3B',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  textAlign: 'center' as const,
                }}
              >
                Ver Rotas Disponíveis
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Primeiros Passos */}
      <div style={{
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '32px',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#374151',
          margin: '0 0 16px 0',
        }}>
          🚀 Primeiros Passos:
        </h3>
        <ol style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
        }}>
          <li>Complete seu perfil com informações de contato</li>
          <li>Busque por rotas e horários que você deseja</li>
          <li>Escolha suas passagens ou camarotes</li>
          <li>Realize o pagamento de forma segura (Pix ou Cartão)</li>
          <li>Receba seu bilhete digital por e-mail</li>
          <li>Faça check-in no dia da viagem</li>
        </ol>
      </div>

      {/* Dados da Conta */}
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
                margin: '0 0 12px 0',
                fontWeight: 'bold',
              }}>
                📋 Dados da sua conta:
              </p>
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '6px 0',
                    }}>
                      <strong>Nome:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '6px 0',
                      textAlign: 'right' as const,
                    }}>
                      João Silva
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '6px 0',
                    }}>
                      <strong>E-mail:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '6px 0',
                      textAlign: 'right' as const,
                    }}>
                      usuario@email.com
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      padding: '6px 0',
                    }}>
                      <strong>Conta criada em:</strong>
                    </td>
                    <td style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '6px 0',
                      textAlign: 'right' as const,
                    }}>
                      23/01/2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Ajuda e Suporte */}
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
          margin: '0 0 16px 0',
        }}>
          <strong>Precisa de ajuda?</strong><br />
          Nossa equipe está pronta para te ajudar!
        </p>
        <p style={{
          fontSize: '14px',
          color: '#1A5F3B',
          margin: 0,
        }}>
          📧 <a href="mailto:suporte@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>suporte@viafluvial.am.gov.br</a><br />
          📱 <a href="tel:+559230001234" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>(92) 3000-1234</a>
        </p>
      </div>

      {/* Mensagem Final */}
      <div style={{
        backgroundColor: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '32px',
        textAlign: 'center' as const,
      }}>
        <p style={{
          fontSize: '16px',
          color: '#92400e',
          margin: 0,
          lineHeight: '1.6',
          fontStyle: 'italic',
        }}>
          🌳 <strong>"Navegue pelos rios da Amazônia com segurança e conforto!"</strong> 🚢
        </p>
      </div>
    </EmailLayout>
  );
}
