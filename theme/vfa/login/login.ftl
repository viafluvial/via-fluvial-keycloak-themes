<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=!messagesPerField.existsError('username','password') displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaLoginTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaLoginSubtitle")}</p>

  <#elseif section = "form">
    <#if realm.password>
      <form id="kc-form-login" class="vfa-form" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">

        <#if !usernameHidden??>
          <div class="vfa-form-group">
            <label for="username" class="vfa-label">
              <#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if>
            </label>
            <input tabindex="1" id="username" class="vfa-input" name="username"
                   value="${(login.username!'')}" type="text" autofocus autocomplete="username"
                   placeholder="${msg('vfaEmailPlaceholder')}"
                   aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>"/>
            <#if messagesPerField.existsError('username','password')>
              <span class="vfa-input-error" aria-live="polite">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
              </span>
            </#if>
          </div>
        </#if>

        <div class="vfa-form-group">
          <label for="password" class="vfa-label">${msg("password")}</label>
          <div class="vfa-password" data-vfa-password>
            <input tabindex="2" id="password" class="vfa-input" name="password" type="password"
                   autocomplete="current-password" placeholder="••••••••"
                   aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>"/>
            <button class="vfa-password-toggle" type="button" aria-label="${msg('showPassword')}" aria-pressed="false" tabindex="-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>

        <div class="vfa-form-aux">
          <#if realm.resetPasswordAllowed>
            <a tabindex="5" class="vfa-link" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
          </#if>
        </div>

        <#if realm.rememberMe && !usernameHidden??>
          <label class="vfa-checkbox vfa-mb">
            <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox" <#if login.rememberMe??>checked</#if>/>
            <span>${msg("rememberMe")}</span>
          </label>
        </#if>

        <input type="hidden" id="id-hidden-input" name="credentialId" <#if auth.selectedCredential?has_content>value="${auth.selectedCredential}"</#if>/>
        <button tabindex="4" class="vfa-btn vfa-btn--primary" name="login" id="kc-login" type="submit">${msg("doLogIn")}</button>
      </form>
    </#if>

    <#-- Login social -->
    <#if realm.password>
      <#assign hasGoogle=false>
      <#assign hasFacebook=false>
      <#assign hasInstagram=false>
      <#assign hasAmazon=false>
      <div class="vfa-divider"><span>${msg("vfaContinueWith")}</span></div>
      <ul class="vfa-social-list">
        <#if social?? && social.providers?has_content>
          <#list social.providers as p>
            <#assign providerAlias=(p.alias!'')?lower_case>
            <#assign vfaSocialHref=p.loginUrl>
            <#if providerAlias?contains("google")>
              <#if !vfaSocialHref?contains("prompt=")>
                <#assign vfaSocialHref=vfaSocialHref + (vfaSocialHref?contains("?")?then("&","?")) + "prompt=select_account">
              </#if>
              <#if !vfaSocialHref?contains("max_age=")>
                <#assign vfaSocialHref=vfaSocialHref + "&max_age=0">
              </#if>
              <#if !vfaSocialHref?contains("kc_idp_hint=")>
                <#assign vfaSocialHref=vfaSocialHref + "&kc_idp_hint=" + (p.alias!'google')>
              </#if>
            </#if>
            <#if providerAlias?contains("google")><#assign hasGoogle=true></#if>
            <#if providerAlias?contains("facebook")><#assign hasFacebook=true></#if>
            <#if providerAlias?contains("instagram")><#assign hasInstagram=true></#if>
            <#if providerAlias?contains("amazon")><#assign hasAmazon=true></#if>
            <li>
                <a id="social-${p.alias}" class="vfa-btn vfa-btn--social" type="button" href="${vfaSocialHref}">
                <#if providerAlias?contains("google") || providerAlias?contains("facebook") || providerAlias?contains("instagram") || providerAlias?contains("amazon")>
                  <@socialIcon alias=p.alias/>
                <#elseif p.iconClasses?has_content>
                  <i class="${p.iconClasses}" aria-hidden="true"></i>
                <#else>
                  <@socialIcon alias=p.alias/>
                </#if>
                <span class="vfa-social-name">${msg("vfaContinueWithProvider", p.displayName!p.alias)}</span>
              </a>
            </li>
          </#list>
        </#if>

        <#-- Mantem o modelo visual com provedores padrao -->
        <#if !hasGoogle>
          <li>
            <a id="social-google-model" class="vfa-btn vfa-btn--social" type="button" href="#" onclick="return false;">
              <@socialIcon alias="google"/>
              <span class="vfa-social-name">${msg("vfaContinueWithProvider", "Google")}</span>
            </a>
          </li>
        </#if>
        <#if !hasFacebook>
          <li>
            <a id="social-facebook-model" class="vfa-btn vfa-btn--social" type="button" href="#" onclick="return false;">
              <@socialIcon alias="facebook"/>
              <span class="vfa-social-name">${msg("vfaContinueWithProvider", "Facebook")}</span>
            </a>
          </li>
        </#if>
        <#if !hasInstagram>
          <li>
            <a id="social-instagram-model" class="vfa-btn vfa-btn--social" type="button" href="#" onclick="return false;">
              <@socialIcon alias="instagram"/>
              <span class="vfa-social-name">${msg("vfaContinueWithProvider", "Instagram")}</span>
            </a>
          </li>
        </#if>
        <#if !hasAmazon>
          <li>
            <a id="social-amazon-model" class="vfa-btn vfa-btn--social" type="button" href="#" onclick="return false;">
              <@socialIcon alias="amazon"/>
              <span class="vfa-social-name">${msg("vfaContinueWithProvider", "Amazon")}</span>
            </a>
          </li>
        </#if>
      </ul>
    </#if>

  <#elseif section = "info">
    <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
      <div class="vfa-card-foot">
        ${msg("noAccount")}
        <a tabindex="6" href="${url.registrationUrl}" class="vfa-link">${msg("doRegister")}</a>
      </div>
    </#if>
  </#if>
</@layout.registrationLayout>

<#-- Icones sociais quando o provedor nao define iconClasses -->
<#macro socialIcon alias>
  <#if alias?lower_case?contains("google")>
    <svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
  <#elseif alias?lower_case?contains("facebook")>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  <#elseif alias?lower_case?contains("instagram")>
    <svg viewBox="0 0 24 24" width="20" height="20"><defs><radialGradient id="ig-${alias}" cx="30%" cy="107%"><stop offset="0%" stop-color="#fdf497"/><stop offset="5%" stop-color="#fdf497"/><stop offset="45%" stop-color="#fd5949"/><stop offset="60%" stop-color="#d6249f"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><path fill="url(#ig-${alias})" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  <#elseif alias?lower_case?contains("amazon")>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M5.2 16.4c2.3 1.5 5.1 2.3 7.8 2.3 2.2 0 4.4-.5 6.4-1.5.3-.2.7 0 .4.3-2.1 1.9-4.9 2.9-7.8 2.9-2.9 0-5.7-1.1-7.9-3.1-.2-.2 0-.6.3-.4z" fill="#FF9900"/>
      <path d="M19.3 16.8c-.3-.4-2-.2-2.7-.1-.2 0-.2-.2-.1-.3.7-.5 2-.4 2.8-.3.8.1 2 .4 2.1.8.1.4-.5 1.9-1.1 2.6-.1.1-.3.1-.2-.1.2-.5.7-1.6.5-2z" fill="#FF9900"/>
      <path d="M8.4 8.3h1.9l2.6 6.4h-1.8l-.5-1.3H8l-.5 1.3H5.8l2.6-6.4zm.2 3.8h1.7l-.8-2.3-.9 2.3zM14 8.3h1.7v5h2.8v1.4H14V8.3z" fill="#111827"/>
    </svg>
  <#else>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v4M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
  </#if>
</#macro>
