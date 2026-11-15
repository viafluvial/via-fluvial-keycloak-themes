<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaPasswordResetTitle")>
  <@layout.p>${msg("vfaPasswordResetIntro", realmName)}</@layout.p>
  <@layout.button url=link label=msg("vfaPasswordResetButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
  <@layout.note>${msg("vfaPasswordResetIgnore")}</@layout.note>
</@layout.emailLayout>
