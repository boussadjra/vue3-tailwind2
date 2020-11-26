<template>
<div class="home">

    <div class="flex flex-row justify-around items-center h-96">

        <div class="flex flex-col h-32 items-center">

            <h1 class="text-6xl font-extrabold text-purple-900 self-start">VUEWIND</h1>

            <p class="text-xl text-gray-600 py-4 px-1">Let's see the magic of Vue + Tailwind</p>

            <button class="mt-8 px-8 py-4 bg-purple-800 text-purple-100 shadow-md rounded-sm self-end focus:outline-none hover:bg-purple-900">
                <router-link to="/components">
                    GET STARTED
                </router-link>
            </button>

        </div>
        <div class="flex flex-row w-48 pr-4 -ml-64">

            <img alt="Vue logo" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>

    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {
    RouterLink
} from 'vue-router';
interface keyable {
    [key: string]: any;
}
export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
    },

});
</script>
