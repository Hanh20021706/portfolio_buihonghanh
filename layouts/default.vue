<template>
  <div>
    <Header> </Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
