<template>
<div class="flex flex-row">
    <aside class="min-h-screen flex justify-center bg-purple-100 py-6 w-64 sticky">
        <div class="flex w-full py-4">
            <ul class="flex flex-col w-full">
                <li class="relative w-full" v-for="(component, index) in components" :key="index">
                    <!-- <span class="w-2 h-2 rounded-full bg-purple-500 absolute  left-0 top-2">

                    </span>-->

                    <router-link active-class="text-purple-700 bg-purple-200" class="flex text-gray-600 w-full pl-4 p-2" :to="`/components/${component.toLowerCase()}`">
                        <IconModel class="mr-4 hover:rotate-45" />{{ component }}
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
    <section class="w-full" style="overflow-y: scroll; max-height: calc(100vh - 64px)">
        <div class="w-full place-items-center sticky top-0 z-20">
            <breadcrumb :path="$route.path"> </breadcrumb>
        </div>
        <main class="pl-8 pr-16 py-4 w-full">
            <router-view></router-view>
        </main>
    </section>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import Breadcrumb from "@/components/navigation/Breadcrumb";

import IconModel from "@/components/icons/IconModel.vue";
export default defineComponent({
    name: "components",

    data() {
        return {
            components: [
                "Alerts",
                "Avatars",
                "Badges",
                "Breadcrumbs",
                "Buttons",
                "Cards",
                "Icons",
                "Inputs",
            ],
        };
    },
    components: {
        Breadcrumb,
        IconModel,
    },
});
</script>
