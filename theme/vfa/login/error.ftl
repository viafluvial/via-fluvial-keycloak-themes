<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaErrorTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaErrorSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle vfa-feature-icon__circle--danger">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </span>
    </div>

    <div class="vfa-alert vfa-alert--error">
      <span class="vfa-alert__icon"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg></span>
      <span class="vfa-alert__text">${kcSanitize(message.summary)?no_esc}</span>
    </div>

    <div class="vfa-note vfa-note--blue vfa-mb">
      <h4 style="color:#1e40af;">${msg("vfaErrorWhatToDo")}</h4>
      <ul>
        <li>${msg("vfaErrorTip1")}</li>
        <li>${msg("vfaErrorTip2")}</li>
        <li>${msg("vfaErrorTip3")}</li>
      </ul>
    </div>

    <#if skipLink??>
    <#else>
      <#if client?? && client.baseUrl?has_content>
        <a href="${client.baseUrl}" class="vfa-btn vfa-btn--primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 16l-4-4m0 0l4-4m-4 4h14"/></svg>
          ${msg("backToApplication")}
        </a>
      </#if>
    </#if>

  <#elseif section = "info">
    <div class="vfa-card-foot">
      <p class="vfa-text-muted vfa-mb">${msg("vfaNeedHelp")}</p>
      <a href="mailto:${msg('vfaSupportEmail')}" class="vfa-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
        ${msg("vfaContactSupport")}
      </a>
    </div>
  </#if>
</@layout.registrationLayout>
