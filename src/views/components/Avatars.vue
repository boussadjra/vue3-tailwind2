<template>
<div class="space-y-2">
    <h1 class="section__title ">Avatars with images and different sizes:</h1>
    <div class="w-full grid grid-cols-4 gap-4 place-items-center">
        <template v-for="(img,i) in images">

            <avatar :src="'https://i.pravatar.cc/200?img='+img" :size="sizes[i]" class="bg-purple-200 row-start-1 text-purple-650">

            </avatar>

            <badge class="text-lg">{{sizes[i]}}</badge>

        </template>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title ">Avatars with images and different sizes:</h1>
    <div class="w-full flex flex-row  justify-between items-center">
        <div class="flex flex-col justify-center items-center space-y-4" v-for="(shape,i) in shapes" :key="i">

            <avatar src="https://i.pravatar.cc/200?img=56" :shape="shape" class="bg-purple-200 row-start-1 text-purple-650">

            </avatar>

            <badge class="text-sm">{{shape}}</badge>

        </div>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title "> Avatars with badges:</h1>
    <div class="w-full flex flex-row  justify-between items-center">
        <avatar src="https://i.pravatar.cc/200?img=56" shape="rounded-full" class="bg-purple-200 row-start-1 text-purple-650">
            <template #badge>
                <badge shape="rounded-full" size="md"></badge>
            </template>
        </avatar>
        <avatar src="https://i.pravatar.cc/200?img=58" shape="rounded-full" size="xs" class="bg-purple-200 row-start-1 text-purple-650">
            <template #badge='{avatar}'>
                <badge shape="rounded-full" size="xs" :avatar="avatar"></badge>
            </template>
        </avatar>
        <avatar src="https://i.pravatar.cc/200?img=64" shape="rounded-full" size="sm" class="bg-purple-200 row-start-1 text-purple-650">
            <template #badge='{avatar}'>

                <badge shape="rounded-full" color="red" size="sm" :avatar="avatar"></badge>
            </template>
        </avatar>
        <avatar src="https://i.pravatar.cc/200?img=65" shape="rounded" size="sm" class="bg-purple-200 row-start-1 text-purple-650">
            <template #badge='{avatar}'>

                <badge shape="rounded-full" color="green" size="md" :avatar="avatar"></badge>
            </template>
        </avatar>
        <avatar src="https://i.pravatar.cc/200?img=67" size="sm" class="bg-purple-200 row-start-1 text-purple-600">
            <template #badge='{avatar}'>

                <badge shape="rounded-full" ping position="top-right" color="blue" size="sm" :avatar="avatar"></badge>
            </template>
        </avatar>
        <avatar src="https://i.pravatar.cc/200?img=42" shape="rounded-none" size="sm" class="bg-purple-200 row-start-1 text-purple-650">
            <template #badge='{avatar}'>

                <badge shape="rounded-full" color="green" size="md" :avatar="avatar"></badge>
            </template>
        </avatar>

    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title "> Stacked avatars :</h1>
    <div class="w-full flex flex-row  items-center justify-center  ">
        <avatar v-for="i in 10" :key="i" :src="'https://i.pravatar.cc/200?img='+(60+i)" shape="rounded-full" size="sm" class="flex bg-purple-200 row-start-1 text-purple-650 -ml-4 ring-1 ring-white">

        </avatar>
    </div>
    <div class="w-full flex flex-row  items-center pt-8 justify-center ">
        <avatar v-for="i in 10" :key="i" :src="'https://i.pravatar.cc/200?img='+(20+i)" shape="rounded-full" size="xs" class="flex bg-purple-200 row-start-1 text-purple-650 -ml-2 ring-1 ring-white">

        </avatar>
    </div>
</div>
<div class="space-y-2 pb-4">
    <h1 class="section__title "> Avatars with letters :</h1>
    <div class="w-full flex flex-row  items-center justify-between ">
        <avatar v-for="(i,index) in 'KLPOABCDEF'" :key="i" shape="rounded-full" size="sm" class="flex bg-purple-200 row-start-1 text-purple-650 ring-1 ring-white">
            {{i}}
            <template #badge='{avatar}'>

                <badge shape="rounded-full" :color="index%2===0?'green':'red'" size="sm" :avatar="avatar"></badge>
            </template>
        </avatar>
        <avatar src="https://i.pravatar.cc/200?img=64" shape="rounded-full" size="sm" class="bg-purple-200 row-start-1 text-purple-650">

            <template #badge='{avatar}'>

                <badge shape="rounded-full" color="red" size="sm" :avatar="avatar"></badge>
            </template>
        </avatar>
    </div>
    <div class="w-full flex flex-row  items-center justify-between pt-8">
        <avatar v-for="i in 'OLGNBDSZMT'" :key="i" shape="rounded" size="sm" class="flex bg-purple-200 row-start-1 text-purple-650 ring-1 ring-white">
            {{i}}

        </avatar>
    </div>

</div>

<div class="p-8">
    <component-reflecter :component="avatar" />
</div>
</template>

<script lang="ts">
import Avatar from '@/components/data-display/Avatar.vue';
import Badge from '@/components/data-display/Badge.vue';
import Card from '@/components/surface/Card.vue';
import ComponentReflecter from "@/components/util/ComponentReflecter.vue";

import {
    defineComponent
} from 'vue'
export default defineComponent({
    name: 'avatars',
    data() {
        return {
            images: [54, 55, 56, 57],
            sizes: ["xs", "sm", "md", "lg"],
            shapes: ['rounded-full', 'rounded-none', 'rounded'],
            avatar: Avatar

        }
    },
    components: {
        Avatar,
        Badge,

        Card,
        ComponentReflecter
    }
})
</script>

<style>

</style>
