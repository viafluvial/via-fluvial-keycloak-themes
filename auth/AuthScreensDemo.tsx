import { useState } from 'react';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { ResetPasswordScreen } from './ResetPasswordScreen';
import { UpdatePasswordScreen } from './UpdatePasswordScreen';
import { VerifyEmailScreen } from './VerifyEmailScreen';
import { UpdateProfileScreen } from './UpdateProfileScreen';
import { AccountScreen } from './AccountScreen';
import { TermsScreen } from './TermsScreen';
import { OTPScreen } from './OTPScreen';
import { ConfigTOTPScreen } from './ConfigTOTPScreen';
import { LinkIDPScreen } from './LinkIDPScreen';
import { ReauthenticateScreen } from './ReauthenticateScreen';
import { SessionExpiredScreen } from './SessionExpiredScreen';
import { LogoutConfirmScreen } from './LogoutConfirmScreen';
import { ErrorScreen } from './ErrorScreen';
import { VerifyEmailMessage } from './emails/VerifyEmailMessage';
import { PasswordResetMessage } from './emails/PasswordResetMessage';
import { ExecuteActionsMessage } from './emails/ExecuteActionsMessage';
import { LoginErrorMessage } from './emails/LoginErrorMessage';
import { PasswordUpdatedMessage } from './emails/PasswordUpdatedMessage';
import { EmailUpdatedMessage } from './emails/EmailUpdatedMessage';
import { NewLoginMessage } from './emails/NewLoginMessage';
import { SocialAccountCreatedMessage } from './emails/SocialAccountCreatedMessage';
import { WelcomeMessage } from './emails/WelcomeMessage';
import { AccountDisabledMessage } from './emails/AccountDisabledMessage';

/**
 * Componente de demonstração das telas de autenticação e e-mails
 * Para desenvolvimento e visualização de todos os templates Keycloak
 */

type ScreenType = 'auth' | 'email';

type Screen = 
  // Telas Básicas
  | 'login' 
  | 'register' 
  | 'reset-password' 
  | 'update-password' 
  | 'verify-email' 
  | 'update-profile' 
  | 'account'
  // Telas Avançadas
  | 'terms'
  | 'otp'
  | 'config-totp'
  | 'link-idp'
  | 'reauthenticate'
  | 'session-expired'
  | 'logout-confirm'
  | 'error'
  // E-mails
  | 'email-verify'
  | 'email-password-reset'
  | 'email-execute-actions'
  | 'email-login-error'
  | 'email-password-updated'
  | 'email-email-updated'
  | 'email-new-login'
  | 'email-social-account-created'
  | 'email-welcome'
  | 'email-account-disabled';

const screenInfo: Record<Screen, { name: string; template: string; type: ScreenType; category: string }> = {
  // Telas Básicas
  'login': { name: 'Login', template: 'login.ftl', type: 'auth', category: 'Básico' },
  'register': { name: 'Cadastro', template: 'register.ftl', type: 'auth', category: 'Básico' },
  'reset-password': { name: 'Recuperar Senha', template: 'login-reset-password.ftl', type: 'auth', category: 'Básico' },
  'update-password': { name: 'Redefinir Senha', template: 'login-update-password.ftl', type: 'auth', category: 'Básico' },
  'verify-email': { name: 'Verificar E-mail', template: 'verify-email.ftl', type: 'auth', category: 'Básico' },
  'update-profile': { name: 'Atualizar Perfil', template: 'login-update-profile.ftl', type: 'auth', category: 'Básico' },
  'account': { name: 'Meu Perfil', template: 'account.ftl', type: 'auth', category: 'Básico' },
  
  // Telas Avançadas
  'terms': { name: 'Termos de Uso', template: 'login-terms.ftl', type: 'auth', category: 'Avançado' },
  'otp': { name: 'Autenticação 2FA', template: 'login-otp.ftl', type: 'auth', category: 'Avançado' },
  'config-totp': { name: 'Configurar MFA', template: 'login-config-totp.ftl', type: 'auth', category: 'Avançado' },
  'link-idp': { name: 'Vincular Conta', template: 'login-idp-link-confirm.ftl', type: 'auth', category: 'Avançado' },
  'reauthenticate': { name: 'Reautenticar', template: 'login-reauthenticate.ftl', type: 'auth', category: 'Avançado' },
  'session-expired': { name: 'Sessão Expirada', template: 'session-expired.ftl', type: 'auth', category: 'Avançado' },
  'logout-confirm': { name: 'Confirmar Logout', template: 'logout-confirm.ftl', type: 'auth', category: 'Avançado' },
  'error': { name: 'Erro', template: 'error.ftl', type: 'auth', category: 'Avançado' },
  
  // E-mails
  'email-verify': { name: 'E-mail: Verificação', template: 'email-verification.ftl', type: 'email', category: 'E-mails' },
  'email-password-reset': { name: 'E-mail: Reset Senha', template: 'email-password-reset.ftl', type: 'email', category: 'E-mails' },
  'email-execute-actions': { name: 'E-mail: Ações', template: 'email-execute-actions.ftl', type: 'email', category: 'E-mails' },
  'email-login-error': { name: 'E-mail: Login Falhou', template: 'email-event-login-error.ftl', type: 'email', category: 'E-mails' },
  'email-password-updated': { name: 'E-mail: Senha Atualizada', template: 'email-password-updated.ftl', type: 'email', category: 'E-mails' },
  'email-email-updated': { name: 'E-mail: E-mail Atualizado', template: 'email-email-updated.ftl', type: 'email', category: 'E-mails' },
  'email-new-login': { name: 'E-mail: Novo Login', template: 'email-new-login.ftl', type: 'email', category: 'E-mails' },
  'email-social-account-created': { name: 'E-mail: Conta Social Criada', template: 'email-social-account-created.ftl', type: 'email', category: 'E-mails' },
  'email-welcome': { name: 'E-mail: Bem-vindo', template: 'email-welcome.ftl', type: 'email', category: 'E-mails' },
  'email-account-disabled': { name: 'E-mail: Conta Desabilitada', template: 'email-account-disabled.ftl', type: 'email', category: 'E-mails' },
};

export function AuthScreensDemo() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [currentCategory, setCurrentCategory] = useState<string>('Básico');

  const renderScreen = () => {
    switch (currentScreen) {
      // Telas Básicas
      case 'login':
        return <LoginScreen />;
      case 'register':
        return <RegisterScreen />;
      case 'reset-password':
        return <ResetPasswordScreen />;
      case 'update-password':
        return <UpdatePasswordScreen />;
      case 'verify-email':
        return <VerifyEmailScreen />;
      case 'update-profile':
        return <UpdateProfileScreen />;
      case 'account':
        return <AccountScreen />;
      
      // Telas Avançadas
      case 'terms':
        return <TermsScreen />;
      case 'otp':
        return <OTPScreen />;
      case 'config-totp':
        return <ConfigTOTPScreen />;
      case 'link-idp':
        return <LinkIDPScreen />;
      case 'reauthenticate':
        return <ReauthenticateScreen />;
      case 'session-expired':
        return <SessionExpiredScreen />;
      case 'logout-confirm':
        return <LogoutConfirmScreen />;
      case 'error':
        return <ErrorScreen />;
      
      // E-mails
      case 'email-verify':
        return <VerifyEmailMessage />;
      case 'email-password-reset':
        return <PasswordResetMessage />;
      case 'email-execute-actions':
        return <ExecuteActionsMessage />;
      case 'email-login-error':
        return <LoginErrorMessage />;
      case 'email-password-updated':
        return <PasswordUpdatedMessage />;
      case 'email-email-updated':
        return <EmailUpdatedMessage />;
      case 'email-new-login':
        return <NewLoginMessage />;
      case 'email-social-account-created':
        return <SocialAccountCreatedMessage />;
      case 'email-welcome':
        return <WelcomeMessage />;
      case 'email-account-disabled':
        return <AccountDisabledMessage />;
      
      default:
        return <LoginScreen />;
    }
  };

  const categories = ['Básico', 'Avançado', 'E-mails'];
  const screensInCategory = Object.entries(screenInfo).filter(
    ([, info]) => info.category === currentCategory
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de Navegação para Dev */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Telas de Autenticação - Keycloak Theme
              </h2>
              <p className="text-xs text-gray-500">
                Template atual: <code className="bg-gray-100 px-2 py-0.5 rounded">{screenInfo[currentScreen].template}</code>
                {' • '}
                Tipo: <span className="font-medium">{screenInfo[currentScreen].type === 'auth' ? 'Tela Web' : 'E-mail HTML'}</span>
              </p>
            </div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para Home
            </a>
          </div>

          {/* Tabs de Categoria */}
          <div className="flex gap-2 mb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setCurrentCategory(category);
                  const firstScreen = Object.entries(screenInfo).find(
                    ([, info]) => info.category === category
                  );
                  if (firstScreen) {
                    setCurrentScreen(firstScreen[0] as Screen);
                  }
                }}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${currentCategory === category
                    ? 'bg-[#1A5F3B] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({Object.values(screenInfo).filter(info => info.category === category).length})
                </span>
              </button>
            ))}
          </div>
          
          {/* Botões de Telas */}
          <div className="flex flex-wrap gap-2">
            {screensInCategory.map(([key, info]) => (
              <button
                key={key}
                onClick={() => setCurrentScreen(key as Screen)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${currentScreen === key 
                    ? 'bg-[#F9C74F] text-[#1A5F3B] shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }
                `}
              >
                {info.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tela Atual */}
      <div className="py-8">
        {renderScreen()}
      </div>

      {/* Informações Técnicas */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border border-gray-200">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          ℹ️ Informações Técnicas
        </h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• <strong>Total de templates:</strong> {Object.keys(screenInfo).length}</li>
          <li>• <strong>Telas de autenticação:</strong> {Object.values(screenInfo).filter(i => i.type === 'auth').length}</li>
          <li>• <strong>E-mails transacionais:</strong> {Object.values(screenInfo).filter(i => i.type === 'email').length}</li>
          <li>• <strong>HTML semântico</strong> - sem JS pesado</li>
          <li>• <strong>CSS externo</strong> nas telas</li>
          <li>• <strong>CSS inline</strong> nos e-mails</li>
          <li>• <strong>Responsivo</strong> - mobile-first</li>
          <li>• <strong>Acessível</strong> - ARIA labels</li>
          <li>• <strong>Compatível</strong> com templates .ftl</li>
        </ul>
      </div>
    </div>
  );
}