<template>
  <div>
    <h2>hello word</h2>
    <SvgoIconLogo class="!w-[36px] !h-[36px]" />
    {{ $t("hello") }}
    <div class="">
      {{ $t("d1") }}
    </div>
    <div class="">
      <Languages></Languages>
    </div>
  </div>
</template>

<script>
import Languages from "./../components/Language.vue";
export default {
  components: {
    Languages,
  },
};
</script>

<style lang="scss" scoped></style>
