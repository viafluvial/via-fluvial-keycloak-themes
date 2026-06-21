<#import "template.ftl" as layout>
<#import "user-profile-commons.ftl" as userProfileCommons>
<@layout.registrationLayout displayMessage=messagesPerField.exists('global'); section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaUpdateProfileTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaUpdateProfileSubtitle")}</p>

  <#elseif section = "form">
    <form id="kc-update-profile-form" class="vfa-form" action="${url.loginAction}" method="post">
      <@userProfileCommons.userProfileFormFields/>

      <#if isAppInitiatedAction??>
        <div class="vfa-space vfa-mt">
          <button class="vfa-btn vfa-btn--primary" type="submit">${msg("doSubmit")}</button>
          <button class="vfa-btn vfa-btn--outline" type="submit" name="cancel-aia" value="true">${msg("doCancel")}</button>
        </div>
      <#else>
        <button class="vfa-btn vfa-btn--primary vfa-mt" type="submit">${msg("doSubmit")}</button>
      </#if>
    </form>
  </#if>
</@layout.registrationLayout>
