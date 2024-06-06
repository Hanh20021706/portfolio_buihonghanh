<template>
  <div>
    <div
      class="flex items-center gap-2 relative cursor-pointer"
      @click="openLanguage = !openLanguage"
    >
      <h2>thay đổi ngôn ngữ tại đây</h2>
      <ul
        class="absolute overflow-hidden bg-white mt-2 top-full left-0 right-0 shadow-md z-[100] border border-[#d6dee1] rounded-md"
        v-if="openLanguage"
      >
        <li
          v-for="option in options"
          :key="option.lang"
          @click="changeL(option.lang)"
          class="px-2 py-2 hover:bg-[#d6dee1] transition-colors"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Language",
  data() {
    return {
      openLanguage: false,
      options: [
        {
          lang: "vi",
          name: "tiếng việt",
        },
        {
          lang: "en",
          name: "tiếng anh",
        },
      ],
    };
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeL(lang) {
      this.$i18n.setLocale(lang);
      this.openLanguage = false;
    },
  },
  created() {
    this.$i18n.setLocale(this.lang);
  },
};
</script>

<style lang="scss" scoped></style>
