import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

/**
 * Layout base para todas as telas de autenticação
 * Simula a estrutura que será usada nos templates FreeMarker (.ftl) do Keycloak
 */
export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A8D5BA] to-[#E8F5E9] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo e Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-10 h-10 text-[#1A5F3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-2xl font-bold text-[#1A5F3B]">
              ViaFluvial<span className="text-[#F9C74F]">AM</span>
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[#1A5F3B] mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 text-sm">{subtitle}</p>
          )}
        </div>

        {/* Card de Conteúdo */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>© 2026 ViaFluvialAM - Navegação Amazônica</p>
        </div>
      </div>
    </div>
  );
}
