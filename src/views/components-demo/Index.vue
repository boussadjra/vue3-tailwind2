<template>
<div class="flex flex-row">
    <aside class=" flex justify-center bg-purple-100 py-6 w-64 sticky  ">
        <div class="flex w-full py-4">
            <ul class="flex flex-col w-full max-h-96 overflow-auto">
                <li class="relative w-full " v-for="(component, index) in components" :key="index">
                    <!-- <span class="w-2 h-2 rounded-full bg-purple-500 absolute  left-0 top-2">

                    </span>-->

                    <router-link active-class="text-purple-700 bg-purple-200" class="flex text-gray-600 w-full pl-4 p-2" :to="component.path">
                        <IconModel class="mr-4 hover:rotate-45" />{{ component.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </aside>
    <section class="w-full" style="overflow-y: auto; max-height: calc(100vh - 64px)">
        <div class="w-full place-items-center sticky top-0 z-20">
            <breadcrumb :path="$route.path"> </breadcrumb>
        </div>
        <main class="pl-8 pr-16 pt-4 pb-32 w-full">
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

        };
    },
    computed: {
        components() {
            return this.$router.getRoutes().filter(route => route.path.includes('/components/'))
        }
    },
    components: {
        Breadcrumb,
        IconModel,
    },
    mounted() {

    },
});
</script>
