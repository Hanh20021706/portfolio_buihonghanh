<template>
  <div class="pt-122">
    <BaseTitleSection
      :title="$t('contact.title')"
      class="mb-[46px]"
    ></BaseTitleSection>
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-12 md:col-span-8">
        <p class="text-white leading-loose lg:pr-[120px]">
          {{ $t("contact.desc") }}
        </p>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div
          class="border flex flex-col gap-[12px] border-white py-[18px] px-[24px] text-white"
        >
          <h5 class="text-[16px] font-medium">{{ $t("contact.titleMess") }}</h5>

          <div class="flex items-center gap-[8px]">
            <SvgoIconPhone class="!w-[36px]" />
            0389649244
          </div>
          <div class="flex items-center gap-[8px]">
            <SvgoIconEmail class="!w-[36px]" />
            <p>hanhs8155@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
