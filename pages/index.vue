<template>
  <div class="container">
    <Banner></Banner>
    <About />
    <Skill />
    <Project></Project>
    <Contact></Contact>
  </div>
</template>

<script>
import Languages from "@components/Language.vue";
import Header from "@components/Header.vue";
export default {
  components: {
    Languages,
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
