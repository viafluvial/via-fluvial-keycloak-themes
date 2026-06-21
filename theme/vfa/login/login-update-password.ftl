<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('password','password-confirm'); section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaUpdatePasswordTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaUpdatePasswordSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-alert vfa-alert--info">
      <span class="vfa-alert__icon"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg></span>
      <span class="vfa-alert__text">${msg("vfaPasswordPolicyHint")}</span>
    </div>

    <form id="kc-passwd-update-form" class="vfa-form" action="${url.loginAction}" method="post">
      <input type="text" id="username" name="username" value="${username!''}" autocomplete="username" readonly="readonly" style="display:none;"/>
      <input type="password" id="password" name="password" autocomplete="current-password" style="display:none;"/>

      <div class="vfa-form-group">
        <label for="password-new" class="vfa-label">${msg("passwordNew")}</label>
        <div class="vfa-password" data-vfa-password>
          <input type="password" id="password-new" name="password-new" class="vfa-input" autofocus
                 autocomplete="new-password" placeholder="••••••••"
                 aria-invalid="<#if messagesPerField.existsError('password','password-confirm')>true</#if>"/>
          <button class="vfa-password-toggle" type="button" aria-label="${msg('showPassword')}" tabindex="-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <div class="vfa-strength" data-vfa-strength-for="password-new" data-score="0">
          <div class="vfa-strength__label">${msg("vfaPasswordStrength")}</div>
          <div class="vfa-strength__bars">
            <span class="vfa-strength__bar"></span><span class="vfa-strength__bar"></span>
            <span class="vfa-strength__bar"></span><span class="vfa-strength__bar"></span>
          </div>
        </div>
        <#if messagesPerField.existsError('password')>
          <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('password'))?no_esc}</span>
        </#if>
      </div>

      <div class="vfa-form-group">
        <label for="password-confirm" class="vfa-label">${msg("passwordConfirm")}</label>
        <div class="vfa-password" data-vfa-password>
          <input type="password" id="password-confirm" name="password-confirm" class="vfa-input"
                 autocomplete="new-password" placeholder="••••••••"
                 aria-invalid="<#if messagesPerField.existsError('password-confirm')>true</#if>"/>
          <button class="vfa-password-toggle" type="button" aria-label="${msg('showPassword')}" tabindex="-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <#if messagesPerField.existsError('password-confirm')>
          <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('password-confirm'))?no_esc}</span>
        </#if>
      </div>

      <#if isAppInitiatedAction??>
        <label class="vfa-checkbox vfa-mb">
          <input type="checkbox" id="logout-sessions" name="logout-sessions" value="on" checked/>
          <span>${msg("logoutOtherSessions")}</span>
        </label>
        <div class="vfa-space">
          <button class="vfa-btn vfa-btn--primary" type="submit">${msg("vfaUpdatePasswordSubmit")}</button>
          <button class="vfa-btn vfa-btn--outline" type="submit" name="cancel-aia" value="true">${msg("doCancel")}</button>
        </div>
      <#else>
        <button class="vfa-btn vfa-btn--primary" type="submit">${msg("vfaUpdatePasswordSubmit")}</button>
      </#if>
    </form>

  <#elseif section = "info">
    <div class="vfa-card-foot">
      <a href="${url.loginUrl}" class="vfa-link">${msg("backToLogin")}</a>
    </div>
  </#if>
</@layout.registrationLayout>
