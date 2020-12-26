<template>
<div class="">

    <default-layout>
        <router-view></router-view>
    </default-layout>

</div>
</template>

<script>
import AdminLayout from "./layouts/AdminLayout/AdminLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.vue";

export default {
    name: "app",
    data() {
        return {
            // layout: 'default-layout'
        };
    },
    computed: {
        layout() {
            return this.$router.currentRoute.value.meta || "default-layout";
        },
    },
    components: {
        DefaultLayout,
        AdminLayout,
    },
    mounted() {

    },
};
</script>

<style>
</style>
