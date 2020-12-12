<template>
<div class="space-y-2">
    <h1 class="section__title">Tab views :</h1>
    <div class="w-full grid  gap-4 place-items-center">
        <card>
            <tab-view :items='items'>

            </tab-view>
        </card>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Tab views with custom headers:</h1>
    <div class="w-full grid  gap-4 place-items-center pl-12">
        <card class="w-auto">
            <tab-view :items='items'>
                <template #item="{item}">
                    <div class="flex space-x-2 items-center">
                        <component :is="item.header.toLowerCase()"></component>
                        <span>{{item.header}}</span>

                    </div>
                </template>
            </tab-view>
        </card>
        <card class="w-auto">
            <tab-view :items='items'>
                <template #item="{item}">
                    <div class="flex space-x-2 items-center">
                        <component :is="item.header.toLowerCase()"></component>
                        <span>{{item.header}}</span>
                        <badge v-if="item.header==='Notifications'" textColor="text-white" size="xs" bgColor="bg-red-500"><span class="text-xs">5</span></badge>
                    </div>
                </template>
            </tab-view>
        </card>
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
import Card from '@/components/surface/Card.vue';
import Badge from '@/components/data-display/Badge.vue';
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
        profile: IconUser,
        Card,
        Badge

    }
})
</script>

<style>

</style>
