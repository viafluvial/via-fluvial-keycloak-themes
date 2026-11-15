<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaIdpLinkTitle")>
  <@layout.p>${msg("vfaIdpLinkIntro", realmName, identityProviderDisplayName, identityProviderContext.username)}</@layout.p>
  <@layout.button url=link label=msg("vfaIdpLinkButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
  <@layout.note>${msg("vfaIdpLinkIgnore")}</@layout.note>
</@layout.emailLayout>
