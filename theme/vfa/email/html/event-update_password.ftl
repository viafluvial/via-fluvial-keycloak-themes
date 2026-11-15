<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventUpdatePasswordTitle")>
  <@layout.p>${msg("vfaEventUpdatePasswordBody", event.date, event.ipAddress)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
