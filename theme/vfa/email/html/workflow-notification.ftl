<#import "template.ftl" as layout>
<@layout.emailLayout title=msg(subjectKey, daysRemaining, reason)>
  <#if messageKey == "customMessage">
    <@layout.p>${customMessage}</@layout.p>
  <#else>
    <@layout.p>${msg("vfaWorkflowHello", user.firstName!user.username)}</@layout.p>
    <@layout.p>${msg(messageKey, daysRemaining, reason)}</@layout.p>
    <#if daysRemaining gt 0>
      <@layout.p><strong>${msg("vfaWorkflowRemaining", daysRemaining)}</strong></@layout.p>
    </#if>
    <@layout.note>${msg("vfaWorkflowContact", realmName)}</@layout.note>
  </#if>
</@layout.emailLayout>
