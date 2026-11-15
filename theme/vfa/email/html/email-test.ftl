<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEmailTestTitle")>
  <@layout.p>${msg("vfaEmailTestBody", realmName)}</@layout.p>
</@layout.emailLayout>
