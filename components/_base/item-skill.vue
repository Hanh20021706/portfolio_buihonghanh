<template>
  <div class="border border-white max-w-[338px]">
    <!-- <div class="">
      {{ title }}
    </div>
    <div class="" v-for="value in items">
      <h3>{{ value.name }}</h3>
    </div> -->

    <div class="border-b border-white p-[16px]">
      <h3 class="text-[18px] font-medium text-white">{{ title }}</h3>
    </div>
    <div class="p-[15px] flex gap-[24px] flex-wrap">
      <p
        class="text-[16px] font-normal text-neutralWhiteDark"
        v-for="value in items"
      >
        {{ value.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
