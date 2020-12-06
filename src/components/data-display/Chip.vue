<template>
<div :class="chipClasses" class="flex items-center  rounded space-x-1 px-2  ">
    <span>
        <slot></slot>
    </span>
    <IconCloseOutline class="text-xs cursor-pointer" height="16" width="16" />
</div>
</template>

<script lang="ts">
import variantable from '@/mixins/variantable';
import {
    defineComponent
} from 'vue';
import IconCloseOutline from '../icons/IconCloseOutline.vue';

export default defineComponent({
    mixins: [variantable],

    components: {
        IconCloseOutline
    },
    computed: {

        chipClasses(): Array < string > {
            let classes: Array < string > = [];
            classes = [

                "text-gray-100",
                this.bgColors[this.variant],
                this.bgColorsHover[this.variant],
            ];

            return classes
        }
    }
})
</script>

<style>

</style>
