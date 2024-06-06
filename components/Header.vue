<template>
  <div class="bg-primaryLight py-[24px]">
    <div class="container">
      <div class="flex justify-between">
        <ul class="flex gap-[24px]">
          <li>
            <NuxtLink to="/" class="text-white">
              {{ $t("header.home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-white">
              {{ $t("header.projects") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-white">
              {{ $t("header.aboutMe") }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center gap-[24px]">
          <Language></Language>
          <SvgoIconLogo class="!w-[26px] !h-[26px] !text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Language from "./Language.vue";
export default {
  name: "Header",
  components: {
    Language,
  },
};
</script>

<style lang="scss" scoped></style>
