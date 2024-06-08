<template>
  <div class="pt-122">
    <BaseTitleSection :title="'Skill'" class="mb-[46px]"></BaseTitleSection>
    <img
      src="~assets/images/image-skill.png"
      alt=""
      class="absolute lg:w-[45%] lg:h-[50%]"
    />

    <div class="grid grid-cols-12 relative z-10">
      <div class="lg:col-span-6"></div>
      <div class="lg:col-span-6 col-span-12">
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="lg:col-span-6 col-span-12">
            <BaseItemSkill
              title="Languages"
              :items="listLanguage"
            ></BaseItemSkill>
          </div>
          <div class="lg:col-span-6 col-span-12">
            <BaseItemSkill title="Tools" :items="listTools"></BaseItemSkill>
          </div>
          <div class="lg:col-span-6 col-span-12">
            <BaseItemSkill
              title="Frameworks/Platfrom"
              :items="listFrameworks"
            ></BaseItemSkill>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLanguage: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "HTML" },
        { id: 3, name: "CSS" },
        { id: 4, name: "TypeScript" },
      ],
      listTools: [
        { id: 1, name: "Figma" },
        { id: 2, name: "Photoshop" },
        { id: 3, name: "VSCode" },
        { id: 4, name: "GitHub" },
      ],
      listFrameworks: [
        { id: 1, name: "React" },
        { id: 2, name: "Nuxt" },
        { id: 3, name: "Vue" },
        { id: 4, name: "Bootstrap" },
        { id: 4, name: "Tailwind" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
