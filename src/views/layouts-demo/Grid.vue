<template>
  <w-grid gapY="12">
    <w-grid :gapY="4">
      <w-grid gapY="2">
        <div class="sub-title-1">Grid wrapper:</div>

        <div class="sub-title-2">
          Display grid with gap 4 <code>(1rem)</code> and 4 columns :
        </div>
      </w-grid>
      <w-grid cols="4" gap-x="4">
        <div v-for="i in 4" :key="i" class="grid-box">lorem ipsum</div>
      </w-grid>
    </w-grid>
    <w-grid :gapY="4">
      <w-grid>
        <div class="sub-title-2">Display grid without gaps and 12 columns :</div>
      </w-grid>
      <w-grid cols="12">
        <div
          v-for="i in 12"
          :key="i"
          class="grid-box grow rounded-none h-16 border border-white dark:border-navy-blue-900 centered"
        >
          {{ i }}
        </div>
      </w-grid>
    </w-grid>
    <w-grid :gapY="4">
      <w-grid>
        <div class="sub-title-2">Display grid in two dimension :</div>
      </w-grid>
      <w-grid cols="12" :gap="1">
        <div
          v-for="i in 36"
          :key="i"
          class="rounded h-12 text-white dark:border-navy-blue-900 centered"
          :class="bgColors[i % 5]"
        >
          {{ i }}
        </div>
      </w-grid>
    </w-grid>
    <!--  -->
    <w-grid :gapY="4">
      <w-grid>
        <div class="sub-title-2">Spanning columns :</div>
      </w-grid>
      <w-grid cols="4" :gap="1">
        <w-grid-item colSpan="2">
          <div class="grid-box--default h-full bg-blue-500">span 2 cols</div>
        </w-grid-item>
        <w-grid-item>
          <div class="grid-box--default bg-red-500">span 1 col</div>
        </w-grid-item>
        <w-grid-item>
          <div class="grid-box--default bg-green-500">span 1 col</div></w-grid-item
        >
        <w-grid-item colSpan="3">
          <div class="grid-box--default bg-yellow-600">span 3 cols</div></w-grid-item
        >
        <w-grid-item>
          <div class="grid-box--default bg-green-600">span 1 col</div></w-grid-item
        >
      </w-grid>
    </w-grid>
    <!--  -->
    <w-grid :gapY="4">
      <w-grid>
        <div class="sub-title-2">Spanning rows :</div>
      </w-grid>
      <w-grid cols="4" :rows="4" :gap="1">
        <w-grid-item rowSpan="2">
          <div class="grid-box--default h-full bg-blue-500">span 2 rows</div>
        </w-grid-item>
        <w-grid-item>
          <div class="grid-box--default bg-red-500">span 1 row</div>
        </w-grid-item>
        <w-grid-item>
          <div class="grid-box--default bg-green-500">span 1 row</div></w-grid-item
        >
        <w-grid-item rowSpan="3">
          <div class="grid-box--default bg-yellow-600 h-full">
            span 3 rows
          </div></w-grid-item
        >
        <w-grid-item :colSpan="2">
          <div class="grid-box--default bg-green-600">
            span 1 row and 2 cols
          </div></w-grid-item
        >
        <w-grid-item :colSpan="2">
          <div class="grid-box--default bg-green-700">
            span 1 row and 2 cols
          </div></w-grid-item
        >
        <w-grid-item :colSpan="1">
          <div class="grid-box--default bg-green-700">span 1 row</div></w-grid-item
        >
      </w-grid>
    </w-grid>
    <w-grid :gapY="4">
      <w-grid>
        <div class="sub-title-2">Starting and ending lines :</div>
      </w-grid>
      <w-grid cols="4" :rows="6" :gap="1" show-lines>
        <w-grid-item>
          <div
            class="grid-box--default h-full border border-blue-500 dark:border-blue-300"
          ></div>
        </w-grid-item>

        <w-grid-item :colStart="2">
          <div class="grid-box--default h-full bg-blue-500">col start 2</div>
        </w-grid-item>
        <w-grid-item :rowStart="2">
          <div class="grid-box--default h-full bg-yellow-500">row start 2</div>
        </w-grid-item>
        <w-grid-item :rowStart="3" :rowEnd="6">
          <div class="grid-box--default h-full bg-green-500">row start 3 end 6</div>
        </w-grid-item>
        <w-grid-item :rowStart="3" :colStart="4">
          <div class="grid-box--default bg-red-500">row start 3 and col 4</div>
        </w-grid-item>
        <w-grid-item :rowStart="3" :rowEnd="7" :colStart="2" :colEnd="4">
          <div class="grid-box--default h-full bg-navy-blue-300">
            row start 3, row end 7, col start 2, col end 4
          </div>
        </w-grid-item>
        <w-grid-item v-for="i in 9">
          <div class="grid-box--default h-full border border-blue-700"></div>
        </w-grid-item>
      </w-grid>
    </w-grid>

    <w-grid :gapY="4">
      <w-grid>
        <div class="sub-title-2">Responsive grid :</div>
      </w-grid>
      <w-grid :cols="12" :rows="6">
        <w-grid-item :colStart="1" :colEndMd="2" :colEnd="13">
          <div class="grid-box--default h-full bg-blue-500">LOGO</div>
        </w-grid-item>

        <w-grid-item
          :colStartMd="2"
          :colEndMd="13"
          :rowStartMd="1"
          :rowStart="2"
          colStart="1"
          :colEnd="13"
        >
          <div class="grid-box--default h-full bg-blue-600">header</div>
        </w-grid-item>
        <w-grid-item
          :rowStartMd="2"
          :rowEndMd="7"
          :colEndMd="2"
          :rowStart="3"
          colStart="1"
          :colEnd="13"
        >
          <div class="grid-box--default h-full bg-yellow-500">sidebar</div>
        </w-grid-item>
        <w-grid-item
          :rowStartMd="2"
          :rowEndMd="6"
          :colStartMd="2"
          :colEndMd="13"
          :rowStart="4"
          colStart="1"
          :colEnd="13"
        >
          <div class="grid-box--default h-full bg-gray-200 text-black-600">
            Main content
          </div>
        </w-grid-item>
        <w-grid-item
          :colStartMd="2"
          :colEndMd="13"
          :rowStartMd="6"
          :rowStart="5"
          colStart="1"
          :colEnd="13"
        >
          <div class="grid-box--default h-full bg-green-200 text-black-600">footer</div>
        </w-grid-item>
      </w-grid>
    </w-grid>
  </w-grid>
</template>

<script lang="ts">
import WGrid from "@/components/layout/Grid";
import WGridItem from "@/components/layout/Grid/WGridItem";
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
    WGrid,
    WGridItem,
  },
});
</script>

<style></style>
