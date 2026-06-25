<#import "template.ftl" as layout>
<#assign vfaInfoRedirectUrl="">
<#assign vfaInfoFallbackUrl="">
<#assign vfaInfoManualHref="">
<#if pageRedirectUri?has_content>
  <#assign vfaInfoRedirectUrl=pageRedirectUri>
<#elseif actionUri?has_content>
  <#assign vfaInfoRedirectUrl=actionUri>
</#if>
<#if properties.vfaLogoutRedirectFallback?has_content>
  <#assign vfaInfoFallbackUrl=properties.vfaLogoutRedirectFallback>
</#if>
<#if vfaInfoRedirectUrl?has_content>
  <#assign vfaInfoManualHref=vfaInfoRedirectUrl>
<#elseif vfaInfoFallbackUrl?has_content>
  <#assign vfaInfoManualHref=vfaInfoFallbackUrl>
</#if>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title"><#if messageHeader??>${kcSanitize(msg("${messageHeader}"))?no_esc}<#else>${kcSanitize(message.summary)?no_esc}</#if></h1>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </span>
    </div>

    <p class="vfa-text-center vfa-mb" style="line-height:1.55;">
      ${kcSanitize(message.summary)?no_esc}
      <#if requiredActions??><#list requiredActions>: <b><#items as reqActionItem>${kcSanitize(msg("requiredAction.${reqActionItem}"))?no_esc}<#sep>, </#items></b></#list><#else></#if>
    </p>

    <#if skipLink??>
    <#elseif vfaInfoManualHref?has_content>
      <a href="${vfaInfoManualHref}" class="vfa-btn vfa-btn--primary" data-vfa-manual-redirect>${msg("backToApplication")}</a>
    </#if>

    <#if vfaInfoRedirectUrl?has_content || vfaInfoFallbackUrl?has_content>
      <p class="vfa-text-center vfa-mb" style="color:#6b7280;">
        ${msg("vfaLogoutRedirectNoticePrefix")}
        <strong class="vfa-redirect-countdown" data-vfa-redirect-countdown>5</strong>
        ${msg("vfaLogoutRedirectNoticeSuffix")}
      </p>
      <p class="vfa-text-center">
        ${msg("vfaLogoutRedirectManualPrefix")}
        <a class="vfa-link vfa-link--accent" href="${vfaInfoManualHref}" data-vfa-manual-redirect>${msg("vfaLogoutRedirectManualLink")}</a>
        ${msg("vfaLogoutRedirectManualSuffix")}
      </p>
      <div
        data-vfa-auto-redirect
        data-vfa-auto-redirect-url="${vfaInfoRedirectUrl}"
        data-vfa-auto-redirect-fallback-url="${vfaInfoFallbackUrl}"
        data-vfa-auto-redirect-delay="5000"
        data-vfa-auto-redirect-scope="logout"
        aria-hidden="true"
      ></div>
    </#if>
  </#if>
</@layout.registrationLayout>
