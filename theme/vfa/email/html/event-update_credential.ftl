<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventUpdateCredentialTitle")>
  <@layout.p>${msg("vfaEventUpdateCredentialBody", layout.credentialLabel(event.getDetail("credential_type")!""), event.date, event.ipAddress)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
