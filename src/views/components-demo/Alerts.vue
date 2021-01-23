<template>
<div class="space-y-2">
    <h1 class="section__title">Simple alerts:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <button @click="reset" v-if="isReset" class="mt-8 px-8 py-2 bg-navy-blue-800 text-navy-blue-100 shadow-md rounded-sm self-end focus:outline-none hover:bg-navy-blue-900 place-self-start ">
            RESET
        </button>

        <template v-else>
            <alert v-for="variant in variants" :variant="variant.type" v-model="variant.show">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
                accusamus porro maxime, veniam pariatur asperiores?
            </alert>
        </template>
    </div>

    <h1 class="section__title">Alert with titles :</h1>
    <div class="w-full grid--auto-cols gap-4">
        <alert v-for="variant in variants2" title="Alert title" :variant="variant.type" v-model="variant.show">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            accusamus porro maxime, veniam pariatur asperiores?
        </alert>
    </div>
    <h1 class="section__title">Outlined alerts :</h1>
    <div class="w-full grid--auto-cols gap-4">
        <alert v-for="variant in variants2" title="Alert title" outlined :variant="variant.type" v-model="variant.show">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            accusamus porro maxime, veniam pariatur asperiores?
        </alert>
    </div>
</div>
<div class="p-8">
    <component-reflecter :component="alert" />
</div>
</template>

<script lang="ts">
import Alert from "@/components/data-display/Alert.vue";
import ComponentReflecter from "@/components/util/ComponentReflecter.vue";
import {
    defineComponent
} from "vue";

export default defineComponent({
    name: "alerts",
    components: {
        Alert,
        ComponentReflecter,
    },
    data() {
        return {
            alert: Alert,
            variants: [{
                    type: "default",
                    show: true,
                },
                {
                    type: "info",
                    show: true,
                },
                {
                    type: "success",
                    show: true,
                },
                {
                    type: "danger",
                    show: true,
                },
                {
                    type: "warning",
                    show: true,
                },
            ],
            variants2: [{
                    type: "info",
                    show: true,
                },
                {
                    type: "success",
                    show: true,
                },
                {
                    type: "danger",
                    show: true,
                },
                {
                    type: "warning",
                    show: true,
                },
            ],
        };
    },
    computed: {
        isReset(): boolean {
            return this.variants.every((variant) => {
                return !variant.show;
            });
        },
    },
    methods: {
        reset() {
            this.variants.forEach((variant, index) => {
                this.variants[index].show = true;
            });
        },
    },
});
</script>

<style>
</style>
