<#import "template.ftl" as layout>
<#import "register-commons.ftl" as registerCommons>
<#import "user-profile-commons.ftl" as userProfileCommons>
<@layout.registrationLayout displayMessage=messagesPerField.exists('global') displayRequiredFields=true; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaRegisterTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaRegisterSubtitle")}</p>

  <#elseif section = "form">
    <form id="kc-register-form" class="vfa-form" action="${url.registrationAction}" method="post">

      <@userProfileCommons.userProfileFormFields; callback, attribute>
      </@userProfileCommons.userProfileFormFields>

      <@registerCommons.termsAcceptance/>

      <#if recaptchaRequired?? && (recaptchaVisible!false)>
        <div class="vfa-form-group">
          <div class="g-recaptcha" data-size="compact" data-sitekey="${recaptchaSiteKey}" data-action="${recaptchaAction}"></div>
        </div>
      </#if>

      <div class="vfa-form-buttons vfa-mt">
        <#if recaptchaRequired?? && !(recaptchaVisible!false)>
          <button class="vfa-btn vfa-btn--primary g-recaptcha" data-sitekey="${recaptchaSiteKey}" data-callback="onSubmitRecaptcha" data-action="${recaptchaAction}" type="submit">
            ${msg("doRegister")}
          </button>
          <script>function onSubmitRecaptcha(token){document.getElementById("kc-register-form").requestSubmit();}</script>
        <#else>
          <button class="vfa-btn vfa-btn--primary" type="submit">${msg("doRegister")}</button>
        </#if>
      </div>
    </form>

  <#elseif section = "info">
    <div class="vfa-card-foot">
      ${msg("vfaAlreadyAccount")}
      <a href="${url.loginUrl}" class="vfa-link">${msg("doLogIn")}</a>
    </div>
  </#if>
</@layout.registrationLayout>
