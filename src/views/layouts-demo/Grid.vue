<template>
  <grid gapY="12">
    <grid :gapY="4">
      <grid gapY="2">
        <div class="sub-title-1">Grid wrapper:</div>

        <div class="sub-title-2">
          Display grid with gap 4 <code>(1rem)</code> and 4 columns :
        </div>
      </grid>
      <grid cols="4" gap-x="4">
        <div v-for="i in 4" :key="i" class="grid-box">lorem ipsum</div>
      </grid>
    </grid>
    <grid :gapY="4">
      <grid>
        <div class="sub-title-2">Display grid without gaps and 12 columns :</div>
      </grid>
      <grid cols="12">
        <div
          v-for="i in 12"
          :key="i"
          class="grid-box grow rounded-none h-16 border border-white dark:border-navy-blue-900 centered"
        >
          {{ i }}
        </div>
      </grid>
    </grid>
    <grid :gapY="4">
      <grid>
        <div class="sub-title-2">Display grid in two dimension :</div>
      </grid>
      <grid cols="12" :gap="1">
        <div
          v-for="i in 36"
          :key="i"
          class="rounded h-12 text-white dark:border-navy-blue-900 centered"
          :class="bgColors[i % 5]"
        >
          {{ i }}
        </div>
      </grid>
    </grid>
    <!--  -->
    <grid :gapY="4">
      <grid>
        <div class="sub-title-2">Spanning columns :</div>
      </grid>
      <grid cols="4"  :gap="1" >
        <grid-item colSpan="2" > <div class="grid-box--default h-full bg-blue-500">span 2 cols</div> </grid-item>
        <grid-item> <div class="grid-box--default bg-red-500"> span 1 col</div> </grid-item>
        <grid-item> <div class="grid-box--default bg-green-500">span 1 col</div></grid-item>
        <grid-item colSpan="3"> <div class="grid-box--default bg-yellow-600">span 3 cols</div></grid-item>
        <grid-item> <div class="grid-box--default bg-green-600">span 1 col</div></grid-item>
      </grid>
    </grid>
    <!--  -->
    <grid :gapY="4">
      <grid>
        <div class="sub-title-2">Spanning rows :</div>
      </grid>
      <grid cols="4" :rows="4" :gap="1" >
        <grid-item rowSpan="2" > <div class="grid-box--default h-full bg-blue-500">span 2 rows</div> </grid-item>
        <grid-item> <div class="grid-box--default bg-red-500"> span 1 row</div> </grid-item>
        <grid-item> <div class="grid-box--default bg-green-500">span 1 row</div></grid-item>
        <grid-item rowSpan="3"> <div class="grid-box--default bg-yellow-600 h-full">span 3 rows</div></grid-item>
        <grid-item :colSpan="2"> <div class="grid-box--default bg-green-600">span 1 row and 2 cols</div></grid-item>
        <grid-item :colSpan="2"> <div class="grid-box--default bg-green-700">span 1 row and 2 cols</div></grid-item>
        <grid-item :colSpan="1"> <div class="grid-box--default bg-green-700">span 1 row</div></grid-item>
      </grid>
    </grid>
  </grid>
</template>

<script lang="ts">
import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/Grid/GridItem";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      bgColors: [
        "bg-blue-500",
        "bg-emerald-700",
        "bg-yellow-600",
        "bg-green-500",
        "bg-red-700",
        "bg-navy-blue-400",
        "bg-purple-600",
      ],
    };
  },
  components: {
    Grid,GridItem
  },
});
</script>

<style>

</style>
