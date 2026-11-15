<#import "template.ftl" as layout>
<#outputformat "plainText">
<#assign requiredActionsText><#if requiredActions??><#list requiredActions><#items as reqActionItem>${msg("requiredAction.${reqActionItem}")}<#sep>, </#sep></#items></#list></#if></#assign>
</#outputformat>
<@layout.emailLayout title=msg("vfaExecuteActionsTitle")>
  <@layout.p>${msg("vfaExecuteActionsIntro", realmName, requiredActionsText)}</@layout.p>
  <@layout.button url=link label=msg("vfaExecuteActionsButton") />
  <@layout.note>${msg("vfaLinkExpires", linkExpirationFormatter(linkExpiration))}</@layout.note>
  <@layout.note>${msg("vfaExecuteActionsIgnore")}</@layout.note>
</@layout.emailLayout>
