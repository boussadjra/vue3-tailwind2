import { defineComponent, h, Slot, Transition, VNode } from 'vue';
import { RouteMeta, RouterView } from 'vue-router';
import AdminLayout from "./layouts/AdminLayout/AdminLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.vue";


export default defineComponent({
    name: 'app',
    data() {
        return {
            // layout: 'default-layout'
        };
    },
    computed: {
        layout() :RouteMeta{
            return this.$router.currentRoute.value.meta || "default-layout";
        },
    },
    components: {
       'default-layout': DefaultLayout,
       'admin-layout': AdminLayout,
    },
    mounted() {
        console.log("--------------------");
        console.log(this.$router.currentRoute.value.meta);
         console.log(this.$options.components);
        console.log("--------------------");
    },
    render(): VNode {
let Layout =DefaultLayout;
   switch (this.layout) {
    //    case 'admin-layout':
           
    //        break;
   
       default:

           break;
   }
        return h(
            'div',

           h(Layout,RouterView)
           
        );
    },
});
