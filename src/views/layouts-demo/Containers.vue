<template>
<section class="flex flex-col space-y-4">

    <container v-for="size in sizes" :key="size" :maxWidth="size" class="bg-green-300 max-h-20 text-gray-900" >
<span class="flex space-x-2"> <span>max width </span> <badge bgColor="bg-blue-900">{{size}}</badge></span>
  </container>
</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Container from "@/components/layout/Container";
import Badge from "@/components/data-display/Badge.vue";

export default defineComponent({
  data() {
    return {
      sizes:['max-w-xs' , 'max-w-sm' , 'max-w-md' , 'max-w-lg' , 'max-w-xl' , 'max-w-2xl'  , 'max-w-3xl' , 'max-w-4xl' , 'max-w-5xl' , 'max-w-6xl' , 'max-w-7xl']
    }
  },
  components: {
    Container,
    Badge,
  },
});
</script>

<style></style>
