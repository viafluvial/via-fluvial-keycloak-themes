<#import "template.ftl" as layout>
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
        <#else>
          <button class="vfa-btn vfa-btn--primary" name="confirmLogout" id="kc-logout" type="submit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"/></svg>
            ${msg("doLogout")}
          </button>
        </#if>
        <#if client?? && client.baseUrl?has_content>
          <a class="vfa-btn vfa-btn--outline" href="${client.baseUrl}">${msg("doCancel")}</a>
        </#if>
      </div>
    </form>
  </#if>
</@layout.registrationLayout>
