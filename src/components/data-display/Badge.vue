<template>
<div class="relative top-0 badge ">
    <span v-if="$slots.default" class="py-1 mt-2" :class="[...classes, ...paddingClasse]">
        <slot></slot>
    </span>

    <div v-else class="relative">
        <div class="z-10 border-2 border-white" :class="[...classes, ...absoluteClass]" :style="styles"></div>
        <span v-if="ping" :class="[...classes]" :style="styles" class="absolute w-4 h-4 rounded-full opacity-75 animate-ping bg-navy-blue-400">
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
                xs: "h-8px w-8px text-xs",
                sm: "h-12px w-12px text-sm",
                md: "h-16px w-16px text-md",
                lg: "h-24px w-24px text-md",
                auto: "auto h-auto w-auto",
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
            let colors = `bg-navy-blue-700 text-white`;
                if(this.bgColor){
                    colors=`${this.bgColor} ${this.textColor}`
                }
            return [
                `${this.sizes[this.size]}`,
             `whitespace-nowrap`,
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
