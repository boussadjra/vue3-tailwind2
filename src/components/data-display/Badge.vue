<template>
<div class="badge relative top-0">
    <span v-if="$slots.default" class="mt-2 px-4 py-1" :class="classes">
        <slot></slot>
    </span>

    <div v-else class="absolute border-2 border-white z-10" :class="classes" :style="styles"></div>
    <span v-if="ping" :class="classes" :style="styles" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
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
    name: "badge",
    props: {
        size: {
            type: String as PropType < "xs" | "sm" | "md" | "lg" > ,
            default: "full",
        },
        shape: {
            type: String as PropType < "circle" | "rounded" | "square" > ,
            default: "rounded",
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
                "top-left" | "top-right" | "bottom-right" | "bottom-left" > ,
            default: "bottom-right",
        },
        ping: {
            type: Boolean,
            default: false,
        },
        bgColor: {
            type: String,
            default: "bg-purple-200",
        },
        textColor: {
            type: String,
            default: "text-purple-700",
        },
    },
    data() {
        return {
            sizes: {
                xs: "8px",
                sm: "12px",
                md: "16px",
                lg: "24px",
                auto: "auto",
            },
        };
    },

    computed: {
        classes(): Array < string > {
            let roundedClass = "rounded";
            switch (this.shape) {
                case "rounded":
                    roundedClass = "rounded";
                    break;
                case "circle":
                    roundedClass = "rounded-full";
                    break;
                case "square":
                    roundedClass = "rounded-none";
                    break;
                default:
                    break;
            }
            // let placements=["top-left" , "top-right" , "bottom-right" , "bottom-left"]

            // let positions:keyable={}

            // placements.forEach(pl=>{
            //     positions[pl]=pl.concat('-').replace('-','-1 ').trim()
            // })
            let positionClass = "right-1 bottom-1";
            if (this.avatar.size === "xs") {
                positionClass = "right-0 bottom-0";
            }

            if (["rounded", "square"].includes(this.avatar.shape)) {
                positionClass = "right-0 bottom-0 -mr-1 -mb-1";
            }
            let colors = this.color ?
                `text-${this.color}-200 bg-${this.color}-500` : `${this.bgColor} ${this.textColor}`;
            return [
                `h-${this.sizes[this.size]}`,
                `w-${this.sizes[this.size]}`,
                colors,
                roundedClass,
                positionClass,
            ];
        },

        styles() {
            if (this.position === "top-right") {
                return {
                    top: "-4rem",
                    right: "0",
                };
            }
        },
    },
    mounted() {
        console.log("--------------------");
        console.log(this.textColor, this.bgColor);
        console.log("--------------------");
    },
});
</script>

<style>
</style>
