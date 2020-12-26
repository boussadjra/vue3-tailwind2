<template>
<tab-view :items="items" class="bg-purple-300">
    <template #item="{item}">
        <div class="flex space-x-2 items-center">

            <span>{{item.name}}</span>

        </div>
    </template>
</tab-view>
<router-view></router-view>
</template>

<script lang="ts">
import TabView from "@/components/navigation/TabView.vue";
import {
    defineComponent
} from "vue";

export default defineComponent({
    computed: {
        items() {
            return this.$route.matched.find(route => route.name === "Forms")?.children
        }
    },
    components: {
        TabView,
    },
    mounted() {
        console.log('--------------------')
        console.log(this.$route)
        console.log('--------------------')
    },
})
</script>

<style>

</style>
