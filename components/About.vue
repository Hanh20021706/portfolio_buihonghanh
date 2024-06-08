<template>
  <div class="pt-122">
    <BaseTitleSection
      :title="$t('aboutMe.title')"
      class="mb-[46px]"
    ></BaseTitleSection>

    <div class="">
      <p class="text-white pb-[28px] text-[16px] leading-loose">
        {{ $t("aboutMe.desc") }}
      </p>
      <NuxtLink
        to="/"
        class="text-white border border-white py-[6px] px-[24px]"
      >
        {{ $t("aboutMe.buttonLink") }} ~>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
