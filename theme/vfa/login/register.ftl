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
        <#-- Insere os campos de senha logo apos o campo usado como login -->
        <#if passwordRequired?? && (attribute.name == 'username' || (attribute.name == 'email' && realm.registrationEmailAsUsername))>
          <div class="vfa-form-group">
            <label for="password" class="vfa-label">${msg("password")} <span class="vfa-required">*</span></label>
            <div class="vfa-password" data-vfa-password>
              <input type="password" id="password" class="vfa-input" name="password"
                     autocomplete="new-password" placeholder="••••••••"
                     aria-invalid="<#if messagesPerField.existsError('password','password-confirm')>true</#if>"/>
              <button class="vfa-password-toggle" type="button" aria-label="${msg('showPassword')}" tabindex="-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            <div class="vfa-strength" data-vfa-strength-for="password" data-score="0">
              <div class="vfa-strength__label">${msg("vfaPasswordStrength")}</div>
              <div class="vfa-strength__bars">
                <span class="vfa-strength__bar"></span><span class="vfa-strength__bar"></span>
                <span class="vfa-strength__bar"></span><span class="vfa-strength__bar"></span>
              </div>
            </div>
            <#if messagesPerField.existsError('password')>
              <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('password'))?no_esc}</span>
            </#if>
          </div>

          <div class="vfa-form-group">
            <label for="password-confirm" class="vfa-label">${msg("passwordConfirm")} <span class="vfa-required">*</span></label>
            <div class="vfa-password" data-vfa-password>
              <input type="password" id="password-confirm" class="vfa-input" name="password-confirm"
                     autocomplete="new-password" placeholder="••••••••"
                     aria-invalid="<#if messagesPerField.existsError('password-confirm')>true</#if>"/>
              <button class="vfa-password-toggle" type="button" aria-label="${msg('showPassword')}" tabindex="-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            <#if messagesPerField.existsError('password-confirm')>
              <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('password-confirm'))?no_esc}</span>
            </#if>
          </div>
        </#if>
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
