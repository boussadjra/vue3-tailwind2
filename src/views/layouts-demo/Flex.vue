<template>
  <flex space-y="8" dir="col">
    <flex space-y="4" dir="col">
      <div class="sub-title-1">Display flex with space x 2 and direction row  :</div>
      <flex space-x="2">
        <div
          v-for="i in 4"
          :key="i"
          class="bg-emerald-500 dark:bg-emerald-800 rounded  p-4 w-32"
        >
          lorem ipsum
        </div>
      </flex>
    </flex>
  </flex>
</template>

<script>
import Flex from "@/components/layout/Flex";
export default {
  components: {
    Flex,
  },
};
</script>

<style></style>
