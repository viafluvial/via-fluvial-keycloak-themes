<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventUpdateTotpTitle")>
  <@layout.p>${msg("vfaEventUpdateTotpBody", event.date, event.ipAddress)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
