<template>
  <w-grid gapY="16">
    <div class="sub-title-1">Inputs :</div>
    <w-grid :gapY="10">
      <w-grid :gapY="4">
        <div class="pb-6">Checkboxes with different sizes :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-radio v-for="size in sizes" :key="size" :size="size">
            <template #label>
              <span class="">
                size <span class="font-bold italic">{{ size }}</span>
              </span>
            </template>
          </w-radio>
        </w-grid>
      </w-grid>
      <hr class="dark:border-t dark:border-black-500" />
     
      <w-grid :gapY="4">
        <div class="pb-6">Checkboxes with different variants :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-radio v-for="variant in variants" :key="variant" :variant="variant">
            <template #label>
              <span class="">
                variant <span class="font-bold italic">{{ variant }}</span>
              </span>
            </template>
          </w-radio>
        </w-grid>
      </w-grid>
      <hr class="dark:border-t dark:border-black-500" />
     
    </w-grid>
  </w-grid>
</template>

<script lang="ts">
import WRadio from "@/components/form/WRadio";

import WGrid from "@/components/layout/Grid";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
    
      variants: ["danger", "success", "warning"],
      sizes: ["sm", "md", "lg"],
    };
  },

  components: {
    WGrid,
    WRadio,
  },
});
</script>

<style></style>
