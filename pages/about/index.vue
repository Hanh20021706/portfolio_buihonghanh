<template>
  <div class="container">
    <BaseTitleSection :title="$t('aboutMe.title')" class="mt-[46px]" />
    <p class="text-white text-[14px] font-light mt-[16px]">
      {{ $t("aboutMe.who") }}
    </p>
    <div class="flex flex-col-reverse md:flex-row gap-[50px] mt-[46px]">
      <div class="md:col-span-8">
        <p class="text-neutralWhiteDark leading-loose text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum
          sint dolores totam omnis ex quam, assumenda ea minus incidunt tempore
          repellat dicta impedit deserunt aperiam numquam cupiditate optio fuga.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum
          sint dolores totam omnis ex quam, assumenda ea minus incidunt tempore
          repellat dicta impedit deserunt aperiam numquam cupiditate optio fuga.
        </p>
      </div>
      <div class="md:col-span-4">
        <div class="relative">
          <img
            src="https://i.pinimg.com/564x/4b/51/1a/4b511a01bdc06638d6f7fb9c1ae54569.jpg"
            alt=""
            class="aspect-square object-cover relative z-10 md:min-w-[360px]"
          />
          <div
            class="absolute bottom-[-14px] top-[-14px] left-[14px] right-[14px] border-r border-b border-white"
          ></div>
        </div>
      </div>
    </div>
    <div class="mt-[122px]">
      <BaseTitleSection :title="'Skill'" class="mb-[46px]"></BaseTitleSection>
      <div
        class="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-0"
      >
        <BaseItemSkill title="Languages" :items="listLanguage" />
        <BaseItemSkill title="Tools" :items="listTools"></BaseItemSkill>
        <BaseItemSkill
          title="Frameworks/Platfrom"
          :items="listFrameworks"
        ></BaseItemSkill>
      </div>
    </div>
    <div class="mt-[122px]">
      <BaseTitleSection
        :title="$t('aboutMe.fun')"
        class="mb-[46px]"
      ></BaseTitleSection>
      <div class="flex gap-[24px] flex-wrap">
        <div
          class="border border-white py-[16px] px-[24px]"
          v-for="item in fun"
        >
          <p class="text-white">{{ $t(item.name) }}</p>
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
      fun: [
        { id: 1, name: "aboutMe.funItem.sport" },
        { id: 2, name: "aboutMe.funItem.food" },
        { id: 3, name: "aboutMe.funItem.goOut" },
        { id: 3, name: "aboutMe.funItem.goOut" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
