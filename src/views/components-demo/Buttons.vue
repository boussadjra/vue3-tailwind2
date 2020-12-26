<template>
<div class="space-y-2">
    <h1 class="section__title">Default buttons shape:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" :variant="variant">{{
        variant
      }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Circular buttons shape:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" shape="rounded-full" :key="variant" :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title ">Squared buttons shape:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" shape="rounded-none" :key="variant" :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Smooth buttons:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" smooth :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Outlined buttons:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" outlined :variant="variant">{{
        variant
      }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Text buttons:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" text :variant="variant">{{
        variant
      }}</w-btn>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Raised buttons:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" raised :variant="variant">{{ variant }}</w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Only icons:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" circle :key="variant" :variant="variant">
            <component :is="variant"></component>
        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons text+icons:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}
            <template #append>
                <component :is="variant"></component>
            </template>
        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons icons+text:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-btn v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}
            <template #prepend>
                <component :is="variant"></component>
            </template>
        </w-btn>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Buttons with different sizes:</h1>

    <div class="w-full grid--auto-cols gap-4">
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

<div class="space-y-2">
    <h1 class="section__title">Button with custom colors:</h1>

    <div class="w-full grid--auto-cols gap-4">
        <w-btn size="md" bgColor="bg-red-600" bgColorHover="hover:bg-red-700" textColor="text-blue-100">
            RED
        </w-btn>
        <w-btn size="md" bgColor="bg-blue-600" bgColorHover="hover:bg-blue-700" textColor="text-blue-100">
            BLUE
        </w-btn>
        <w-btn size="md" bgColor="bg-yellow-400" bgColorHover="hover:bg-yellow-500" textColor="text-gray-700">
            BLUE
        </w-btn>
        <w-btn size="md" bgColor="bg-gray-700" bgColorHover="hover:bg-gray-800" textColor="text-gray-100">
            DARK
        </w-btn>
        <w-btn size="md" bgColor="bg-gray-100" bgColorHover="hover:bg-gray-200" textColor="text-gray-700">
            LIGHT
        </w-btn>

    </div>

</div>
</template>

<script lang="ts">
import Button from "@/components/actions/Button.vue";
import IconClose from "@/components/icons/IconClose";

import IconInformation from "@/components/icons/IconInformation";
import IconWarning from "@/components/icons/IconWarning";
import IconCheckmark from "@/components/icons/IconCheckmark";
import {
    defineComponent
} from "vue";
import IconSearch from "@/components/icons/IconSearch";
import IconAdd from "@/components/icons/IconAdd";

export default defineComponent({
    data() {
        return {
            variants: ["default", "primary", "danger", "success", "warning"],
            sizes: ["xs", "sm", "md", "lg"],

            texts: ["OK", "next", "Submit", "GET STARTED"],
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
