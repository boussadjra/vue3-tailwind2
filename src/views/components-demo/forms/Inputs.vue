<template>
  <w-grid gapY="16">
    <div class="sub-title-1">Inputs :</div>
    <w-grid :gapY="4">
      <w-grid :gapY="3">
        <div>Outlined inputs with different shapes :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-input
            label="Some label"
            v-for="shape in shapes"
            :key="shape"
            :shape="shape"
            placeholder="Input your text"
            outlined
          />
        </w-grid>
      </w-grid>
    </w-grid>
    <w-grid :gapY="6">
      <w-grid :gapY="3">
        <div>Smooth inputs with different shapes :</div>
        <w-grid :gap-x="4" :cols="3">
          <w-input
            label="Some label"
            v-for="shape in shapes"
            :key="shape"
            :shape="shape"
            smooth
            placeholder="Input your text"
          />
        </w-grid>
      </w-grid>
    </w-grid>
    <w-grid :gapY="6">
      <w-grid :gapY="3">
        <div>Outlined inputs with different variants :</div>
        <w-grid :gap="4" :cols="3">
          <w-input
            label="Some label"
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            outlined
            placeholder="Input your text"
          />
        </w-grid>
      </w-grid>
    </w-grid>
    <w-grid :gapY="6">
      <w-grid :gapY="3">
        <div>Smooth inputs with different variants :</div>
        <w-grid :gap="4" :cols="3">
          <w-input
            label="Some label"
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            smooth
            placeholder="Input your text"
          />
        </w-grid>
      </w-grid>
    </w-grid>
    <w-grid :gapY="6">
      <w-grid :gapY="3">
        <div>Input with prepended icons:</div>
        <w-grid :gap-x="4" :cols="3">
          <w-input
           
            shape="rounded-full"
            outlined
            placeholder="Search"
          >
            <template #prepend>
              <icon-search />
            </template>
          </w-input>
          <w-input
            label="Your phone number"
     
            outlined
            placeholder="phone number"
          >
            <template #prepend>
              <icon-phone />
            </template>
          </w-input>
          <w-input
            label="Your Address"
     
            outlined
            placeholder="address"
          >
            <template #prepend>
              <icon-location/>
            </template>
          </w-input>
        </w-grid>
      </w-grid>
    </w-grid>
  </w-grid>
</template>

<script lang="ts">
import WInput from "@/components/form/WInput";
import IconLocation from "@/components/icons/IconLocation";
import IconPhone from "@/components/icons/IconPhone";
import IconSearch from "@/components/icons/IconSearch";
import WGrid from "@/components/layout/Grid";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: ["rounded-none", "rounded", "rounded-full"],
      variants: ["danger", "success", "warning"],
    };
  },
  components: {
    WGrid,
    WInput,
    IconSearch,IconPhone,IconLocation
  },
});
</script>

<style></style>
