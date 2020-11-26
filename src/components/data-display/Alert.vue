<template>
<transition name="fade">
    <div class="text-gray-100 w-96 h-20 p- pl-6 pr-4 rounded text-sm flex items-center" :class="classes" v-if="modelValue">
        <div class="w-11/12">
            <slot></slot>
        </div>
        <div class="w-1/12 justify-self-end">
            <div>
                <icon-x :height="32" :width="40" class="text-gray-300 cursor-pointer" @click="$emit('update:modelValue', false)" />
            </div>
        </div>
    </div>
</transition>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from "vue";
import IconX from "@/components/icons/IconX.vue";
export default defineComponent({
    name: "alert",
    props: {
        variant: {
            type: String as PropType <
                "default" | "info" | "success" | "danger" | "warning" > ,
            default: "default",
        },
        modelValue: {
            type: Boolean,
            default: true,
        },
    },
    emits: ["update:modelValue"],
    data() {
        return {
            variants: {
                default: "bg-gray-500",
                info: "bg-blue-600",
                success: "bg-green-400",

                danger: "bg-red-400",
                warning: "bg-yellow-500",
            },
        };
    },
    methods: {
        open() {
            this.$emit('update:modelValue', true)
        }
    },
    computed: {
        classes(): Array < string > {
            return [this.variants[this.variant]];
        },
    },
    components: {
        IconX,
    },
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(.2);
}
</style>
