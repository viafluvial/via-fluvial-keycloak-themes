<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaIdpLinkTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaIdpLinkSubtitle")}</p>

  <#elseif section = "form">
    <div class="vfa-feature-icon">
      <span class="vfa-feature-icon__circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101"/><path d="M10.172 13.828a4 4 0 0 0 5.656 0l4-4a4 4 0 1 0-5.656-5.656l-1.1 1.1"/></svg>
      </span>
    </div>

    <p class="vfa-text-center vfa-mb" style="color:#374151;">
      ${msg("confirmLinkIdpReviewProfile")}
    </p>

    <form id="kc-register-form" class="vfa-form" action="${url.loginAction}" method="post">
      <div class="vfa-space">
        <button type="submit" class="vfa-btn vfa-btn--primary" name="submitAction" id="updateProfile" value="updateProfile">${msg("confirmLinkIdpContinue")}</button>
        <button type="submit" class="vfa-btn vfa-btn--outline" name="submitAction" id="linkAccount" value="linkAccount">${msg("confirmLinkIdpReviewProfile")}</button>
      </div>
    </form>
  </#if>
</@layout.registrationLayout>
