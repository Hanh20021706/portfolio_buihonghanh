<template>
  <div class="border-t border-white mt-[122px]">
    <div class="container">
      <div
        class="flex flex-col gap-[24px] justify-center py-[24px] items-center"
      >
        <h5 class="text-[16px] text-white font-medium">Media</h5>
        <div class="flex items-center gap-[24px]">
          <NuxtLink>
            <SvgoIconFigma class="!w-[26px] !h-[26px] !text-white" />
          </NuxtLink>
          <NuxtLink>
            <SvgoIconGithub class="!w-[26px] !h-[26px] !text-white" />
          </NuxtLink>
          <NuxtLink>
            <SvgoIconShare class="!w-[26px] !h-[26px] !text-white" />
          </NuxtLink>
        </div>
        <p class="text-white text-[16px]">© Copyright 2023. Made by hanbhs8</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
