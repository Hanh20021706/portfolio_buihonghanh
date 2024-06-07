<template>
  <div class="">
    <Header></Header>

    <!-- banner -->
    <Banner></Banner>
    <!-- about me -->
    <AboutMe></AboutMe>
  </div>
</template>

<script>
import Languages from "@components/Language.vue";
import Header from "@components/Header.vue";
import Banner from "@components/Banner-with-text.vue";
import AboutMe from "@components/About-me.vue";
export default {
  components: {
    Languages,
    Header,
    Banner,
    AboutMe,
  },
};
</script>

<style lang="scss" scoped></style>
