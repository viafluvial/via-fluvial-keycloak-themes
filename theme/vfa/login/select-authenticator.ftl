<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=false displayMessage=false; section>
  <#if section = "header">
    <h1 class="vfa-title">${msg("loginChooseAuthenticator")}</h1>

  <#elseif section = "form">
    <p class="vfa-text-muted vfa-mb">${msg("vfaSelectAuthenticatorHint")}</p>
    <form id="kc-select-credential-form" class="vfa-form" action="${url.loginAction}" method="post">
      <ul class="vfa-auth-list">
        <#list auth.authenticationSelections as authenticationSelection>
          <li>
            <button class="vfa-auth-item" type="submit" name="authenticationExecution" value="${authenticationSelection.authExecId}">
              <span class="vfa-auth-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/></svg>
              </span>
              <span class="vfa-auth-item-body">
                <span class="vfa-auth-item-title">${msg('${authenticationSelection.displayName}')}</span>
                <span class="vfa-auth-item-help">${msg('${authenticationSelection.helpText}')}</span>
              </span>
              <span class="vfa-auth-item-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </span>
            </button>
          </li>
        </#list>
      </ul>
    </form>
  </#if>
</@layout.registrationLayout>
