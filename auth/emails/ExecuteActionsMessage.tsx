import { EmailLayout } from './EmailLayout';
import { EmailButton } from './EmailButton';

/**
 * E-mail de Execução de Ações Obrigatórias - execute-actions.ftl
 * Template correspondente no Keycloak (Email Theme)
 */
export function ExecuteActionsMessage() {
  return (
    <EmailLayout preheader="Ações pendentes na sua conta ViaFluvialAM">
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
        Sua conta no <strong>ViaFluvialAM</strong> possui algumas ações pendentes que precisam ser concluídas.
      </p>

      {/* Lista de Ações Pendentes */}
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
                fontSize: '14px',
                color: '#1e40af',
                margin: '0 0 12px 0',
                fontWeight: 'bold',
              }}>
                📋 Ações Necessárias:
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#1e40af',
                margin: 0,
                paddingLeft: '20px',
                lineHeight: '1.8',
              }}>
                <li><strong>Atualizar informações de perfil</strong></li>
                <li><strong>Aceitar novos termos de uso (LGPD)</strong></li>
                <li><strong>Verificar número de telefone</strong></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
      }}>
        Para continuar usando a plataforma normalmente, clique no botão abaixo e complete as ações solicitadas:
      </p>

      {/* Botão de Ação */}
      <EmailButton
        href="https://viafluvial.am.gov.br/auth/execute-actions?token=action123"
        text="Completar Ações"
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
          https://viafluvial.am.gov.br/auth/execute-actions?token=action123
        </p>
      </div>

      {/* Prazo */}
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
                <strong>⏰ Prazo:</strong> Por favor, complete estas ações até <strong>30/01/2026</strong>. Após essa data, algumas funcionalidades da sua conta podem ficar limitadas.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Por que isso é necessário */}
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
          Por que isso é necessário?
        </p>
        <p style={{
          fontSize: '13px',
          color: '#6b7280',
          margin: 0,
          lineHeight: '1.6',
        }}>
          Essas atualizações são necessárias para garantir a segurança da sua conta, manter suas informações atualizadas e estar em conformidade com a Lei Geral de Proteção de Dados (LGPD).
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
        }}>
          <strong>Precisa de ajuda?</strong><br />
          Se tiver dúvidas sobre estas ações, entre em contato com nosso suporte através do e-mail{' '}
          <a href="mailto:suporte@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'underline' }}>
            suporte@viafluvial.am.gov.br
          </a>
        </p>
      </div>
    </EmailLayout>
  );
}
