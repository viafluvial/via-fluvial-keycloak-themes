<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEmailVerificationTitle")>
  <@layout.p>${msg("vfaEmailVerificationIntro", realmName)}</@layout.p>
  <@layout.button url=link label=msg("vfaEmailVerificationButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
  <@layout.note>${msg("vfaEmailVerificationIgnore")}</@layout.note>
</@layout.emailLayout>
