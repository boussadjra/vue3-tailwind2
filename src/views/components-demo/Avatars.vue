<template>
  <div class="space-y-2 pb-4">
    <h1 class="section__title">WAvatar in profile card :</h1>
    <div class="w-full grid--auto-cols gap-4 lg:gap-x-16">
      <card class="min-w-max">
        <template #media>
          <img src="@/assets/img/walter-verna.jpg" class="h-48 w-96" />
        </template>
        <div class="relative flex flex-col items-center w-full">
          <w-avatar
            :src="githubUser.avatar_url"
            shape="rounded-full"
            size="md"
            class="absolute -top-16 flex bg-navy-blue-200 text-navy-blue-100 row-start-1 row-end-3 text-navy-blue-650 ring-1 ring-white"
          >
          </w-avatar>
          <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
            <span class="text-md whitespace-nowrap text-gray-800 font-semibold">
              {{ githubUser.name }}</span
            >
            <span class="text-md whitespace-nowrap text-gray-600">{{
              githubUser.login
            }}</span>
            <p class="text-sm text-gray-500">{{ githubUser.bio }}</p>
            <div class="py-2 flex space-x-2">
              <w-btn size="sm" outlined>FOLLOW</w-btn>
              <w-btn size="sm" variant="success"
                >SPONSOR
                <template #prepend>
                  <IconFavoriteFilled class="text-red-100" />
                </template>
              </w-btn>
            </div>
            <div
              class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid"
            >
              <span class="text-center px-2"
                ><span class="font-bold text-gray-700">{{ githubUser.followers }}</span
                ><span class="text-gray-600"> followers</span></span
              >

              <span class="text-center px-2"
                ><span class="font-bold text-gray-700">{{ githubUser.following }}</span
                ><span class="text-gray-600"> following</span></span
              >
              <span class="text-center px-2"
                ><span class="font-bold text-gray-700">{{ githubUser.public_repos }}</span
                ><span class="text-gray-600"> repos</span></span
              >
            </div>
          </div>
        </div>
      </card>
      <card class="min-w-max">
        <template #media>
          <img src="@/assets/img/masonry.jpg" class="h-48 w-96" />
        </template>
        <div class="relative flex flex-col items-center w-full">
          <w-avatar
            :src="SOFUser.profile_image"
            shape="rounded-full"
            size="md"
            class="absolute -top-16 flex bg-navy-blue-200 text-navy-blue-100 row-start-1 row-end-3 text-navy-blue-650 ring-1 ring-white"
          >
          </w-avatar>
          <div class="flex flex-col space-y-1 items-center -mt-12 w-full">
            <span class="text-md whitespace-nowrap text-gray-800 font-semibold">
              {{ SOFUser.display_name }}</span
            >
            <span class="flex space-x-2 py-3 items-center">
              <span class="text-4xl text-navy-blue-600 font-bold">{{
                SOFUser.reputation
              }}</span>
              <span>reputation</span>
            </span>
            <div class="flex justify-center space-x-4 py-4">
              <div
                class="flex flex-col items-center"
                v-for="(count, key, i) in SOFUser.badge_counts"
                :key="i"
              >
                <icon-badge
                  height="32"
                  width="32"
                  :class="['text-gray-600 text-5xl', getIconColor(key)]"
                />

                <w-badge
                  shape="rounded"
                  :bgColor="getBadgeColor(key)"
                  :textColor="key === 'silver' ? 'text-gray-600' : 'text-gray-100'"
                >
                  <span class="text-xs"> {{ count }}</span>
                </w-badge>
              </div>
            </div>
            <div
              class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid"
            >
              <span class="text-center px-2"
                ><span class="font-bold text-gray-700">{{ SOFUser.answer_count }}</span
                ><span class="text-gray-600"> answers</span></span
              >
              <span class="text-center px-2"
                ><span class="font-bold text-gray-700">{{ SOFUser.question_count }}</span
                ><span class="text-gray-600"> questions</span></span
              >
            </div>
          </div>
        </div>
      </card>

      <card class="min-w-max w-96 bg-white">
        <div class="flex flex-col items-center w-96">
          <w-avatar
            src="https://i.pravatar.cc/200?img=56"
            size="lg"
            shape="rounded-full"
            class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
          >
          </w-avatar>
          <span class="font-bold text-gray-600 text-xl p-2">John Doe</span>
          <span class="text-sm text-gray-500">Web designer</span>

          <div class="flex space-x-2 items-center py-4">
            <w-btn circle class="bg-gray-500" size="xs">
              <icon-logo-facebook />
            </w-btn>
            <w-btn circle class="bg-gray-500" size="xs">
              <icon-logo-twitter />
            </w-btn>
            <w-btn circle class="bg-gray-500" size="xs">
              <icon-logo-instagram />
            </w-btn>
            <w-btn circle class="bg-gray-500" size="xs">
              <icon-logo-linkedin />
            </w-btn>
          </div>
        </div>
      </card>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Avatars with images and different sizes:</h1>
    <div class="w-full grid grid-cols-4 gap-4 place-items-center">
      <template v-for="(img, i) in images">
        <w-avatar
          :src="'https://i.pravatar.cc/200?img=' + img"
          :size="sizes[i]"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
        </w-avatar>

        <w-badge class="text-lg">{{ sizes[i] }}</w-badge>
      </template>
    </div>
  </div>

  <div class="space-y-2">
    <h1 class="section__title">Avatars with images and different sizes:</h1>
    <div class="w-full grid--auto-cols gap-4">
      <div
        class="flex flex-col justify-center items-center space-y-4"
        v-for="(shape, i) in shapes"
        :key="i"
      >
        <w-avatar
          src="https://i.pravatar.cc/200?img=56"
          :shape="shape"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
        </w-avatar>

        <w-badge class="text-sm">{{ shape }}</w-badge>
      </div>
    </div>
  </div>

  <div class="space-y-2">
    <h1 class="section__title">Avatars with badges:</h1>
    <div class="w-full flex flex-wrap">
      <div class="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=56"
          shape="rounded-full"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
          <template #badge>
            <w-badge shape="rounded-full" size="md"></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=58"
          shape="rounded-full"
          size="xs"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge shape="rounded-full" size="xs" :avatar="avatar"></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=64"
          shape="rounded-full"
          size="sm"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              color="red"
              size="sm"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=65"
          shape="rounded"
          size="sm"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              color="green"
              size="md"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=67"
          size="sm"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-600"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              ping
              position="top-right"
              color="blue"
              size="sm"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="w-6/12 md:w-4/12 lg:w-2/12 flex items-center justify-center p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=42"
          shape="rounded-none"
          size="sm"
          class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              color="green"
              size="md"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Stacked avatars :</h1>
    <div class="w-full flex flex-row items-center justify-center">
      <w-avatar
        v-for="i in 10"
        :key="i"
        :src="'https://i.pravatar.cc/200?img=' + (60 + i)"
        shape="rounded-full"
        size="sm"
        class="flex bg-navy-blue-200 row-start-1 text-navy-blue-650 -ml-4 ring-1 ring-white"
      >
      </w-avatar>
    </div>
    <div class="w-full flex flex-row items-center pt-8 justify-center">
      <w-avatar
        v-for="i in 10"
        :key="i"
        :src="'https://i.pravatar.cc/200?img=' + (20 + i)"
        shape="rounded-full"
        size="xs"
        class="flex bg-navy-blue-200 row-start-1 text-navy-blue-650 -ml-2 ring-1 ring-white"
      >
      </w-avatar>
    </div>
  </div>
  <div class="space-y-2 pb-4">
    <h1 class="section__title">Avatars with letters :</h1>
    <div class="w-full flex flex-row items-center justify-between">
      <w-avatar
        v-for="(i, index) in 'KLPOABCDEF'"
        :key="i"
        shape="rounded-full"
        size="sm"
        class="flex bg-navy-blue-200 row-start-1 text-navy-blue-650 ring-1 ring-white"
      >
        {{ i }}
        <template #badge="{ avatar }">
          <w-badge
            shape="rounded-full"
            :color="index % 2 === 0 ? 'green' : 'red'"
            size="sm"
            :avatar="w - avatar"
          ></w-badge>
        </template>
      </w-avatar>
      <w-avatar
        src="https://i.pravatar.cc/200?img=64"
        shape="rounded-full"
        size="sm"
        class="bg-navy-blue-200 row-start-1 text-navy-blue-650"
      >
        <template #badge="{ avatar }">
          <w-badge
            shape="rounded-full"
            color="red"
            size="sm"
            :avatar="w - avatar"
          ></w-badge>
        </template>
      </w-avatar>
    </div>
    <div class="w-full flex flex-row items-center justify-between pt-8">
      <w-avatar
        v-for="i in 'OLGNBDSZMT'"
        :key="i"
        shape="rounded"
        size="sm"
        class="flex bg-navy-blue-200 row-start-1 text-navy-blue-650 ring-1 ring-white"
      >
        {{ i }}
      </w-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import WButton from "@/components/actions/WButton.vue";
import WAvatar from "@/components/data-display/WAvatar.vue";
import WBadge from "@/components/data-display/WBadge.vue";
import IconBadge from "@/components/icons/IconBadge";
import IconFavoriteFilled from "@/components/icons/IconFavoriteFilled";
import Card from "@/components/surface/Card";
import ComponentReflecter from "@/components/util/ComponentReflecter.vue";
import GitHubService from "@/services/GitHubService";
import StackOverflowService from "@/services/StackOverflowService";
import WIconWithBadge from "@/components/data-display/WIconWithBadge.vue";
import IconLogoFacebook from "@/components/icons/IconLogoFacebook";
import IconLogoTwitter from "@/components/icons/IconLogoTwitter";
import IconLogoInstagram from "@/components/icons/IconLogoInstagram";
import IconLogoLinkedin from "@/components/icons/IconLogoLinkedin";

import { defineComponent } from "vue";
import { keyable } from "@/@types/global";
export default defineComponent({
  name: "avatars",
  data() {
    return {
      images: [54, 55, 56, 57],
      sizes: ["xs", "sm", "md", "lg"],
      shapes: ["rounded-full", "rounded-none", "rounded"],

      githubUser: {},
      SOFUser: {},
      myAvatarUrl:
        "https://avatars2.githubgithubUsercontent.com/u/11801238?s=460&u=07a60f4b248400448eef07da47e3ace15331e06f&v=4",
    };
  },
  components: {
    WAvatar,
    WBadge,
    "w-btn": WButton,
    Card,
    ComponentReflecter,
    IconFavoriteFilled,
    IconBadge,
    WIconWithBadge,
    IconLogoFacebook,
    IconLogoTwitter,
    IconLogoInstagram,
    IconLogoLinkedin,
  },
  methods: {
    getBadgeColor(key: string) {
      let colors: keyable = {
        gold: "bg-yellow-500",
        bronze: "bg-yellow-700",
        silver: "bg-gray-300",
      };

      return colors[key];
    },
    getIconColor(key: string) {
      let colors: keyable = {
        gold: "text-yellow-500",
        bronze: "text-yellow-700",
        silver: "text-gray-300",
      };

      return colors[key];
    },
  },
  mounted() {
    GitHubService.getUser("boussadjra")
      .then((result) => {
        this.githubUser = result.data;
      })
      .catch((err) => {});

    StackOverflowService.getUser(8172857)
      .then((result) => {
        this.SOFUser = result.data.items[0];
      })
      .catch((err) => {});
  },
});
</script>

<style>
a {
  flex-wrap: n;
}
</style>
