<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaConsentTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaConsentSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7z"/></svg>
      </span>
    </div>

    <p class="vfa-text-muted vfa-mb">
      <strong>${client.name!client.clientId}</strong> ${msg("oauthGrantRequest")}
    </p>

    <div class="vfa-note vfa-note--gray vfa-mb">
      <ul>
        <#list oauth.clientScopesRequested as clientScope>
          <li>${advancedMsg(clientScope.consentScreenText)}</li>
        </#list>
      </ul>
    </div>

    <form class="vfa-form" action="${url.oauthAction}" method="POST">
      <input type="hidden" name="code" value="${oauth.code}"/>
      <div class="vfa-space">
        <button class="vfa-btn vfa-btn--primary" name="accept" id="kc-login" type="submit">${msg("doYes")}</button>
        <button class="vfa-btn vfa-btn--outline" name="cancel" id="kc-cancel" type="submit">${msg("doNo")}</button>
      </div>
    </form>
  </#if>
</@layout.registrationLayout>
