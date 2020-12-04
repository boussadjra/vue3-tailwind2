<template>
<div class="home">
    <div class="flex flex-row justify-around items-center h-96">
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
        <div class="flex flex-row  pr-4 -ml-64">
            <div class="rounded-full h-64 w-64 flex justify-center items-center ">
                <img alt="tailwind logo" src="../assets/tailwind-css-logo.svg" />
            </div>
            <div class="rounded-full h-64 w-64 flex justify-center items-center ">
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
import Button from '@/components/actions/Button.vue';

interface keyable {
    [key: string]: any;
}
export default defineComponent({
    name: "Home",
    components: {
        HelloWorld,
        "vw-btn": Button
    },
});
</script>
