<template>
<div class="flex flex-row">
    <div class="min-h-screen flex justify-center bg-purple-100 py-6 w-64">
        <div class="flex w-full py-4">
            <ul class="flex flex-col w-32">
                <li class=" relative w-full" v-for="(component, index) in components" :key="index">
                    <!-- <span class="w-2 h-2 rounded-full bg-purple-500 absolute  left-0 top-2">

                    </span>-->

                    <router-link active-class="text-purple-700 bg-purple-200" class="flex text-gray-600 w-full pl-4 p-2" :to="`/components/${component.toLowerCase()}`">
                        <IconDevelopment class="mr-4 " />{{ component }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <main class="px-8 py-4">
        <router-view></router-view>
    </main>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

import IconDevelopment from "@/components/icons/IconDevelopment.vue";
export default defineComponent({
    name: "components",

    data() {
        return {
            components: [
                "Alerts",
                "Avatars",
                "Badges",
                "Buttons",
                "Cards",
                "Icons",
                "Inputs",
            ],
        };
    },
    components: {
        IconDevelopment
    }
});
</script>

<style>
</style>
