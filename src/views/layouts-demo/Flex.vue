<template>
  <flex space-y="12" dir="col" >
   <div class="sub-title-1">Flex wrapper:</div>
    <flex space-y="4" dir="col">
      <div class="sub-title-2">Display flex with space x 2 and direction row :</div>
      <flex space-x="2">
        <div
          v-for="i in 4"
          :key="i"
          class="bg-emerald-300 dark:bg-emerald-900 rounded text-black-600 dark:text-white p-4 w-32"
        >
          lorem ipsum
        </div>
      </flex>
    </flex>
    <flex space-y="4" dir="col">
      <div class="sub-title-2">Display flex with different justified alignments :</div>

      <flex space-y="12" dir="col">
        <card v-for="pos in justifyAlignments" :key="pos" class="w-full" elevation="sm">
          <template #header>
            <badge bgColor="bg-yellow-400" text-color="text-black-400">{{pos}}</badge>
          </template>
          <flex :justify="pos" :spaceX="2">
            <div
              v-for="i in 4"
              :key="i"

              class="bg-emerald-300 dark:bg-emerald-900 rounded text-black-600 dark:text-white p-2 w-32"
            >
              lorem ipsum
            </div>
          </flex>
        </card>
      </flex>
    </flex>
    <flex space-y="4" dir="col">
      <div class="sub-title-2">Display flex with different alignments :</div>

      <flex space-y="12" dir="col">
        <card v-for="pos in alignments" :key="pos" class="w-full h-64" elevation="sm">
          <template #header>
            <badge bgColor="bg-yellow-400" text-color="text-black-400">{{pos}}</badge>
          </template>
          <flex :align="pos" :spaceX="2" class="h-40 bg-navy-blue-100 dark:bg-navy-blue-900 ">
            <div
              v-for="i in 4"
              :key="i"

              class="bg-emerald-300 dark:bg-emerald-900 rounded text-black-600 dark:text-white p-2 w-32"
            >
              lorem ipsum
            </div>
       
          
          </flex>
        </card>
      </flex>
    </flex>
  </flex>
</template>

<script>
import Flex from "@/components/layout/Flex";
import Badge from '@/components/data-display/Badge.vue';
import Card from '@/components/surface/Card';
export default {
  data() {
    return {
      justifyAlignments: ["start", "center", "end", "between", "around", "evenly"],
      alignments: ["start", "center", "end",  "baseline", "stretch"],
    };
  },
  components: {
    Flex,
    Badge,
    Card,
  },
};
</script>

<style></style>
