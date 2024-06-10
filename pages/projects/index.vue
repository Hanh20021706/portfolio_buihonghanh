<template>
  <div class="container">
    <h2 class="mt-[46px] text-[24px] md:text-[34px] font-medium text-white">
      {{ $t("projects.title") }}
    </h2>
    <p class="text-[14px] font-light mt-[16px] text-white">
      {{ $t("projects.textAll") }}
    </p>
    <div class="mt-[122px]">
      <BaseTitleSection :title="$t('projects.decent')" />
      <div class="mt-[46px]">
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="col-span-12 md:col-span-6" v-for="item in listProjects">
            <div class="relative">
              <img
                :src="item.image"
                alt=""
                class="w-full relative z-10 rounded-[8px] aspect-[3/2] object-cover"
              />
              <div
                class="absolute bottom-[-14px] top-[-14px] left-[14px] right-[14px] border-r border-b border-white"
              ></div>
            </div>
            <div class="pt-[42px] flex flex-col gap-[16px]">
              <div class="flex items-center gap-[14px]">
                <div
                  class="w-[16px] h-[16px] rounded-full bg-neutralGray"
                ></div>
                <h5 class="text-neutralWhiteDark">{{ item.company }}</h5>
              </div>
              <h2 class="text-[24px] font-semibold text-white md:text-[34px]">
                {{ item.name }}
              </h2>
              <p class="text-[14px] font-medium uppercase text-white">
                {{ item.language }}
              </p>
              <p class="text-[16px] font-normal text-neutralWhiteDark">
                {{ item.desc }}
              </p>
              <div class="flex items-center gap-[24px]">
                <NuxtLink v-if="item.linkFigma" :to="item.linkFigma">
                  <SvgoIconFigma class="!w-[26px] !h-[26px] !text-white" />
                </NuxtLink>
                <NuxtLink v-if="item.linkGit" :to="item.linkGit">
                  <SvgoIconGithub class="!w-[26px] !h-[26px] !text-white" />
                </NuxtLink>
                <NuxtLink v-if="item.linkShare" :to="item.linkShare">
                  <SvgoIconShare class="!w-[26px] !h-[26px] !text-white" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[122px]">
      <BaseTitleSection :title="$t('projects.small')" />
      <div class="">
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="col-span-12 md:col-span-6" v-for="item in listProjects">
            <div class="pt-[42px] flex flex-col gap-[16px]">
              <h2 class="text-[24px] font-semibold text-white md:text-[34px]">
                {{ item.name }}
              </h2>
              <p class="text-[14px] font-medium uppercase text-white">
                {{ item.language }}
              </p>
              <p class="text-[16px] font-normal text-neutralWhiteDark">
                {{ item.desc }}
              </p>
              <div class="flex items-center gap-[24px]">
                <NuxtLink v-if="item.linkFigma" :to="item.linkFigma">
                  <SvgoIconFigma class="!w-[26px] !h-[26px] !text-white" />
                </NuxtLink>
                <NuxtLink v-if="item.linkGit" :to="item.linkGit">
                  <SvgoIconGithub class="!w-[26px] !h-[26px] !text-white" />
                </NuxtLink>
                <NuxtLink v-if="item.linkShare" :to="item.linkShare">
                  <SvgoIconShare class="!w-[26px] !h-[26px] !text-white" />
                </NuxtLink>
              </div>
            </div>
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
      listProjects: [
        {
          id: 1,
          image:
            "https://i.pinimg.com/564x/24/68/f3/2468f310c6d0d684c87dbfaaa07e9f3c.jpg",
          company: "Battech JSC",
          name: "ERP",
          language: "react, python, ",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt molestiae, unde ratione, laboriosam culpa ab rerum neque adipisci aut, amet consequatur dolor nihil quae velit dicta ad ut et.",
          linkGit: "",
          linkFigma: "",
          linkShare: "https://portfolio-buihonghanhs5.vercel.app",
        },
        {
          id: 1,
          image:
            "https://i.pinimg.com/564x/2b/7c/ec/2b7cece846ae62608220f9c68340cfdd.jpg",
          company: "Battech JSC",
          name: "ERP",
          language: "react, python, ",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt molestiae, unde ratione, laboriosam culpa ab rerum neque adipisci aut, amet consequatur dolor nihil quae velit dicta ad ut et.",
          linkGit: "https://portfolio-buihonghanhs5.vercel.app",
          linkFigma: "https://portfolio-buihonghanhs5.vercel.app",
          linkShare: "https://portfolio-buihonghanhs5.vercel.app",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
