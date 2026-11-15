<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventLoginErrorTitle")>
  <@layout.p>${msg("vfaEventLoginErrorBody", event.date, event.ipAddress)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
