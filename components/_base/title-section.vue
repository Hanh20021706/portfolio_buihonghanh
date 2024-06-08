<template>
  <div class="flex items-center gap-[20px]">
    <h3 class="text-[24px] md:text-[34px] font-medium text-white">
      {{ title }}
    </h3>
    <div class="w-[200px] h-[1px] bg-white"></div>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
