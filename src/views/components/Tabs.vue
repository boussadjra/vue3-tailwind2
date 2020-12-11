<template>
<div class="space-y-2">
    <h1 class="section__title">Tab views:</h1>
    <div class="w-full grid grid-cols-2 gap-4 place-items-center">
        <tab-view :items='items'>

        </tab-view>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Tab views with custom headers:</h1>
    <div class="w-full grid grid-cols-2 gap-4 place-items-center pl-12">
        <tab-view :items='items'>
            <template #item="{item}">
                <div class="flex space-x-2 items-center">
                    <component :is="item.header.toLowerCase()"></component>
                    <span>{{item.header}}</span>
                </div>
            </template>
        </tab-view>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import TabView from '@/components/navigation/TabView.vue'
import IconHome from '@/components/icons/IconHome.vue';
import IconBookmark from '@/components/icons/IconBookmark.vue';
import IconNotification from '@/components/icons/IconNotification.vue';
import IconUser from '@/components/icons/IconUser.vue';

export default defineComponent({
    data() {
        return {
            items: [{
                    header: 'Home',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing. 1'
                },
                {
                    header: 'Bookmarks',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing. 2'
                },
                {
                    header: 'Notifications',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing. 3'
                },
                {
                    header: 'Profile',
                    body: ' Lorem ipsum dolor sit amet consectetur adipisicing. 4'
                },

            ]
        }
    },

    components: {
        TabView,
        home: IconHome,
        bookmarks: IconBookmark,
        notifications: IconNotification,
        profile: IconUser

    }
})
</script>

<style>

</style>
