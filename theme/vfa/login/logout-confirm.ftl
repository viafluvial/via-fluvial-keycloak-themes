<#import "template.ftl" as layout>
<#assign vfaLogoutRedirectUrl="">
<#assign vfaLogoutFallbackUrl="">
<#if pageRedirectUri?has_content>
  <#assign vfaLogoutRedirectUrl=pageRedirectUri>
<#elseif (client.baseUrl)?has_content>
  <#assign vfaLogoutRedirectUrl=client.baseUrl>
</#if>
<#if properties.vfaLogoutRedirectFallback?has_content>
  <#assign vfaLogoutFallbackUrl=properties.vfaLogoutRedirectFallback>
</#if>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaLogoutTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaLogoutSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle vfa-feature-icon__circle--danger">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"/></svg>
      </span>
    </div>

    <p class="vfa-text-center vfa-mb" style="color:#374151;">${msg("vfaLogoutMessage")}</p>

    <form class="vfa-form" action="${url.logoutConfirmAction}" method="POST">
      <input type="hidden" name="session_code" value="${logoutConfirm.code}"/>
      <div class="vfa-space">
        <#if logoutConfirm.skipLink>
          <#if vfaLogoutRedirectUrl?has_content || vfaLogoutFallbackUrl?has_content>
            <p class="vfa-text-center vfa-mb" style="color:#6b7280;">
              ${msg("vfaLogoutRedirectNoticePrefix")}
              <strong class="vfa-redirect-countdown" data-vfa-redirect-countdown>5</strong>
              ${msg("vfaLogoutRedirectNoticeSuffix")}
            </p>
            <p class="vfa-text-center">
              ${msg("vfaLogoutRedirectManualPrefix")}
              <a class="vfa-link vfa-link--accent" href="#" data-vfa-manual-redirect>${msg("vfaLogoutRedirectManualLink")}</a>
              ${msg("vfaLogoutRedirectManualSuffix")}
            </p>
            <div
              data-vfa-auto-redirect
              data-vfa-auto-redirect-url="${vfaLogoutRedirectUrl}"
              data-vfa-auto-redirect-fallback-url="${vfaLogoutFallbackUrl}"
              data-vfa-auto-redirect-use-history="true"
              data-vfa-auto-redirect-delay="5000"
              data-vfa-auto-redirect-scope="logout"
              aria-hidden="true"
            ></div>
          </#if>
        <#else>
          <button class="vfa-btn vfa-btn--primary" name="confirmLogout" id="kc-logout" type="submit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"/></svg>
            ${msg("doLogout")}
          </button>
        </#if>
        <#if client?? && client.baseUrl?has_content>
          <a class="vfa-btn vfa-btn--outline" href="${client.baseUrl}">${msg("vfaDoNotLogout")}</a>
        <#else>
          <button class="vfa-btn vfa-btn--outline" type="button" data-vfa-history-back>${msg("vfaDoNotLogout")}</button>
        </#if>
      </div>
    </form>
  </#if>
</@layout.registrationLayout>
