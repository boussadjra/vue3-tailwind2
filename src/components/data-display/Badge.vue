<template>
<div class="badge relative top-0">
    <span v-if="$slots.default" class="mt-2 py-1" :class="[...classes, ...paddingClasse]">
        <slot></slot>
    </span>

    <div v-else class="relative">
        <div class="border-2 border-white z-10" :class="[...classes, ...absoluteClass]" :style="styles"></div>
        <span v-if="ping" :class="[...classes]" :style="styles" class="absolute  animate-ping  rounded-full w-4 h-4 bg-purple-400 opacity-75">
        </span>
    </div>

</div>
</template>

<script lang="ts">
import {
    keyable
} from "@/@types/global";
import {
    colorable,
    shaped,
    sizeable
} from '@/mixins';

import {
    defineComponent,
    PropType
} from "vue";

export default defineComponent({
    name: "badge",
    props: {
        size: {
            type: String as PropType < "xs" | "sm" | "md" | "lg" > ,
            default: "sm",
        },

        color: {
            type: String,
            default: "",
        },
        avatar: {
            type: Object as PropType < keyable > ,
            default: () => ({
                size: "sm",
                shape: "circle",
            }),
        },
        position: {
            type: String as PropType <
                "top-left" | "top-right" | "bottom-right" | "bottom-left" | "initial" > ,
            default: "bottom-right",
        },
        ping: {
            type: Boolean,
            default: false,
        },

    },
    mixins: [shaped, sizeable, colorable],

    data() {
        return {
            sizes: {
                xs: "8px",
                sm: "12px",
                md: "16px",
                lg: "24px",
                auto: "auto",
            },
            px: {
                xs: 2,
                sm: 4,
                md: 8,
                lg: 16,
            },
        };
    },

    computed: {
        classes(): Array < string > {
            let roundedClass = this.shapes[this.shape];

            let positionClass = "right-1 bottom-1";
            if (this.avatar.size === "xs") {
                positionClass = "right-0 bottom-0";
            }

            if (["rounded", "rounded-none"].includes(this.avatar.shape)) {
                positionClass = "right-0 bottom-0 -mr-1 -mb-1";
            }
            let colors = this.color ?
                `text-${this.color}-200 bg-${this.color}-500` : `${this.bgColor} ${this.textColor}`;
            return [
                `h-${this.sizes[this.size]} text-${this.size}`,
                `w-${this.sizes[this.size]}`,
                colors,
                roundedClass,
                positionClass,
            ];
        },
        absoluteClass(): Array < string > {
            return [this.position === "initial" ? "initial" : "absolute"];
        },
        paddingClasse(): Array < string > {
            return ["px-" + this.px[this.size]];
        },
        styles() {
            if (this.position === "top-right") {
                return {
                    top: "-68px",
                    right: "2px",
                };
            }
        },
    },
    mounted() {},
});
</script>

<style>
</style>
