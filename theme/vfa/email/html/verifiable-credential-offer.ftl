<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaCredentialOfferTitle")>
  <@layout.p>${msg("vfaCredentialOfferIntro", realmName, credentialScopeDisplayName)}</@layout.p>
  <@layout.button url=link label=msg("vfaCredentialOfferButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
</@layout.emailLayout>
