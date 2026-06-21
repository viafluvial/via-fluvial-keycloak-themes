<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("pageExpiredTitle")}</h1>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      </span>
    </div>

    <p class="vfa-text-center vfa-mb" style="color:#374151;">${msg("vfaPageExpiredMessage")}</p>

    <div class="vfa-space">
      <a id="loginRestartLink" href="${url.loginRestartFlowUrl}" class="vfa-btn vfa-btn--primary">${msg("doClickHere")} — ${msg("pageExpiredMsg1")}</a>
      <a id="loginContinueLink" href="${url.loginAction}" class="vfa-btn vfa-btn--outline">${msg("doClickHere")} — ${msg("pageExpiredMsg2")}</a>
    </div>
  </#if>
</@layout.registrationLayout>
