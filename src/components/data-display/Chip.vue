<template>
<div :class="chipClasses" class="flex max-w-max items-center rounded space-x-1 px-2">
    <span class="text-sm">
        <slot></slot>
    </span>
    <IconCloseOutline class="text-xs cursor-pointer" height="16" width="16" />
</div>
</template>

<script lang="ts">
import {
    outlineable,
    shaped,
    sizeable,
    smoothable,
    variantable,
} from "@/mixins";
import {
    defineComponent
} from "vue";
import IconCloseOutline from "../icons/IconCloseOutline.vue";

export default defineComponent({
    mixins: [outlineable, shaped, sizeable, smoothable, variantable],

    components: {
        IconCloseOutline,
    },

    computed: {
        chipClasses(): Array < string > {
            let classes: Array < string > = [];

            classes = [
                this.shapes[this.shape],
                this.full ? "w-full flex justify-center" : "",
                // this.padding[this.size],
            ];

            if (this.smooth) {
                classes = [
                    ...classes,
                    this.bgSmoothColors[this.variant],
                    this.colors[this.variant],
                    this.bgSmoothColorsHover[this.variant],
                ];
            } else if (this.outlined) {
                classes = [
                    ...classes,

                    "border bg-transparent",
                    this.borderColors[this.variant],
                    this.colors[this.variant],
                    this.borderColorsHover[this.variant],
                ];
            } else {
                classes = [
                    ...classes,
                    "text-gray-100",
                    this.bgColors[this.variant],
                    this.bgColorsHover[this.variant],
                ];
            }

            return classes;
        },
    },
});
</script>

<style>
</style>
