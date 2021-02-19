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
          <w-input shape="rounded-full" outlined placeholder="Search">
            <template #prepend>
              <icon-search />
            </template>
          </w-input>
          <w-input label="Your phone number" outlined placeholder="phone number">
            <template #prepend>
              <icon-phone />
            </template>
          </w-input>
          <w-input label="Your Address" outlined placeholder="address">
            <template #prepend>
              <icon-location />
            </template>
          </w-input>
        </w-grid>
      </w-grid>
    </w-grid>
    <w-grid :gapY="6">
      <w-grid :gapY="3">
        <div>Input with appended icons:</div>
        <w-grid :gap-x="4" :cols="3">
          <w-input shape="rounded-full" outlined placeholder="dropdown">
            <template #append>
              <IconChevronDown />
            </template>
          </w-input>
          <w-input label="Your phone number" outlined placeholder="phone number">
            <template #append>
              <icon-close />
            </template>
          </w-input>
          <w-input label="Your Birthdate" outlined placeholder="Birthdate">
            <template #append>
              <icon-calendar />
            </template>
          </w-input>
        </w-grid>
      </w-grid>
    </w-grid>
    <w-grid :gapY="6">
      <w-grid :gapY="3">
        <div>Input with helper text:</div>
        <w-grid :gap-x="4" :cols="3">
          <w-input label="Your email" variant="danger" outlined placeholder="Email">
            <template #append>
              <icon-email />
            </template>
            <template #helper>
              <span class="text-red-500">The email address is invalid </span>
            </template>
          </w-input>
          <w-input label="Your password" type="password" variant="warning" outlined placeholder="Password">
            <template #prepend>
              <icon-locked />
            </template>
            <template #helper>
              <span class="text-yellow-500">The password is too weak </span>
            </template>
          </w-input>
          <w-input v-model="pwd" label="Your password" variant="success" outlined placeholder="Password">
            <template #prepend>
              <icon-locked />
            </template>
            <template #helper>
              <span class="text-emerald-600">The password is strong </span>
            </template>
          </w-input>
        </w-grid>
      </w-grid>
    </w-grid>
  </w-grid>
</template>

<script lang="ts">
import WInput from "@/components/form/WInput";
import IconCalendar from "@/components/icons/IconCalendar";
import IconChevronDown from "@/components/icons/IconChevronDown";
import IconClose from "@/components/icons/IconClose";
import IconEmail from "@/components/icons/IconEmail";
import IconLocation from "@/components/icons/IconLocation";
import IconLocked from "@/components/icons/IconLocked";
import IconPhone from "@/components/icons/IconPhone";
import IconSearch from "@/components/icons/IconSearch";
import WGrid from "@/components/layout/Grid";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: ["rounded-none", "rounded", "rounded-full"],
      variants: ["danger", "success", "warning"],
      pwd:''
    };
  },
  watch:{
    pwd(v){
      console.log('----------pwd----------')
      console.log(v)
      console.log('--------------------')
    }
  },
  methods: {
 
  },
  components: {
    WGrid,
    WInput,
    IconSearch,
    IconPhone,
    IconLocation,
    IconChevronDown,
    IconClose,
    IconCalendar,
    IconEmail,IconLocked
  },
});
</script>

<style></style>
