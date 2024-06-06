<template>
  <div class="bg-primaryLight py-[24px] sticky top-0 left-0 right-0">
    <div class="container">
      <!-- header desktop -->
      <div class="md:flex justify-between hidden">
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
      <!-- header mobile -->
      <div class="flex bg-primaryLight md:hidden justify-between">
        <div class="">
          <NuxtLink to="/">
            <SvgoIconLogo class="!w-[26px] !h-[26px] !text-white" />
          </NuxtLink>
        </div>
        <div class="cursor-pointer" @click="isShowBar = !isShowBar">
          <SvgoIconBar
            class="!w-[26px] !h-[26px] !text-white"
            v-if="!isShowBar"
          />
          <SvgoIconClose
            class="!w-[26px] !h-[26px] !text-white"
            v-if="isShowBar"
          />
        </div>
      </div>
      <div v-if="isShowBar" class="bg-primaryLight mt-[36px] h-[100vh]">
        <ul class="flex flex-col gap-[24px]">
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
          <li>
            <Language></Language>
          </li>
        </ul>
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
  data() {
    return {
      isShowBar: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
