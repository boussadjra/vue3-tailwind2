<template>
<div class="home bg-purple-50 " style="overflow-y: auto; max-height: calc(100vh - 64px)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" class="fill-current text-purple-800">
        <path fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,128C672,139,768,117,864,90.7C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <div class="flex flex-row justify-around  h-96 ">
        <div class="flex flex-col h-32 items-center">
            <h1 class="text-6xl font-extrabold text-purple-900 self-start">
                VUEWIND
            </h1>

            <p class="text-xl text-gray-600 py-4 px-1">
                Let's see the magic of Vue + Tailwind
            </p>

            <vw-btn size="lg">
                <router-link to="/components"> GET STARTED </router-link>
            </vw-btn>
        </div>
        <div class="flex flex-row pr-4 -ml-64">
            <div class="rounded-full h-64 w-64 flex justify-center items-center">
                <img alt="tailwind logo" src="../assets/tailwind-css-logo.svg" />
            </div>
            <div class="rounded-full h-64 w-64 flex justify-center items-center">
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
import HelloWorld from "@/components/HelloWorld.vue";
import {
    RouterLink
} from "vue-router";
import Button from "@/components/actions/Button.vue";

interface keyable {
    [key: string]: any;
}
export default defineComponent({
    name: "Home",
    components: {
        HelloWorld,
        "vw-btn": Button,
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event: Event) {
            console.log('--------------------')
            console.log(event)
            console.log('--------------------')
        }
    }
});
</script>
