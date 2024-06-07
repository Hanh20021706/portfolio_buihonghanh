<template>
  <div class="flex items-center gap-[20px] mb-[46px]">
    <h3 class="headline-2 text-white">{{ title }}</h3>
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
