<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEmailUpdateTitle")>
  <@layout.p>${msg("vfaEmailUpdateIntro", realmName, newEmail)}</@layout.p>
  <@layout.button url=link label=msg("vfaEmailUpdateButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
  <@layout.note>${msg("vfaEmailUpdateIgnore")}</@layout.note>
</@layout.emailLayout>
