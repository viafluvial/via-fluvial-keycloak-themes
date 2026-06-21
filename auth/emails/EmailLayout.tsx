import { ReactNode } from 'react';

interface EmailLayoutProps {
  children: ReactNode;
  preheader?: string;
}

/**
 * Layout base para e-mails transacionais
 * CSS inline para compatibilidade com clientes de e-mail
 * Largura máxima: 600px
 */
export function EmailLayout({ children, preheader }: EmailLayoutProps) {
  return (
    <div style={{
      backgroundColor: '#f3f4f6',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '40px 20px',
      minHeight: '100vh',
    }}>
      {/* Preheader (texto invisível que aparece na prévia do e-mail) */}
      {preheader && (
        <div style={{
          display: 'none',
          fontSize: '1px',
          color: '#f3f4f6',
          lineHeight: '1px',
          maxHeight: '0px',
          maxWidth: '0px',
          opacity: 0,
          overflow: 'hidden',
        }}>
          {preheader}
        </div>
      )}

      {/* Container Principal */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <tbody>
          {/* Header com Logo */}
          <tr>
            <td style={{
              backgroundColor: '#1A5F3B',
              padding: '30px 40px',
              textAlign: 'center' as const,
            }}>
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'center' as const }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F9C74F" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <span style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: '#ffffff',
                        }}>
                          ViaFluvial<span style={{ color: '#F9C74F' }}>AM</span>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Conteúdo */}
          <tr>
            <td style={{ padding: '40px' }}>
              {children}
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td style={{
              backgroundColor: '#f9fafb',
              padding: '30px 40px',
              borderTop: '1px solid #e5e7eb',
            }}>
              <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
                <tbody>
                  {/* Links de Rede Social (opcional) */}
                  <tr>
                    <td style={{ textAlign: 'center' as const, paddingBottom: '20px' }}>
                      <a href="https://facebook.com" style={{ margin: '0 10px' }}>
                        <img src="https://via.placeholder.com/24" alt="Facebook" width="24" height="24" />
                      </a>
                      <a href="https://instagram.com" style={{ margin: '0 10px' }}>
                        <img src="https://via.placeholder.com/24" alt="Instagram" width="24" height="24" />
                      </a>
                    </td>
                  </tr>

                  {/* Informações de Contato */}
                  <tr>
                    <td style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      textAlign: 'center' as const,
                      lineHeight: '1.5',
                    }}>
                      <p style={{ margin: '0 0 10px 0' }}>
                        ViaFluvialAM - Navegação Amazônica
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Manaus, Amazonas, Brasil
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        <a href="mailto:contato@viafluvial.am.gov.br" style={{ color: '#1A5F3B', textDecoration: 'none' }}>
                          contato@viafluvial.am.gov.br
                        </a>
                      </p>
                    </td>
                  </tr>

                  {/* Links de Preferências */}
                  <tr>
                    <td style={{
                      fontSize: '11px',
                      color: '#9ca3af',
                      textAlign: 'center' as const,
                      paddingTop: '20px',
                      borderTop: '1px solid #e5e7eb',
                    }}>
                      <p style={{ margin: '0' }}>
                        <a href="#" style={{ color: '#6b7280', textDecoration: 'underline', margin: '0 8px' }}>
                          Preferências de E-mail
                        </a>
                        |
                        <a href="#" style={{ color: '#6b7280', textDecoration: 'underline', margin: '0 8px' }}>
                          Política de Privacidade
                        </a>
                        |
                        <a href="#" style={{ color: '#6b7280', textDecoration: 'underline', margin: '0 8px' }}>
                          Descadastrar
                        </a>
                      </p>
                      <p style={{ margin: '10px 0 0 0' }}>
                        © 2026 ViaFluvialAM. Todos os direitos reservados.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Texto de Compatibilidade */}
      <table cellPadding="0" cellSpacing="0" border={0} style={{
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto 0',
      }}>
        <tbody>
          <tr>
            <td style={{
              fontSize: '11px',
              color: '#9ca3af',
              textAlign: 'center' as const,
              padding: '0 20px',
            }}>
              Se você não solicitou esta ação, ignore este e-mail. Sua conta permanece segura.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
