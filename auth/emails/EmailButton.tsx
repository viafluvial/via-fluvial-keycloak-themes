interface EmailButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

/**
 * Botão para e-mails (compatível com clientes de e-mail)
 */
export function EmailButton({ href, text, variant = 'primary' }: EmailButtonProps) {
  const colors = {
    primary: {
      backgroundColor: '#1A5F3B',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#F9C74F',
      color: '#1A5F3B',
    },
  };

  return (
    <table cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%', margin: '20px 0' }}>
      <tbody>
        <tr>
          <td style={{ textAlign: 'center' as const }}>
            <a
              href={href}
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                backgroundColor: colors[variant].backgroundColor,
                color: colors[variant].color,
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderRadius: '6px',
                textAlign: 'center' as const,
              }}
            >
              {text}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
