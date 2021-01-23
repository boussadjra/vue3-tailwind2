<template>
<div class="layout has-sidebar dark:bg-black-600 max-w-">
   <transition name="slide">
   
  
        <aside v-if="showSidebar" class=" sticky justify-center w-64 min-h-screen py-6 overflow-auto  md:flex bg-navy-blue-100 dark:bg-black-500 dark:text-gray-100 ">
            <div class=" w-full py-4">
                
              <div class="px-2 ">Layouts</div>
                  <vue3-router-tree :items="layouts">
                    <template #item="{ item }">
                        <router-link exact-active-class="text-navy-blue-700 dark:text-navy-blue-300" :to=" item.path">
                            <div class="flex items-center space-x-2">
                                <IconLayers class="hover:transform hover:rotate-45 text-gray-500 dark:text-gray-100" height="16" width="16" />
                                <span class="text-sm font-light text-black-900 dark:text-gray-100"> {{ item.name }}</span>
                            </div>
                        </router-link>
                    </template>
                </vue3-router-tree>
              <div class="px-2 ">Components</div>

                <vue3-router-tree :items="components">
                    <template #item="{ item }">
                        <router-link exact-active-class="text-navy-blue-700 dark:text-navy-blue-300" :to=" item.path">
                            <div class="flex items-center space-x-2">
                                <IconModel class="hover:transform hover:rotate-45 text-gray-500 dark:text-gray-100" height="16" width="16" />
                                <span class="text-sm font-light text-black-900 dark:text-gray-100"> {{ item.name }}</span>
                            </div>
                        </router-link>
                    </template>
                </vue3-router-tree>
            </div>
        </aside>
        </transition>  
    <section class="w-full overflow-x-hidden transition-all  duration-500 layout" style="overflow-y: auto; max-height: calc(100vh - 64px)">
       <div class="sticky top-0 z-20 flex items-center w-full  header">
         
       
        <a href="#" class="p-4 bg-gray-100 dark:bg-black-600" @click="showSidebar=!showSidebar">
          <IconQueryQueue
            height="24"
            width="24"
            :style="collapseBtnStyle"
            class="transition-transform duration-600 text-navy-blue-500 dark:text-navy-blue-200 "
          />
        </a>
   
            <breadcrumb :path="$route.path" class="text-gray-400 dark:text-gray-100 dark:bg-black-600 font-light"> 
              <template #separator>

                <icon-caret-right class="text-gray-400 dark:text-gray-100" />
            </template>
            </breadcrumb>
        </div>
        <main class="w-full min-h-screen pt-4 pb-32 pl-8 pr-16 content dark:bg-black-700 dark:text-black-100">
            <router-view></router-view>
        </main>
    </section>
</div>
</template>

<script>
import {
    defineComponent,
    ref,
    watch
} from "vue";
import Breadcrumb from "@/components/navigation/Breadcrumb";
import Button from "@/components/actions/Button.vue";

import IconModel from "@/components/icons/IconModel";
import IconMenu from "@/components/icons/IconMenu";
import {
    useBreakpoint
} from "@/composable";
import IconCaretRight from "@/components/icons/IconCaretRight";
import {
    routes
} from "@/router";
import {
    RouteRecordRaw
} from "vue-router";

import componentsRoutes from "@/router/componentsRoutes";
import Vue3RouterTree from "vue3-router-tree";
import IconQueryQueue from "@/components/icons/IconQueryQueue";
import layoutCompRoutes from "@/router/layoutCompRoutes";
import IconLayers from "@/components/icons/IconLayers";


export default defineComponent({
    name: "components",
    setup(props) {
        const showSidebar = ref(true);
        const {
            breakpoints
        } = useBreakpoint();
        watch(breakpoints, (val) => {
            showSidebar.value = !(val.is === "xs" || val.is === "sm");
        });
        return {
            showSidebar,
        };
    },
    data() {
        return {
            currentHovered: -1,
            components: [],
            layouts: [],
        };
    },
    computed: {
        components() {
            return routes.find((route) => route.path.includes("/components"))
                ?.children;
        },
            collapseBtnStyle() {
            return {
                transform: this.showSidebar ? "scale(-1,1)" : "scale(1)",
            };
        },
    },
    components: {
        Breadcrumb,
        IconModel,
        "w-btn": Button,
        IconMenu,
        IconCaretRight,
        Vue3RouterTree,IconQueryQueue,IconCaretRight,IconLayers
    },
    methods: {
        generatePath(routes, parentPath) {
            return routes.map((route) => {
                route.path = parentPath + "/" + route.path;
                if (route.children) {
                    this.generatePath(route.children, route.path);
                }

                return route;
            });
        },
    },
    mounted() {
        this.components = this.generatePath(
            componentsRoutes.children,
            "/components"
        );
        this.layouts = this.generatePath(
            layoutCompRoutes.children,
            "/layouts"
        );

     
    },
});
</script>

<style scoped lang="scss">
.layout .sidebar {
    width: 192px;
min-width: 192px;

}
.layout .header {
    height: 48px;
    min-height: 48px;
    position: relative;
}

 .slide-enter-active, .slide-leave-active {
  transition: width .5s;
}
.slide-enter-from, .slide-leave-to{
  width:0;
}
</style>
