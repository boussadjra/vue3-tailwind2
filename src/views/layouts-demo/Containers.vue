<template>
  <flex dir="col" :spaceY="4">
  <flex dir="col">
  <div class="sub-title-2 text-navy-blue-700 dark:text-navy-blue-300 pt-4">
      Container usage :
    </div>
    <p class="pb-4 pl-2 pt-2">
    This component allows you to organize the rendering of other components horizontally with max width.
    </p>
  </flex>

    <container
      v-for="size in sizes"
      :key="size"
      :max-width="size"
      class="bg-emerald-200 text-gray-700 min-h-3/4"
    >
      <span class="flex space-x-2">
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tempore esse non
          rerum modi sequi eaque in. Porro natus neque deleniti ipsam sit culpa cupiditate
          omnis enim ex temporibus molestias dolor perspiciatis odio molestiae quasi
          quibusdam dolorum rerum eius, labore odit, asperiores ea eligendi. Molestias quo
          voluptatibus libero asperiores dolorem animi officia in deleniti et dolor,
          doloribus nulla. Unde, architecto asperiores at laboriosam quis fugiat quos, nam
          tenetur facere voluptas ratione qui nostrum consequatur officia.
        </span>
        <badge bgColor="bg-yellow-400" text-color="text-black-400">{{ size }}</badge></span
      >
    </container>
  </flex>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Container from "@/components/layout/Container";
import Flex from "@/components/layout/Flex";
import Badge from "@/components/data-display/Badge.vue";

export default defineComponent({
  data() {
    return {
      sizes: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
    };
  },
  components: {
    Container,
    Badge,
    Flex,
  },
});
</script>

<style></style>
