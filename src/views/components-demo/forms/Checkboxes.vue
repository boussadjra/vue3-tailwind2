<template>
  <w-grid gapY="16">
    <div class="sub-title-1">Inputs :</div>
    <w-grid :gapY="10">
      <w-grid :gapY="4">
        <div class="pb-6">Checkboxes with different sizes :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-checkbox v-for="size in sizes" :key="size" :size="size">
            <template #label>
              <span class="">
                size <span class="font-bold italic">{{ size }}</span>
              </span>
            </template>
          </w-checkbox>
        </w-grid>
      </w-grid>
      <hr class="dark:border-t dark:border-black-500" />
      <w-grid :gapY="4">
        <div class="pb-6">Checkboxes with different shapes:</div>
        <w-grid :gap-x="4" :cols="3">
          <w-checkbox
            v-for="shape in shapes"
            :key="shape"
            :shape="shape"
            :label="` ${shape}`"
          />
        </w-grid>
      </w-grid>
      <hr class="dark:border-t dark:border-black-500" />
      <w-grid :gapY="4">
        <div class="pb-6">Outlined checkboxes with different shapes:</div>
        <template v-for="size in sizes">
          <w-grid :gap-x="4" :cols="3">
            <w-checkbox
              v-for="shape in shapes"
              :key="shape"
              :shape="shape"
              :label="` ${shape}`"
              outlined
              :size="size"
            />
          </w-grid>
        </template>
      </w-grid>
      <hr class="dark:border-t dark:border-black-500" />
      <w-grid :gapY="4">
        <div class="pb-6">Checkboxes with different variants :</div>
        <template v-for="shape in shapes">
          <w-grid :gap-x="4" :cols="3">
            <w-checkbox
              checked
              v-for="variant in variants"
              :key="variant"
              :shape="shape"
              :variant="variant"
            >
              <template #label>
                <span class="">
                  variant <span class="font-bold italic">{{ variant }}</span>
                </span>
              </template>
            </w-checkbox>
          </w-grid>
        </template>
        <template v-for="shape in shapes">
          <w-grid :gap-x="4" :cols="3">
            <w-checkbox
              checked
              v-for="variant in variants"
              :key="variant"
              :shape="shape"
              :variant="variant"
              outlined
            >
              <template #label>
                <span class="">
                  variant <span class="font-bold italic">{{ variant }}</span>
                </span>
              </template>
            </w-checkbox>
          </w-grid>
        </template>
      </w-grid>
      <hr class="dark:border-t dark:border-black-500" />
    </w-grid>
  </w-grid>
</template>

<script lang="ts">
import WCheckbox from "@/components/form/WCheckbox";

import WGrid from "@/components/layout/Grid";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: ["rounded-none", "rounded", "rounded-full"],
      variants: ["danger", "success", "warning"],
      sizes: ["sm", "md", "lg"],
    };
  },

  components: {
    WGrid,
    WCheckbox,
  },
});
</script>

<style></style>
