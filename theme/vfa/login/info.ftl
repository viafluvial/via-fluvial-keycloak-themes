<#import "template.ftl" as layout>
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
    <#else>
      <#if pageRedirectUri?has_content>
        <a href="${pageRedirectUri}" class="vfa-btn vfa-btn--primary">${msg("backToApplication")}</a>
      <#elseif actionUri?has_content>
        <a href="${actionUri}" class="vfa-btn vfa-btn--primary">${msg("proceedWithAction")}</a>
      <#elseif (client.baseUrl)?has_content>
        <a href="${client.baseUrl}" class="vfa-btn vfa-btn--primary">${msg("backToApplication")}</a>
      </#if>
    </#if>
  </#if>
</@layout.registrationLayout>
