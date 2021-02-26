<template>
  <w-grid gapY="16">
    <div class="sub-title-1">Selects :</div>
    <w-grid :gapY="12">
      <w-grid :gapY="3">
        <div class="pb-4">Simple select :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-select label="Fruits" :items="fruits" v-model="selectedFruit" />
          <div class="flex flex-col">
            <label class="text-gray-600 dark:text-gray-400 font-light px-1 pb-2"
              >Output :</label
            >
            <code class="flex items-center p-2 h-10">
              {{ selectedFruit }}
            </code>
          </div>
        </w-grid>
      </w-grid>
      <w-grid :gapY="3">
        <div class="pb-4">Select with object items:</div>
        <w-grid :gap-x="4" :cols="3">
          <w-select
            label="Countries"
            :items="countries"
            item-label="name"
            item-value="name"
            v-model="selectedCountry"
          />
          <div class="flex flex-col">
            <label class="text-gray-600 dark:text-gray-400 font-light px-1 pb-2"
              >Output :</label
            >
            <code class="flex items-center p-3">
              {{ selectedCountry }}
            </code>
          </div>
        </w-grid>
      </w-grid>
      <w-grid :gapY="3">
        <div class="pb-4">Select with object items and custom rendering :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-select
            label="Countries"
            :items="countries"
            item-label="name"
            item-value="name"
            v-model="selectedCountry"
          >
            <template #item="item">
              <div class="flex space-x-3 items-center">
                <img :src="item.flag" class="h-4 w-6 rounded-sm" alt="">
                 <span>
                   {{ item.name }}
                 </span>
                 
                 </div>
            </template>
          </w-select>
        </w-grid>
      </w-grid>
    </w-grid>
  </w-grid>
</template>

<script lang="ts">
import WSelect from "@/components/form/WSelect";
import WGrid from "@/components/layout/Grid";
import Prism from "@/components/util/Prism";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: ["rounded-none", "rounded", "rounded-full"],
      variants: ["danger", "success", "warning"],
      selectedFruit: "",
      fruits: ["🍏 Apple", "🥝 Kiwi", "🍌 Banana", "🍇 Grape", "🍍 Ananas"],
      countries: [
        {
          name: "Afghanistan",
          capital: "Kabul",
          population: 27657145,
          flag: "https://restcountries.eu/data/afg.svg",
        },
        {
          name: "Åland Islands",
          capital: "Mariehamn",
          population: 28875,
          flag: "https://restcountries.eu/data/ala.svg",
        },
        {
          name: "Albania",
          capital: "Tirana",
          population: 2886026,
          flag: "https://restcountries.eu/data/alb.svg",
        },
        {
          name: "Algeria",
          capital: "Algiers",
          population: 40400000,
          flag: "https://restcountries.eu/data/dza.svg",
        },
      ],
      selectedCountry: {},
    };
  },
  watch: {},
  methods: {},
  components: {
    WGrid,
    Prism,

    WSelect,
  },
});
</script>

<style></style>
