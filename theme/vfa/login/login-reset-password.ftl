<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username'); section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaResetTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaResetSubtitle")}</p>

  <#elseif section = "form">
    <p class="vfa-text-muted vfa-mb">${msg("vfaResetInfo")}</p>

    <form id="kc-reset-password-form" class="vfa-form" action="${url.loginAction}" method="post">
      <div class="vfa-form-group">
        <label for="username" class="vfa-label">
          <#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if>
        </label>
        <input type="text" id="username" name="username" class="vfa-input" autofocus
               placeholder="${msg('vfaEmailPlaceholder')}"
               value="${(auth.attemptedUsername!'')}"
               aria-invalid="<#if messagesPerField.existsError('username')>true</#if>"/>
        <#if messagesPerField.existsError('username')>
          <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('username'))?no_esc}</span>
        </#if>
      </div>

      <button class="vfa-btn vfa-btn--primary" type="submit">${msg("vfaResetSubmit")}</button>
    </form>

  <#elseif section = "info">
    <div class="vfa-card-foot">
      <a href="${url.loginUrl}" class="vfa-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        ${msg("backToLogin")}
      </a>
    </div>
  </#if>
</@layout.registrationLayout>
