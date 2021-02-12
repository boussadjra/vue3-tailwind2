<template>
  <div class="space-y-2">
    <h1 class="section__title">Simple alerts:</h1>
    <div class="w-full grid--auto-cols gap-4">
      <button
        @click="reset"
        v-if="isReset"
        class="mt-8 px-8 py-2 bg-navy-blue-800 text-navy-blue-100 shadow-md rounded-sm self-end focus:outline-none hover:bg-navy-blue-900 place-self-start"
      >
        RESET
      </button>

      <template v-else>
        <w-alert
          v-for="variant in variants"
          :variant="variant.type"
          v-model="variant.show"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusamus
          porro maxime, veniam pariatur asperiores?
        </w-alert>
      </template>
    </div>

    <h1 class="section__title">WAlert with titles :</h1>
    <div class="w-full grid--auto-cols gap-4">
      <w-alert
        v-for="variant in variants2"
        title="WAlert title"
        :variant="variant.type"
        v-model="variant.show"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusamus porro
        maxime, veniam pariatur asperiores?
      </w-alert>
    </div>
    <h1 class="section__title">Outlined alerts :</h1>
    <div class="w-full grid--auto-cols gap-4">
      <w-alert
        v-for="variant in variants2"
        title="WAlert title"
        outlined
        :variant="variant.type"
        v-model="variant.show"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusamus porro
        maxime, veniam pariatur asperiores?
      </w-alert>
    </div>
  </div>
</template>

<script lang="ts">
import WAlert from "@/components/data-display/WAlert.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "alerts",
  components: {
    WAlert,
  },
  data() {
    return {
      variants: [
        {
          type: "default",
          show: true,
        },
        {
          type: "info",
          show: true,
        },
        {
          type: "success",
          show: true,
        },
        {
          type: "danger",
          show: true,
        },
        {
          type: "warning",
          show: true,
        },
      ],
      variants2: [
        {
          type: "info",
          show: true,
        },
        {
          type: "success",
          show: true,
        },
        {
          type: "danger",
          show: true,
        },
        {
          type: "warning",
          show: true,
        },
      ],
    };
  },
  computed: {
    isReset(): boolean {
      return this.variants.every((variant) => {
        return !variant.show;
      });
    },
  },
  methods: {
    reset() {
      this.variants.forEach((variant, index) => {
        this.variants[index].show = true;
      });
    },
  },
});
</script>

<style></style>
