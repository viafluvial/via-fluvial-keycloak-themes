import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Conta Criada via Login Social - execute-actions.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function SocialAccountCreatedMessage() {
  return (
    <EmailLayout preheader="Complete seu cadastro no ViaFluvialAM">
      {/* Ícone de Boas-vindas */}
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
                backgroundColor: '#fef3c7',
                borderRadius: '50%',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '32px' }}>👋</span>
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
        Bem-vindo ao ViaFluvialAM, João!
      </h1>

      {/* Mensagem de Boas-vindas */}
      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
      }}>
        Ficamos felizes em ter você conosco! Você criou sua conta usando o <strong>login social</strong>, o que torna o acesso mais rápido e seguro.
      </p>

      {/* Conta Social Utilizada */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px', textAlign: 'center' as const }}>
              <p style={{
                fontSize: '13px',
                color: '#1e40af',
                margin: '0 0 12px 0',
              }}>
                Conta vinculada com:
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#1877F2',
                padding: '12px 24px',
                borderRadius: '8px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}>
                  Facebook
                </span>
              </div>
              <p style={{
                fontSize: '12px',
                color: '#1e40af',
                margin: '12px 0 0 0',
              }}>
                usuario@email.com
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Ações Pendentes */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        backgroundColor: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: '6px',
        marginBottom: '24px',
      }}>
        <tbody>
          <tr>
            <td style={{ padding: '20px' }}>
              <p style={{
                fontSize: '14px',
                color: '#92400e',
                margin: '0 0 12px 0',
                fontWeight: 'bold',
              }}>
                📋 Complete seu cadastro
              </p>
              <p style={{
                fontSize: '13px',
                color: '#92400e',
                margin: 0,
                lineHeight: '1.6',
              }}>
                Para aproveitar todos os recursos da plataforma e fazer suas primeiras reservas, precisamos que você complete algumas informações do seu perfil.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* O que você precisa fazer */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '20px',
        borderRadius: '6px',
        marginBottom: '24px',
        border: '1px solid #e5e7eb',
      }}>
        <p style={{
          fontSize: '14px',
          color: '#374151',
          margin: '0 0 12px 0',
          fontWeight: 'bold',
        }}>
          ✓ O que você precisa completar:
        </p>
        <ul style={{
          fontSize: '13px',
          color: '#6b7280',
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
        }}>
          <li>Adicionar seu nome completo</li>
          <li>Informar seu CPF (para emissão de passagens)</li>
          <li>Adicionar número de telefone de contato</li>
          <li>Aceitar os termos de uso e política de privacidade</li>
        </ul>
      </div>

      {/* Botão Principal */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/complete-profile?token=complete123"
        text="Completar Cadastro"
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
          https://viafluvial.am.gov.br/auth/complete-profile?token=complete123
        </p>
      </div>

      {/* Benefícios da Plataforma */}
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
                fontSize: '14px',
                color: '#065f46',
                margin: '0 0 12px 0',
                fontWeight: 'bold',
              }}>
                🚢 O que você pode fazer no ViaFluvialAM:
              </p>
              <ul style={{
                fontSize: '13px',
                color: '#065f46',
                margin: 0,
                paddingLeft: '20px',
                lineHeight: '1.8',
              }}>
                <li>Reservar passagens para viagens pelos rios da Amazônia</li>
                <li>Escolher e reservar camarotes com conforto</li>
                <li>Ver horários e rotas em tempo real</li>
                <li>Fazer check-in digital e receber bilhetes no celular</li>
                <li>Acompanhar histórico de viagens</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Prazo */}
      <div style={{
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '6px',
        padding: '16px',
        marginBottom: '24px',
      }}>
        <p style={{
          fontSize: '13px',
          color: '#991b1b',
          margin: 0,
          lineHeight: '1.5',
        }}>
          <strong>⏰ Importante:</strong> Complete seu cadastro nos próximos <strong>7 dias</strong> para ativar todas as funcionalidades da sua conta.
        </p>
      </div>

      {/* Ajuda */}
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
          Precisa de ajuda? Entre em contato através do e-mail{' '}
          <a href="mailto:suporte@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>
            suporte@viafluvial.am.gov.br
          </a>
        </p>
      </div>
    </EmailLayout>
  );
}
