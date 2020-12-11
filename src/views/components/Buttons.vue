<template>
<div class="space-y-2">
    <h1 class="section__title">Default buttons shape:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" :key="variant" :variant="variant">{{
        variant
      }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Circular buttons shape:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" shape="rounded-full" :key="variant" :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title ">Squared buttons shape:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" shape="rounded-none" :key="variant" :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Smooth buttons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" :key="variant" smooth :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Text buttons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" :key="variant" text :variant="variant">{{
        variant
      }}</w-btn>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Raised buttons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" :key="variant" raised :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Only icons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" circle :key="variant" :variant="variant">
            <component :is="variant"></component>
        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons text+icons:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}
            <template #append>
                <component :is="variant"></component>
            </template>
        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons icons+text:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}
            <template #prepend>
                <component :is="variant"></component>
            </template>
        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons with different sizes:</h1>

    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <w-btn v-for="(size,i) in sizes" :key="size" :size="size">{{ texts[i] }}

        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Block button:</h1>

    <div class="w-full ">
        <w-btn size="md" full>
            block
        </w-btn>
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
            sizes: ["xs", "sm", "md", "lg"],

            texts: ["OK", "next", "Submit", "GET STARTED"]
        };
    },
    components: {
        "w-btn": Button,
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
