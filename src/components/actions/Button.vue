<template>
<button :class="buttonClasses" class="flex items-center hover:shadow-lg">
    <span class="mr-2">
        <slot name="prepend"></slot>
    </span>
    <slot></slot>
    <span class="ml-2">
        <slot name="append"></slot>
    </span>
</button>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from "vue";

import {
    outlineable,
    shaped,
    sizeable,
    smoothable,
    variantable,
} from "@/mixins/index";
export default defineComponent({
    name: "vw-btn",
    props: {
        text: {
            type: Boolean,
            default: false,
        },

        raised: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: false,
        },
        full: {
            type: Boolean,
            default: false,
        },
    },
    mixins: [shaped, sizeable, variantable, smoothable, outlineable],
    data() {
        return {};
    },

    computed: {
        buttonClasses(): Array < string > {
            let classes: Array < string > = [];

            classes = [

                this.shapes[this.shape],
                this.full ? "w-full flex justify-center" : "",
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
                    this.colorsHover[this.variant],
                ];
            } else if (this.raised) {
                classes = [
                    ...classes,
                    "shadow-lg hover:shadow-xl border-t border-l border-r border-gray-100 bg-transparent",
                    this.colors[this.variant],
                ];
            } else if (this.text) {
                classes = [
                    ...classes,
                    "text-gray-100 whitespace-nowrap px-2",
                    this.colors[this.variant],
                    this.bgSmoothColorsHover[this.variant],
                ];
            } else {
                classes = [
                    ...classes,
                    "text-gray-100",
                    this.bgColors[this.variant],
                    this.bgColorsHover[this.variant],
                ];
            }

            if (this.circle) {
                classes = [
                    ...classes,
                    "w-12 h-12 p-1 rounded-full flex justify-center items-center",
                ];
            } else {
                classes = [...classes, this.padding[this.size]];
            }

            return classes;
        },
    },
});
</script>

<style>
</style>
