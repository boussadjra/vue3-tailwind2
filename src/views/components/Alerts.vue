<template>
<div class=" space-y-2">
    <button @click="reset" class="mt-8 px-8 py-2 bg-purple-800 text-purple-100 shadow-md rounded-sm self-end focus:outline-none hover:bg-purple-900">

        RESET

    </button>

    <div class=" w-full grid grid-cols-2 gap-4 place-items-center">

        <alert v-for="variant in variants" :variant="variant.type" v-model="variant.show">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            accusamus porro maxime, veniam pariatur asperiores?
        </alert>

    </div>
</div>
</template>

<script>
import Alert from "@/components/data-display/Alert.vue";
import {
    defineComponent
} from "vue";

export default defineComponent({
    name: "alerts",
    components: {
        Alert,
    },
    data() {
        return {
            variants: [{
                    type: "default",
                    show: true
                },
                {
                    type: "info",
                    show: true
                },
                {
                    type: "success",
                    show: true
                },
                {
                    type: "danger",
                    show: true
                },
                {
                    type: "warning",
                    show: true
                },
            ],
        };
    },
    methods: {
        reset() {
            this.variants.forEach((variant, index) => {

                this.variants[index].show = true;

            })
        }
    },
});
</script>

<style>
</style>
