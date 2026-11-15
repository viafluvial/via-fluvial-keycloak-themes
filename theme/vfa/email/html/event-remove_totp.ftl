<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventRemoveTotpTitle")>
  <@layout.p>${msg("vfaEventRemoveTotpBody", event.date, event.ipAddress)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
