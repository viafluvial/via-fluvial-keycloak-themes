<#--
  ============================================================================
  template.ftl - Layout base ViaFluvialAM (Keycloak 26)
  ----------------------------------------------------------------------------
  Reproduz o design das telas de autenticacao do app (React/Tailwind):
    - Fundo amazonico (SVG) + gradiente verde
    - Marca "ViaFluvial" + "AM" (amarelo) com logo ancora/barco
    - Card branco com sombra suave
    - Rodape institucional
  Cada tela usa o padrao de secoes do Keycloak:
      <@layout.registrationLayout; section>
        <#if section = "header"> ... <#elseif section = "form"> ... </#if>
      </@layout.registrationLayout>
  ============================================================================
-->
<#macro registrationLayout displayInfo=false displayMessage=true displayRequiredFields=false bodyClass="">
<!DOCTYPE html>
<html class="${properties.kcHtmlClass!'vfa-html'}"<#if realm.internationalizationEnabled> lang="${locale.currentLanguageTag}" dir="${(locale.rtl?then('rtl','ltr'))!'ltr'}"</#if>>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="robots" content="noindex, nofollow">
  <meta name="theme-color" content="#1A5F3B">
  <title>${msg("loginTitle",(realm.displayName!''))}</title>
  <link rel="icon" type="image/svg+xml" href="${url.resourcesPath}/img/favicon.svg">
  <#if properties.styles?has_content>
    <#list properties.styles?split(' ') as style>
      <link href="${url.resourcesPath}/${style}?v=${properties.vfaAssetVersion!'1'}" rel="stylesheet"/>
    </#list>
  </#if>
  <#if properties.scripts?has_content>
    <#list properties.scripts?split(' ') as script>
      <script src="${url.resourcesPath}/${script}?v=${properties.vfaAssetVersion!'1'}" type="text/javascript" defer></script>
    </#list>
  </#if>
</head>

<body class="${properties.kcBodyClass!'vfa-body'} ${bodyClass}">
  <#-- Fundo decorativo amazonico -->
  <div class="vfa-bg" aria-hidden="true">
    <div class="vfa-bg__sky"></div>
    <img class="vfa-bg__scene" src="${url.resourcesPath}/img/background.svg" alt="" aria-hidden="true"/>
    <div class="vfa-bg__overlay"></div>
  </div>

  <main class="vfa-page" role="main">
    <div class="vfa-container">

      <#-- Marca / Branding -->
      <header class="vfa-brand">
        <a class="vfa-brand__link" href="${properties.kcLogoLink!'#'}">
          <img class="vfa-brand__logo" src="${url.resourcesPath}/img/logo.svg" alt="ViaFluvialAmazônia" width="48" height="48"/>
          <span class="vfa-brand__name">ViaFluvial<span class="vfa-brand__accent">Amazônia</span></span>
        </a>
      </header>

      <#-- Seletor de idioma -->
      <#if realm.internationalizationEnabled && locale.supported?size gt 1>
        <div class="vfa-locale">
          <div class="vfa-locale__current" tabindex="0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
            ${locale.current}
          </div>
          <ul class="vfa-locale__menu" role="menu">
            <#list locale.supported as l>
              <li role="menuitem"><a href="${l.url}">${l.label}</a></li>
            </#list>
          </ul>
        </div>
      </#if>

      <#-- Titulo da tela (secao header) -->
      <div class="vfa-titles">
        <#nested "header">
      </div>

      <#-- Card principal -->
      <section class="${properties.kcFormCardClass!'vfa-card'}">

        <#-- Mensagens globais (erro / sucesso / aviso / info) -->
        <#if displayMessage && message?? && (message.summary?has_content) && (message.type != 'warning' || !isAppInitiatedAction??)>
          <div class="vfa-alert vfa-alert--${message.type}" role="alert">
            <span class="vfa-alert__icon" aria-hidden="true">
              <#if message.type = 'success'><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <#elseif message.type = 'warning'><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <#elseif message.type = 'error'><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
              <#else><svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
              </#if>
            </span>
            <span class="vfa-alert__text">${kcSanitize(message.summary)?no_esc}</span>
          </div>
        </#if>

        <#-- Conteudo principal da tela -->
        <#nested "form">

        <#-- Botao "tente outra forma" (fluxos com multiplos autenticadores) -->
        <#if auth?? && auth.showTryAnotherWayLink?? && auth.showTryAnotherWayLink()>
          <form action="${url.loginAction}" method="post" class="vfa-try-another">
            <input type="hidden" name="tryAnotherWay" value="on"/>
            <button type="submit" class="vfa-link vfa-link--muted">${msg("doTryAnotherWay")}</button>
          </form>
        </#if>

        <#-- Bloco informativo opcional (secao info) -->
        <#if displayInfo>
          <div class="vfa-info">
            <#nested "info">
          </div>
        </#if>
      </section>

      <#-- Rodape -->
      <footer class="vfa-footer">
        <p>© 2026 ViaFluvial<span class="vfa-footer__accent">Amazônia</span> - ${msg("vfaFooterTagline")}</p>
      </footer>

    </div>
  </main>
</body>
</html>
</#macro>
