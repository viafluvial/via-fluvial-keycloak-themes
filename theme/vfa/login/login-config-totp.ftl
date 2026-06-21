<#import "template.ftl" as layout>
<@layout.registrationLayout displayRequiredFields=false displayMessage=!messagesPerField.existsError('totp','userLabel'); section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("vfaConfigTotpTitle")}</h1>
    <p class="vfa-subtitle">${msg("vfaConfigTotpSubtitle")}</p>

  <#elseif section = "form">
    <ol class="vfa-note vfa-note--gray vfa-mb" style="padding-left:1.4rem;">
      <li>
        ${msg("loginTotpStep1")}
        <ul style="margin-top:.35rem;">
          <#list totp.supportedApplications as app>
            <li>${msg(app)}</li>
          </#list>
        </ul>
      </li>

      <#if mode?? && mode = "manual">
        <li>
          ${msg("loginTotpManualStep2")}
          <p><strong style="word-break:break-all;">${totp.totpSecretEncoded}</strong></p>
          <p><a href="${totp.qrUrl}" class="vfa-link">${msg("loginTotpScanBarcode")}</a></p>
        </li>
        <li>
          ${msg("loginTotpManualStep3")}
          <ul style="margin-top:.35rem;">
            <li>${msg("loginTotpType")}: ${msg("loginTotp." + totp.policy.type)}</li>
            <li>${msg("loginTotpAlgorithm")}: ${totp.policy.getAlgorithmKey()}</li>
            <li>${msg("loginTotpDigits")}: ${totp.policy.digits}</li>
            <#if totp.policy.type = "totp">
              <li>${msg("loginTotpInterval")}: ${totp.policy.period}</li>
            <#else>
              <li>${msg("loginTotpCounter")}: ${totp.policy.initialCounter}</li>
            </#if>
          </ul>
        </li>
      <#else>
        <li>
          ${msg("loginTotpStep2")}
          <div class="vfa-text-center vfa-mb vfa-mt">
            <img src="data:image/png;base64, ${totp.totpSecretQrCode}" alt="${msg('loginTotpQrCode')}" style="border:8px solid #fff; border-radius:12px; box-shadow:var(--vfa-shadow);"/>
          </div>
          <p><a href="${totp.manualUrl}" id="mode-manual" class="vfa-link">${msg("loginTotpUnableToScan")}</a></p>
        </li>
      </#if>

      <li>${msg("loginTotpStep3")}</li>
      <li>${msg("loginTotpStep3DeviceName")}</li>
    </ol>

    <form action="${url.loginAction}" class="vfa-form" id="kc-totp-settings-form" method="post">
      <div class="vfa-form-group">
        <label for="totp" class="vfa-label">${msg("authenticatorCode")} <span class="vfa-required">*</span></label>
        <input type="text" id="totp" name="totp" class="vfa-input" autocomplete="off"
               inputmode="numeric" autofocus placeholder="000000"
               aria-invalid="<#if messagesPerField.existsError('totp')>true</#if>"/>
        <#if messagesPerField.existsError('totp')>
          <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('totp'))?no_esc}</span>
        </#if>
      </div>
      <input type="hidden" id="totpSecret" name="totpSecret" value="${totp.totpSecret}"/>
      <#if mode??><input type="hidden" id="mode" name="mode" value="${mode}"/></#if>

      <div class="vfa-form-group">
        <label for="userLabel" class="vfa-label">${msg("loginTotpDeviceName")} <#if totp.otpCredentials?size gte 1><span class="vfa-required">*</span></#if></label>
        <input type="text" id="userLabel" name="userLabel" class="vfa-input" autocomplete="off"
               placeholder="${msg('vfaTotpDeviceNamePlaceholder')}"
               aria-invalid="<#if messagesPerField.existsError('userLabel')>true</#if>"/>
        <#if messagesPerField.existsError('userLabel')>
          <span class="vfa-input-error" aria-live="polite">${kcSanitize(messagesPerField.get('userLabel'))?no_esc}</span>
        </#if>
      </div>

      <#if isAppInitiatedAction??>
        <div class="vfa-space">
          <button type="submit" class="vfa-btn vfa-btn--primary" id="saveTOTPBtn">${msg("doSubmit")}</button>
          <button type="submit" class="vfa-btn vfa-btn--outline" id="cancelTOTPBtn" name="cancel-aia" value="true">${msg("doCancel")}</button>
        </div>
      <#else>
        <button type="submit" class="vfa-btn vfa-btn--primary" id="saveTOTPBtn">${msg("doSubmit")}</button>
      </#if>
    </form>
  </#if>
</@layout.registrationLayout>
