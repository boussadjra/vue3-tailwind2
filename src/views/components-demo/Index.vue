<template>
<div class="flex flex-row ">
    <transition name="slide-fade">

        <aside v-if="showSidebar" class=" md:flex justify-center bg-purple-100 py-6 w-64 sticky min-h-screen ">
            <div class="flex w-full py-4 ">
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
    </transition>
    <section class="w-full transition-all overflow-x-hidden" style="overflow-y: auto; max-height: calc(100vh - 64px)">
        <div class="w-full items-center sticky top-0 z-20 flex bg-gray-100">

            <icon-menu @click="showSidebar=!showSidebar" class="text-purple-500 hover:text-purple-700 ml-4 mt-1 text-lg cursor-pointer" :height="24" :width="24" />

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
    defineComponent,
    ref,
    watch
} from "vue";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import Button from "@/components/actions/Button.vue";

import IconModel from "@/components/icons/IconModel.vue";
import IconMenu from "@/components/icons/IconMenu.vue";
import {
    useBreakpoint
} from '@/composable'
export default defineComponent({
    name: "components",
    setup(props) {
        const showSidebar = ref < boolean > (true)
        const {
            breakpoints
        } = useBreakpoint()
        watch(breakpoints, (val) => {

            showSidebar.value = !(val.is === 'xs' || val.is === 'sm')

        })
        return {
            showSidebar
        }
    },
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
        "w-btn": Button,
        IconMenu
    },
    mounted() {

    },
});
</script>

<style>
.slide-fade-enter-active {
    transition: all .8s ease-out;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-16rem);
    opacity: 0;
}
</style>
