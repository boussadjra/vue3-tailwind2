<template>
<div class="space-y-2">
    <h1 class="text-xl ml-2 pt-16 pb-8 text-gray-700 ">Badges with different shapes:</h1>
    <div class="w-full grid grid-cols-4 gap-4 place-items-center">
        <badge v-for="shape in shapes" :key="shape" :shape="shape" color="purple">
            some text
        </badge>
    </div>
</div>
<div class="space-y-2">
    <h1 class="text-xl ml-2 pt-16 pb-8 text-gray-700 ">Small with badges with texts:</h1>
    <div class="w-full grid grid-cols-4 gap-4 place-items-center">
        <badge bgColor="bg-red-200" textColor="text-red-700">
            +9
        </badge>
        <badge bgColor="bg-red-500" textColor="text-red-200">
            +99
        </badge>
        <badge bgColor="bg-green-500" shape="circle" textColor="text-green-100">
            5
        </badge>
        <badge bgColor="bg-blue-500" shape="circle" textColor="text-blue-100">
            +100
        </badge>
    </div>
</div>
<div class="p-8">
    <component-reflecter :component="badge" />
</div>
</template>

<script lang="ts">
import Badge from '@/components/data-display/Badge.vue';
import ComponentReflecter from "@/components/util/ComponentReflecter.vue";

import {
    defineComponent
} from 'vue';

export default defineComponent({
    data() {
        return {
            shapes: ["circle", "rounded", "square"],
            badge: Badge
        }
    },
    components: {
        Badge,
        ComponentReflecter
    }
})
</script>

<style>

</style>
