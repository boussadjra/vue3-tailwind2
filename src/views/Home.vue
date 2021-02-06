<template>
  <section class="home bg-navy-blue-50 dark:bg-black-700 h-auto min-h-screen pb-64">
    <!-- :style="'background-image:url('+require('@/assets/img/flowers.png')+')'" -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 160"
      class="fill-current text-navy-blue-800"
    >
      <path
        fill-opacity="1"
        d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,128C672,139,768,117,864,90.7C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <section
      class="flex flex-col-reverse justify-around w-full lg:h-96 lg:flex-row px-8 py-12"
    >
      <div class="lg:w-6/12">
        <div class="flex flex-col h-32 items-center w-full">
          <h1 class="text-7xl font-extrabold text-navy-blue-900 dark:text-emerald-500">
            VUEWIND
          </h1>

          <p
            class="text-md text-gray-600 dark:text-gray-300 py-4 px-1 lg:text-xl font-light"
          >
            Let's see the magic of Vue + Tailwind
          </p>

          <w-btn size="lg" bgColor="bg-navy-blue-500 dark:bg-navy-blue-400">
            <router-link to="/components"> GET STARTED </router-link>
          </w-btn>
        </div>
      </div>
      <div class="flex flex-row justify-center space-x-8 w-full py-8 lg:pr-4 lg:w-6/12">
        <div
          class="rounded-full h-32 w-32 flex justify-center items-center lg:h-64 lg:w-64"
        >
          <tailwind-logo />
        </div>
        <div
          class="rounded-full h-32 w-32 flex justify-center items-center lg:h-64 lg:w-64"
        >
          <vue-logo />
        </div>
      </div>
    </section>

    <section class=" px-4 py-4 text-black-600">
      <flex class="py-16 text-gray-700 dark:text-gray-300" justify="center">
        <h4 class="font-bold">Features</h4>
      </flex>

      <flex justify="around" :spaceX="4" spaceY="4" :align="'center'">
        <card class="w-72 text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center" >
              <div
                class="border-4 border-navy-blue-500 dark:border-navy-blue-400 rounded-md flex items-end justify-end pr-1 h-12 w-12"
              >
                <h6
                  class="font-bold text-base text-navy-blue-500 dark:text-navy-blue-400"
                >
                  TS
                </h6>
              </div>
            </flex>
          </template>
          Built using Typescript and TSX
        </card>
        <card class="w-72 text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center">
              <icon-model
                height="48"
                width="48"
                class="text-navy-blue-500 dark:text-navy-blue-400"
              />
            </flex>
          </template>
          <flex justify="center" :space-x="2">
            <b class="text-gray-700 text-lg font-bold">10+ </b> <span>components</span>
          </flex>
        </card>
        <card class="w-72 text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center">
              <IconMoon
                height="48"
                width="48"
                class="text-navy-blue-500 dark:text-navy-blue-400"
              />
            </flex>
          </template>
          <flex justify="center" :space-x="2"> Dark mode </flex>
        </card>
        <card class="w-72 text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center">
              <IconContainerSoftware
                height="48"
                width="48"
                class="text-navy-blue-500 dark:text-navy-blue-400"
              />
            </flex>
          </template>
          <flex justify="center"> Customizable components </flex>
        </card>
      </flex>
    </section>
    <section class=" px-4 py-4 text-black-600 w-full">
        <flex class="py-16 text-gray-700 dark:text-gray-300" justify="center">
        <h5 class="font-bold">Rich components</h5>
      </flex>
      <flex justify="center" align="center" dir="col"  :spaceY="10" wrap>
        <card
          class="w-1/2 h-64 flex items-center rounded-lg"
          elevation="xl"
          style="transform: perspective(320px) rotate3d(8, -64, -12, -4deg)"
        >
          <grid :gap="2" :colsSm="2" :colsMd="6">
            <w-btn v-for="(variant,i) in variants" :key="variant" :variant="variant">{{
              variant
            }}</w-btn>
          </grid>
        </card>
        <card
          class="w-1/2 h-64 flex items-center justify-center rounded-lg"
          elevation="xl"
          style="transform: perspective(320px) rotate3d(8, 64, -12, -4deg)"
        >
          <flex :spaceX="-2" justify="center" align="center">
            <avatar
              v-for="i in 7"
              :key="i"
              :src="'https://i.pravatar.cc/200?img=' + (60 + i)"
              shape="rounded-full"
              size="sm"
              class="flex bg-navy-blue-200 row-start-1 text-navy-blue-650  ring-4 ring-white dark:ring-black-600"
            >
            </avatar>
          </flex>
        </card>
        <card
          class="w-1/2 h-64 flex items-center justify-center rounded-lg mt-8"
          elevation="xl"
          style="transform: perspective(320px) rotate3d(8, -64, -12, -4deg)"
        >
          <flex :spaceX="12" justify="center" align="center" class="w-full">
     
        <icon-with-badge>
            <template #icon>
                <IconNotification height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge>
                <badge shape="rounded-full" position="initial" bgColor="bg-navy-blue-500 dark:bg-navy-blue-400" size="sm"></badge>
            </template>
        </icon-with-badge>

        <icon-with-badge>
            <template #icon>
                <IconHome height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge>
                <badge shape="rounded-full" position="initial" bgColor="bg-red-500" size="sm"></badge>
            </template>
        </icon-with-badge>
        <icon-with-badge>
            <template #icon>
                <IconFavorite height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge>
                <badge shape="rounded-full" ping position="initial" bgColor="bg-green-500" size="sm"></badge>
            </template>
        </icon-with-badge>

        <icon-with-badge>
            <template #icon>
                <IconChat height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge-text>
                <badge bgColor="bg-red-500" shape="rounded-full" textColor="text-red-100">
                    <span class="text-sm"> +9</span>
                </badge>
            </template>
        </icon-with-badge>
        <icon-with-badge>
            <template #icon>
                <IconShoppingCart height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge-text>
                <badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
                    <span class="text-sm"> 4</span>
                </badge>
            </template>

        </icon-with-badge>
        <icon-with-badge>
            <template #icon>
                <IconModel height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge-text>
                <badge bgColor="bg-emerald-500" shape="rounded-full" size="xs" textColor="text-emerald-100">
                    <span class="text-xs"> New</span>
                </badge>
            </template>

        </icon-with-badge>
 
          </flex>
        </card>
      </flex>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { RouterLink } from "vue-router";
import Button from "@/components/actions/Button.vue";
import Card from "@/components/surface/Card";
import VueLogo from "@/components/util/VueLogo";
import TailwindLogo from "@/components/util/TailwindLogo";
import Flex from "@/components/layout/Flex";
import IconModel from "@/components/icons/IconModel";
import IconContainerSoftware from "@/components/icons/IconContainerSoftware";
import IconMoon from "@/components/icons/IconMoon";
import Avatar from "@/components/data-display/Avatar.vue";
import IconNotification from "@/components/icons/IconNotification";
import IconHome from "@/components/icons/IconHome";
import IconChat from "@/components/icons/IconChat";
import IconWithBadge from "@/components/data-display/IconWithBadge.vue";
import IconShoppingCart from "@/components/icons/IconShoppingCart";
import IconFavorite from "@/components/icons/IconFavorite";
import Badge from "@/components/data-display/Badge.vue";
import Grid from "@/components/layout/Grid";
interface keyable {
  [key: string]: any;
}
export default defineComponent({
  name: "Home",
  data() {
    return {
      variants: ["default", "primary", "danger", "success", "warning"],
    };
  },
  components: {
    Card,
    "w-btn": Button,
    VueLogo,
    TailwindLogo,
    Flex,Grid,
    Avatar,
    IconModel,
    IconContainerSoftware,IconNotification,
    IconMoon,IconHome,IconChat,IconWithBadge,IconFavorite,IconShoppingCart,Badge
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event: Event) {
      console.log("--------------------");
      console.log(event);
      console.log("--------------------");
    },
  },
});
</script>
