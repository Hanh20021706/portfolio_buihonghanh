<template>
  <div>
    <div
      class="flex items-center gap-2 relative cursor-pointer"
      @click="openLanguage = !openLanguage"
    >
      <div class="flex items-center gap-[12px]">
        <h2 class="text-white">{{ selectedLanguage.name }}</h2>
        <SvgoIconDown class="!text-white" />
      </div>
      <ul
        class="absolute w-[56px] overflow-hidden bg-white top-full right-0 left-0 shadow-md z-[100] border border-white rounded-md"
        v-if="openLanguage"
      >
        <li
          v-for="option in options"
          :key="option.lang"
          @click="changeL(option)"
          class="px-2 py-2 hover:bg-[#d6dee1] transition-colors text-center"
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
      selectedLanguage: {
        lang: "",
        name: "",
      },
      options: [
        {
          lang: "vi",
          name: "VN",
        },
        {
          lang: "en",
          name: "EN",
        },
      ],
    };
  },
  methods: {
    changeL(option) {
      this.$i18n.setLocale(option.lang);
      this.selectedLanguage = option;
      this.openLanguage = !openLanguage;
    },
    getLanguageName(lang) {
      const option = this.options.find((option) => option.lang === lang);
      return option ? option.name : "";
    },
  },
  created() {
    const currentLang = this.$i18n.locale;
    this.selectedLanguage = {
      lang: currentLang,
      name: this.getLanguageName(currentLang),
    };
  },
};
</script>

<style lang="scss" scoped></style>
