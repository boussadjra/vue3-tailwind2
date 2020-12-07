<template>
<div class="space-y-2">
    <h1 class="section__title">Tab views:</h1>
    <div class="w-full grid grid-cols-2 gap-4 place-items-center">
        <tab-view :items='items' />
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import TabView from '@/components/navigation/TabView.vue'
export default defineComponent({
    data() {
        return {
            items: [{
                    header: 'Home',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    header: 'Bookmarks',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    header: 'Notifications',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    header: 'Profile',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing.'
                },

            ]
        }
    },

    components: {
        TabView
    }
})
</script>

<style>

</style>
