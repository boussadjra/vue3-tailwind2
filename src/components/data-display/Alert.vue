<template>
<transition name="fade">
    <div class="relative w-auto h-auto max-h-40 p-2 pl-6 pr-4 rounded text-sm flex items-center  " :class="classes" v-if="modelValue">
        <div>

        </div>
        <div class="w-11/12 pt-2">
            <h1 v-if="title" class="text-lg pt-2  flex items-center">
                <component :is="variant" class="mr-2"></component>
                {{title}}
            </h1>
            <div class="pb-4">
                <slot></slot>
            </div>
        </div>
        <div class="w-1/12 justify-self-end">
            <div class="flex justify-end">
                <icon-close class=" cursor-pointer " @click="$emit('update:modelValue', false)" />
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
import IconClose from "@/components/icons/IconClose";
import IconInformation from "@/components/icons/IconInformation";
import IconWarning from '../icons/IconWarning';
import IconCheckmarkOutline from '../icons/IconCheckmarkOutline';
import IconCloseOutline from '../icons/IconCloseOutline';
export default defineComponent({
    name: "alert",
    props: {
        variant: {
            type: String as PropType <
                "default" | "info" | "success" | "danger" | "warning" > ,
            default: "info",
        },
        modelValue: {
            type: Boolean,
            default: true,
        },
        raised: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            default: "",
        },
    },
    emits: ["update:modelValue"],
    data() {
        return {
            variants: {
                default: ["bg-gray-300", "text-gray-800"],
                info: ["bg-blue-300", "text-blue-800"],
                success: ["bg-green-300", "bg-text-800"],

                danger: ["bg-red-300", "text-red-800"],
                warning: ["bg-yellow-300", "text-yellow-800"],
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
            let classShadow: string = this.raised ? 'shadow-md' : ''
            return [...this.variants[this.variant], classShadow];
        },

    },
    components: {
        IconClose,
        "info": IconInformation,
        "warning": IconWarning,
        "success": IconCheckmarkOutline,
        "danger": IconCloseOutline
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
