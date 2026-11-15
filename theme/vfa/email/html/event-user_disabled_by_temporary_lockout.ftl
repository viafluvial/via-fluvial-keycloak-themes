<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventTempLockTitle")>
  <@layout.p>${msg("vfaEventTempLockBody", event.date)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
