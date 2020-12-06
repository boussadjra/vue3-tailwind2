<template>
<div class="space-y-2">
    <h1 class="section__title">chips:</h1>
    <div class="w-full grid grid-cols-5 gap-4 place-items-center">
        <chip v-for="variant in variants" :key="variant" :variant="variant">
            {{variant}}
        </chip>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import Chip from '@/components/data-display/Chip.vue'
export default defineComponent({
    data() {
        return {
            variants: ["default", "primary", "danger", "success", "warning"],
        }
    },
    components: {
        Chip
    }
})
</script>

<style>

</style>
