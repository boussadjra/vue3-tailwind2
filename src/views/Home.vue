<template>
<div class="home bg-navy-blue-50 dark:bg-black-900 h-auto min-h-screen ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" class="fill-current text-navy-blue-800">
        <path fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,128C672,139,768,117,864,90.7C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <div class="flex flex-col-reverse justify-around w-full  lg:h-96 lg:flex-row">
        <div class="flex flex-col h-32 items-center ">
            <h1 class="text-4xl font-extrabold text-navy-blue-900 dark:text-navy-blue-200 lg:self-start lg:text-6xl">
                VUEWIND
            </h1>

            <p class="text-md text-gray-600 dark:text-gray-300 py-4 px-1 lg:text-xl">
                Let's see the magic of Vue + Tailwind
            </p>

            <w-btn size="lg" bgColor="bg-navy-blue-500 dark:bg-navy-blue-400">
                <router-link to="/components"> GET STARTED </router-link>
            </w-btn>

        </div>
        <div class="flex flex-row justify-center space-x-8 w-full py-8 lg:pr-4 lg:w-auto">
            <div class="rounded-full h-32 w-32 flex justify-center items-center lg:h-64 lg:w-64">
                <img alt="tailwind logo" src="../assets/tailwind-css-logo.svg" />
            </div>
            <div class="rounded-full h-32 w-32 flex justify-center items-center lg:h-64 lg:w-64">
                <img alt="Vue logo" src="../assets/vue-logo.svg" />
            </div>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from "vue";

import {
    RouterLink
} from "vue-router";
import Button from "@/components/actions/Button.vue";
import Card from "@/components/surface/Card";

interface keyable {
    [key: string]: any;
}
export default defineComponent({
    name: "Home",
    components: {
        Card,
        "w-btn": Button,
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event: Event) {
            console.log("--------------------");
            console.log(event);
            console.log("--------------------");
        },
    },
});
</script>
