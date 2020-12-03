<template>
<div class="space-y-2">
    <h1 class="section__title">Default buttons shape:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" :key="variant" :variant="variant">{{
        variant
      }}</vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Circular buttons shape:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" shape="rounded-full" :key="variant" :variant="variant">{{ variant }}</vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Squared buttons shape:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" shape="rounded-none" :key="variant" :variant="variant">{{ variant }}</vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Smooth buttons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" :key="variant" smooth :variant="variant">{{ variant }}</vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">d buttons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" :key="variant" d :variant="variant">{{
        variant
      }}</vw-btn>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Raised buttons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" :key="variant" raised :variant="variant">{{ variant }}</vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Only icons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" circle :key="variant" :variant="variant">
            <component :is="variant"></component>
        </vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons text+icons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}
            <template #append>
                <component :is="variant"></component>
            </template>
        </vw-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons icons+text:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <vw-btn v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}
            <template #prepend>
                <component :is="variant"></component>
            </template>
        </vw-btn>
    </div>
</div>
</template>

<script lang="ts">
import Button from "@/components/actions/Button.vue";
import IconClose from "@/components/icons/IconClose.vue";

import IconInformation from "@/components/icons/IconInformation.vue";
import IconWarning from "@/components/icons/IconWarning.vue";
import IconCheckmark from "@/components/icons/IconCheckmark.vue";
import {
    defineComponent
} from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconAdd from "@/components/icons/IconAdd.vue";

export default defineComponent({
    data() {
        return {
            variants: ["default", "primary", "danger", "success", "warning"],
        };
    },
    components: {
        "vw-btn": Button,
        default: IconSearch,
        info: IconInformation,
        warning: IconWarning,
        success: IconCheckmark,
        danger: IconClose,
        primary: IconAdd,
    },
});
</script>

<style>
</style>
