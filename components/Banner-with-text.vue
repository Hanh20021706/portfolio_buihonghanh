<template>
  <div class="bg-primaryLight pt-[72px] pb-[52px]">
    <div class="container">
      <div class="grid grid-cols-12 gap-[32px] md:items-center lg:px-[122px]">
        <div class="col-span-12 md:col-span-7">
          <h2
            class="text-[34px] uppercase md:text-[48px] md:font-bold text-white md:text-left text-center mb-[18px]"
          >
            {{ $t("banner.name") }}
          </h2>
          <p
            class="text-white md:text-left text-center text-[24px] md:text-[32px]"
          >
            {{ $t("banner.desc") }}
          </p>
        </div>
        <div class="relative col-span-12 md:col-span-5">
          <img
            src="https://i.pinimg.com/564x/4d/70/04/4d7004d87388f505facd580dd16f3915.jpg"
            alt=""
            class="relative z-10"
          />
          <div
            class="absolute border-r border-b bottom-[-14px] top-[-14px] left-[14px] right-[14px] border-white"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped></style>
