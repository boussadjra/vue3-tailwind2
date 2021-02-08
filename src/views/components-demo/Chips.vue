<template>
<div class="space-y-2">
    <h1 class="section__title">Default chips shape:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-chip v-for="variant in variants" :key="variant" :variant="variant">
            {{variant}}
        </w-chip>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">chips outlined:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-chip v-for="variant in variants" :key="variant" outlined :variant="variant">
            {{variant}}
        </w-chip>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">smooth chips:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <w-chip v-for="variant in variants" :key="variant" smooth :variant="variant">
            {{variant}}
        </w-chip>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import WChip from '@/components/data-display/WChip.vue'
export default defineComponent({
    data() {
        return {
            variants: ["default", "primary", "danger", "success", "warning"],
        }
    },
    components: {
        WChip
    }
})
</script>

<style>

</style>
