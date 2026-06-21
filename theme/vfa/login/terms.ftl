<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaTermsTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaTermsSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-alert vfa-alert--info">
      <span class="vfa-alert__icon"><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg></span>
      <span class="vfa-alert__text">${msg("vfaTermsIntro")}</span>
    </div>

    <div class="vfa-terms-box">
      ${kcSanitize(msg("termsText"))?no_esc}
    </div>

    <form class="vfa-form" action="${url.loginAction}" method="POST">
      <div class="vfa-space">
        <button class="vfa-btn vfa-btn--primary" name="accept" id="kc-accept" type="submit">${msg("doAccept")}</button>
        <button class="vfa-btn vfa-btn--outline" name="cancel" id="kc-decline" type="submit">${msg("doDecline")}</button>
      </div>
    </form>
  </#if>
</@layout.registrationLayout>
