<template>
<router-view></router-view>
</template>

<script lang="ts">
import TabView from "@/components/navigation/TabView.vue";
import {
    defineComponent
} from "vue";

export default defineComponent({
    computed: {

    },
    components: {
        TabView,
    },
    mounted() {

    },
})
</script>

<style>

</style>
