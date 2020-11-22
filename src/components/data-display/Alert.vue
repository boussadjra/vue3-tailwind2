<template>
<div class="text-gray-100 w-96  p-4 rounded text-sm" :class="classes">
    <slot></slot>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from "vue";

export default defineComponent({
    name: "alert",
    props: {
        variant: {
            type: String as PropType <
                "default" | "info" | "success" | "danger" | "warning" > ,
            default: "default",
        },
    },
    data() {
        return {
            variants: {
                default: "bg-gray-500",
                info: "bg-blue-600",
                success: "bg-green-400",

                danger: "bg-red-400",
                warning: "bg-yellow-400",
            },
        };
    },
    computed: {
        classes(): Array < string > {
            return [this.variants[this.variant]];
        },
    },
});
</script>

<style>
</style>
