<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEventPermLockTitle")>
  <@layout.p>${msg("vfaEventPermLockBody", event.date)}</@layout.p>
  <@layout.note>${msg("vfaEventNotYou")}</@layout.note>
</@layout.emailLayout>
