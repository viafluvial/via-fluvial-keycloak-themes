<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventRemoveCredentialTitle")>
  <@layout.p>${msg("vfaEventRemoveCredentialBody", layout.credentialLabel(event.getDetail("credential_type")!""), event.date, event.ipAddress)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
