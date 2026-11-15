<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaOrgInviteTitle")>
  <#if firstName?? && lastName??>
    <@layout.p>${msg("vfaOrgInviteIntroPersonalized", firstName, lastName, organization.name)}</@layout.p>
  <#else>
    <@layout.p>${msg("vfaOrgInviteIntro", organization.name)}</@layout.p>
  </#if>
  <@layout.button url=link label=msg("vfaOrgInviteButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
  <@layout.note>${msg("vfaOrgInviteIgnore")}</@layout.note>
</@layout.emailLayout>
