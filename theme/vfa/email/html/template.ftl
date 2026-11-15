<#-- Layout dos e-mails da Via Fluvial. Estilos SEMPRE inline (clientes de e-mail removem <style>) e o
     HTML fica aqui, nao nas mensagens: o kcSanitize do Keycloak apaga atributos style das mensagens. -->
<#macro emailLayout title="">
<!DOCTYPE html>
<html lang="${locale.language}" dir="${(ltr)?then('ltr','rtl')}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;">
  <div style="background:#f3f4f6;padding:28px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,0.08)">
      <tr>
        <td style="background:#1A5F3B;padding:20px 24px;color:#ffffff;font-size:20px;font-weight:700;"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="padding:0 12px 0 0;"><img src="https://viafluvial.com.br/images/brand/png/viafluvial-icon-192.png" width="36" height="36" alt="" style="display:block;border:0;outline:none;"></td><td style="color:#ffffff;font-size:20px;font-weight:700;">ViaFluvial<span style="color:#F9C74F;">Amazônia</span></td></tr></table></td>
      </tr>
      <tr>
        <td style="padding:28px 24px;color:#1f2937;">
          <h1 style="margin:0 0 10px 0;font-size:24px;line-height:1.25;color:#1A5F3B;">${title}</h1>
          <#nested>
        </td>
      </tr>
      <tr>
        <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 24px;font-size:12px;color:#6b7280;">${msg("vfaEmailFooter")}</td>
      </tr>
    </table>
  </div>
</body>
</html>
</#macro>

<#-- Paragrafo de texto. -->
<#macro p>
<p style="margin:0 0 18px 0;font-size:15px;line-height:1.6;color:#1f2937;"><#nested></p>
</#macro>

<#-- Observacao em cinza (validade do link, "ignore se nao foi voce"). -->
<#macro note>
<p style="margin:14px 0 0 0;font-size:13px;line-height:1.6;color:#6b7280;"><#nested></p>
</#macro>

<#-- Botao de acao. Nao repete o endereco por extenso: os links do Keycloak tem centenas de caracteres e a
     parte text/plain do e-mail ja traz o link para quem nao renderiza HTML. -->
<#macro button url label>
<p style="margin:0 0 6px 0;"><a href="${url}" style="display:inline-block;background:#F9C74F;color:#1A5F3B;text-decoration:none;font-weight:700;font-size:14px;padding:11px 16px;border-radius:8px;">${label}</a></p>
</#macro>

<#-- Caixa com um codigo (mesmo desenho dos e-mails de verificacao das APIs). -->
<#macro codeBox label code>
<div style="border:1px solid #d1d5db;border-radius:10px;background:#f9fafb;padding:14px 16px;">
  <div style="font-size:12px;text-transform:uppercase;color:#6b7280;letter-spacing:.3px;">${label}</div>
  <div style="margin-top:6px;font-size:28px;font-weight:800;color:#111827;letter-spacing:1px;">${code}</div>
</div>
</#macro>

<#-- Nome legivel do tipo de credencial dos avisos de seguranca (o Keycloak manda o codigo interno). -->
<#function credentialLabel type>
  <#switch type>
    <#case "password"><#return msg("vfaCredentialPassword")>
    <#case "otp"><#return msg("vfaCredentialOtp")>
    <#case "webauthn"><#return msg("vfaCredentialWebauthn")>
    <#case "webauthn-passwordless"><#return msg("vfaCredentialPasskey")>
    <#case "recovery-authn-codes"><#return msg("vfaCredentialRecovery")>
    <#default><#return msg("vfaCredentialUnknown")>
  </#switch>
</#function>
