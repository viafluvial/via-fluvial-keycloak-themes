<#import "template.ftl" as layout>
<@layout.emailLayout title=msg("vfaEmailVerificationTitle")>
  <@layout.p>${msg("vfaEmailCodeIntro")}</@layout.p>
  <@layout.codeBox label=msg("vfaEmailCodeLabel") code=code />
  <@layout.note>${msg("vfaEmailCodeIgnore")}</@layout.note>
</@layout.emailLayout>
