<template>
  <section class="home bg-navy-blue-50 dark:bg-black-700 h-auto min-h-screen">
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

    <section class="min-h-screen px-4 py-4 text-black-600">
      <flex class="py-16 dark:text-gray-300" justify="center">
        <h4 class="font-bold">Features</h4>
      </flex>

      <flex justify="around" :align="'center'">
        <card class="max-w-sm text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center">
              <div
                class="border-4 border-navy-blue-500 dark:border-navy-blue-400 rounded-md flex items-end justify-end pr-1 h-16 w-16"
              >
                <h6 class="font-bold text-navy-blue-500 dark:text-navy-blue-400">TS</h6>
              </div>
            </flex>
          </template>
          Built using Typescript and TSX
        </card>
        <card class="max-w-sm text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center">
              <icon-model
                height="64"
                width="64"
                class="text-navy-blue-500 dark:text-navy-blue-400"
              />
            </flex>
          </template>
          Include more than 20 components
        </card>
        <card class="max-w-sm text-lg whitespace-nowrap rounded-xl">
          <template #header>
            <flex justify="center">
              <IconContainerSoftware
                height="64"
                width="64"
                class="text-navy-blue-500 dark:text-navy-blue-400"
              />
            </flex>
          </template>
          Customizable components
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

interface keyable {
  [key: string]: any;
}
export default defineComponent({
  name: "Home",
  components: {
    Card,
    "w-btn": Button,
    VueLogo,
    TailwindLogo,
    Flex,
    IconModel,
    IconContainerSoftware,
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
