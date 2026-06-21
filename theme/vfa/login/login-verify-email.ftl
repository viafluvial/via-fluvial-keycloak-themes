<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaVerifyEmailTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaVerifyEmailSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
      </span>
    </div>

    <div class="vfa-alert vfa-alert--info">
      <span class="vfa-alert__icon"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg></span>
      <span class="vfa-alert__text">${msg("emailVerifyInstruction1",user.email!'')}</span>
    </div>

    <div class="vfa-note vfa-note--gray vfa-mb">
      <h4>${msg("vfaVerifyEmailNotReceived")}</h4>
      <ul>
        <li>${msg("vfaVerifyEmailTip1")}</li>
        <li>${msg("vfaVerifyEmailTip2")}</li>
        <li>${msg("vfaVerifyEmailTip3")}</li>
      </ul>
    </div>

  <#elseif section = "info">
    <p class="vfa-text-center vfa-text-muted">
      ${msg("emailVerifyInstruction2")}
      <br/>
      <a href="${url.loginAction}" class="vfa-link">${msg("doClickHere")}</a> ${msg("emailVerifyInstruction3")}
    </p>
  </#if>
</@layout.registrationLayout>
