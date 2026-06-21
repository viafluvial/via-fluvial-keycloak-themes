import { ButtonHTMLAttributes } from 'react';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'social';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

/**
 * Componente de Botão reutilizável para formulários de autenticação
 * Classes pensadas para CSS externo nos templates Keycloak
 */
export function FormButton({ 
  children, 
  variant = 'primary', 
  fullWidth = true,
  icon,
  className = '',
  ...props 
}: FormButtonProps) {
  const baseClasses = 'btn font-medium py-2.5 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'btn-primary bg-[#1A5F3B] text-white hover:bg-[#145030] focus:ring-2 focus:ring-[#1A5F3B] focus:ring-offset-2',
    secondary: 'btn-secondary bg-[#F9C74F] text-[#1A5F3B] hover:bg-[#f7be2d] focus:ring-2 focus:ring-[#F9C74F] focus:ring-offset-2',
    outline: 'btn-outline border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300',
    social: 'btn-social border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
