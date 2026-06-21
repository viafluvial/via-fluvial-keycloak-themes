<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaOtpTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaOtpSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/></svg>
      </span>
    </div>

    <div class="vfa-alert vfa-alert--info">
      <span class="vfa-alert__icon"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg></span>
      <span class="vfa-alert__text">${msg("vfaOtpInfo")}</span>
    </div>

    <form id="kc-otp-login-form" class="vfa-form" action="${url.loginAction}" method="post">

      <#if otpLogin?? && otpLogin.userOtpCredentials?? && (otpLogin.userOtpCredentials?size > 1)>
        <div class="vfa-form-group">
          <label class="vfa-label">${msg("loginChooseAuthenticator")}</label>
          <#list otpLogin.userOtpCredentials as otpCredential>
            <label class="vfa-checkbox vfa-mb">
              <input type="radio" name="selectedCredentialId" value="${otpCredential.id}" <#if otpCredential.id == otpLogin.selectedCredentialId>checked</#if>/>
              <span>${otpCredential.userLabel}</span>
            </label>
          </#list>
        </div>
      </#if>

      <div class="vfa-otp" data-vfa-otp data-vfa-otp-target="otp">
        <input data-otp-box inputmode="numeric" maxlength="1" autocomplete="one-time-code" autofocus aria-label="${msg('loginOtpOneTime')} 1"/>
        <input data-otp-box inputmode="numeric" maxlength="1" aria-label="${msg('loginOtpOneTime')} 2"/>
        <input data-otp-box inputmode="numeric" maxlength="1" aria-label="${msg('loginOtpOneTime')} 3"/>
        <input data-otp-box inputmode="numeric" maxlength="1" aria-label="${msg('loginOtpOneTime')} 4"/>
        <input data-otp-box inputmode="numeric" maxlength="1" aria-label="${msg('loginOtpOneTime')} 5"/>
        <input data-otp-box inputmode="numeric" maxlength="1" aria-label="${msg('loginOtpOneTime')} 6"/>
      </div>
      <input type="hidden" id="otp" name="otp" value=""/>

      <#if messagesPerField.existsError('totp')>
        <span class="vfa-input-error vfa-mb" aria-live="polite">${kcSanitize(messagesPerField.get('totp'))?no_esc}</span>
      </#if>

      <button class="vfa-btn vfa-btn--primary" name="login" id="kc-otp-login-submit" type="submit">${msg("vfaOtpConfirm")}</button>
    </form>

    <div class="vfa-note vfa-note--blue vfa-mt">
      <strong>${msg("vfaSecurityTipTitle")}</strong> ${msg("vfaOtpSecurityTip")}
    </div>

  <#elseif section = "info">
    <div class="vfa-card-foot">
      <a href="${url.loginUrl}" class="vfa-link">${msg("backToLogin")}</a>
    </div>
  </#if>
</@layout.registrationLayout>
