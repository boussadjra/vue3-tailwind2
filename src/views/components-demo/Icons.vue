<template>
  <div class="section__title">icons :</div>
  <p class="pl-4">
    Vue components based on
    <a
      class="text-navy-blue-600 dark:text-navy-blue-300"
      href="https://www.npmjs.com/package/@carbon/icons"
      target="_blank"
      rel="noopener noreferrer"
      >@carbon/icons</a
    >
  </p>
  <div class="flex flex-row justify-around py-4">
    <div class="flex flex-wrap p-2 w-full">
      <div
        v-for="icon in currentPageIcons"
        :title="icon"
        class="p-2 m-1 bg-navy-blue-100 dark:bg-black-800 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-gray-600 dark:text-gray-50 hover:text-gray-100 hover:bg-navy-blue-500"
      >
        <component :is="icon"></component>
      </div>
    </div>
  </div>

  <div class="py-4 flex justify-center">
    <div class="flex">
      <span
        role="button"
        @click="page--"
        class="p-4 bg-navy-blue-600 dark:bg-navy-blue-400 text-gray-100 rounded-full m-2 hover:bg-navy-blue-800 cursor-pointer"
      >
        <IconCaretLeft />
      </span>
      <span
        role="button"
        @click="!lastPage ? page++ : {}"
        class="p-4 bg-navy-blue-600 dark:bg-navy-blue-400 text-gray-100 rounded-full m-2 hover:bg-navy-blue-800 cursor-pointer"
        :class="{ 'cursor-not-allowed ': lastPage }"
      >
        <IconCaretRight />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, VNode } from "vue";

interface iconType {
  [key: string]: VNode;
}
const requireContext = require.context("@/components/icons", true, /\.tsx$/i, "sync");
let iconNames: Array<string> = requireContext
  .keys()
  .map((file) => file.replace(/(^.\/)|(\.tsx$)/g, ""));

let components: iconType = {};

iconNames.forEach((icon) => {
  components[icon] = defineAsyncComponent(
    () => import("@/components/icons/" + icon + "")
  );
});

export default defineComponent({
  name: "Icons",
  data() {
    return {
      iconNames,
      pageSize: 200,
      page: 1,
    };
  },
  computed: {
    currentPageIcons(): Array<string> {
      return this.iconNames.slice(
        this.pageSize * (this.page - 1),
        this.pageSize * this.page
      );
    },
    lastPage(): boolean {
      return (this.page + 1) * this.pageSize > this.iconNames.length;
    },
  },
  components,
  created() {},
});
</script>

<style></style>
