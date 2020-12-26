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
    colorable,
    outlineable,
    shaped,
    sizeable,
    smoothable,
    variantable,
} from "@/mixins/index";
export default defineComponent({
    name: "w-btn",
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
    mixins: [shaped, sizeable, variantable, smoothable, outlineable, colorable],
    data() {
        return {};
    },

    computed: {
        buttonClasses(): Array < string > {
            let classes: Array < string > = [];

            classes = [
                "flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300",
                this.shapes[this.shape],
                this.full ? "w-full " : (!this.circle ? "max-w-max" : ''),
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
                    this.borderColorsHover[this.variant],
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
                    "w-12 h-12   rounded-full flex justify-center items-center  ",
                ];
            } else {
                classes = [...classes, this.padding[this.size]];
            }

            //replace the default colors if the colors are provided as props
            this.bgColor && (classes = this.replaceColors(this, 'bgColor', classes, /bg-[a-z]+[-][1-9]{1}[0]{2}/g))
            this.bgColorHover && (classes = this.replaceColors(this, 'bgColorHover', classes, /hover:bg-[a-z]+[-][1-9]{1}[0]{2}/g))
            this.textColor && (classes = this.replaceColors(this, 'textColor', classes, /text-[a-z]+[-][1-9]{1}[0]{2}/g))

            return classes;
        },
    },
});
</script>

<style>
</style>
