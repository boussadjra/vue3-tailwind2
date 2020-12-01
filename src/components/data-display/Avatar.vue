<template>
<div :class="classes">
    <!-- -->
    <img :class="classes" v-if="!$slots.default" :src="src" alt="" />
    <div v-else-if="$slots.default" class="text-4xl flex justify-center items-center w-full text-purple-600 font-semibold">
        <slot></slot>
    </div>

    <slot name="badge" :avatar="{size,shape}"></slot>

    <div></div>
</div>
</template>

<script lang="ts">
import {
    keyable
} from "@/@types/global";
import {
    defineComponent,
    PropType
} from "vue";

export default defineComponent({
    name: "avatar",

    props: {
        src: {
            type: String,
            default: "",
        },
        size: {
            type: String as PropType < "xs" | "sm" | "md" | "lg" > ,
            default: "md",
        },
        shape: {
            type: String as PropType < "circle" | "rounded" | "square" > ,
            default: "circle",
        },
    },

    data() {
        return {
            sizes: {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
                full: "full",
            },
        };
    },

    computed: {
        classes(): Array < string | keyable > {
            let className = "rounded";
            switch (this.shape) {
                case "rounded":
                    className = "rounded";
                    break;
                case "circle":
                    className = "rounded-full";
                    break;
                case "square":
                    className = "rounded-none";
                    break;
                default:
                    break;
            }

            return [
                `h-${this.sizes[this.size]}`,
                `w-${this.sizes[this.size]}`,
                className,
            ];
        },
    },
});
</script>

<style>
</style>
