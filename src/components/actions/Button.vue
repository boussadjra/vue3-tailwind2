<template>
<button :class="buttonClasses" class="flex items-center ">
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
import shaped from "@/mixins/shaped";
import sizeable from '@/mixins/sizeable';

export default defineComponent({
    name: "vw-btn",
    props: {
        variant: {
            type: String as PropType <
                "default" | "primary" | "danger" | "success" | "warning" > ,
            default: "primary",
        },

        smooth: {
            type: Boolean,
            default: false,
        },
        outlined: {
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
        }

    },
    mixins: [shaped, sizeable],
    data() {
        return {
            bgColors: {
                default: "bg-gray-400",
                primary: "bg-purple-700",
                danger: "bg-red-500",
                success: "bg-green-500",
                warning: "bg-yellow-500",
            },
            bgColorsHover: {
                default: "hover:bg-gray-500",
                primary: "hover:bg-purple-800",
                danger: "hover:bg-red-600",
                success: "hover:bg-green-600",
                warning: "hover:bg-yellow-600",
            },
            bgSmoothColors: {
                default: "bg-gray-200",
                primary: "bg-purple-200",
                danger: "bg-red-200",
                success: "bg-green-200",
                warning: "bg-yellow-200",
            },
            bgSmoothColorsHover: {
                default: "hover:bg-gray-300",
                primary: "hover:bg-purple-300",
                danger: "hover:bg-red-300",
                success: "hover:bg-green-300",
                warning: "hover:bg-yellow-300",
            },
            colors: {
                default: "text-gray-600",
                primary: "text-purple-700",
                danger: "text-red-600",
                success: "text-green-600",
                warning: "text-yellow-600",
            },
            padding: {
                "sm": "px-4 py-1",
                "md": "px-6 py-2",
                "lg": "px-8 py-4",

            }
        };
    },

    computed: {
        buttonClasses(): Array < string > {
            let classes: Array < string > = [];

            classes = [...classes, this.shapes[this.shape], this.full ? 'w-full flex justify-center' : ''];

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
                    this.bgColors[this.variant].replace("bg", "border"),
                    this.colors[this.variant],
                    this.bgColorsHover[this.variant].replace("bg", "border"),
                    this.bgColorsHover[this.variant].replace("bg", "text"),
                ];
            } else if (this.raised) {
                classes = [
                    ...classes,
                    "shadow-lg hover:shadow-xl border-t border-l border-r border-gray-100 bg-transparent",
                    this.colors[this.variant],
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
