<template>
<div class="space-y-2">
    <h1 class="section__title">
        Badges with different shapes:
    </h1>
    <div class="w-full gap-4 grid--auto-cols ">
        <badge v-for="shape in shapes" :key="shape" :shape="shape" textColor="text-white" bgColor="bg-navy-blue-500">
            some text
        </badge>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">
        Small with badges with texts:
    </h1>
    <div class="w-full gap-4 grid--auto-cols ">
        <badge bgColor="bg-red-200" textColor="text-red-700"> +9 </badge>
        <badge bgColor="bg-red-500" textColor="text-red-200"> +99 </badge>
        <badge bgColor="bg-green-500" shape="rounded-full" textColor="text-green-100">
            5
        </badge>
        <badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
            +100
        </badge>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Badges on avatars:</h1>
    <div class="flex flex-wrap items-center w-full space-x-8">
        <div class="p-2">
            <avatar src="https://i.pravatar.cc/200?img=56" variant="rounded-full" class="row-start-1 bg-navy-blue-200 text-navy-blue-650">
                <template #badge>
                    <badge shape="rounded-full" size="md"></badge>
                </template>
            </avatar>
        </div>
        <div class="p-2">
            <avatar src="https://i.pravatar.cc/200?img=58" variant="rounded-full" size="xs" class="row-start-1 bg-navy-blue-200 text-navy-blue-650">
                <template #badge="{ avatar }">
                    <badge shape="rounded-full" size="xs" :avatar="avatar"></badge>
                </template>
            </avatar>
        </div>
        <div class="p-2">
            <avatar src="https://i.pravatar.cc/200?img=64" variant="rounded-full" size="sm" class="row-start-1 bg-navy-blue-200 text-navy-blue-650">
                <template #badge="{ avatar }">
                    <badge shape="rounded-full" bgColor="bg-red-500" size="sm" :avatar="avatar"></badge>
                </template>
            </avatar>
        </div>
        <div class="p-2">
            <avatar src="https://i.pravatar.cc/200?img=65" variant="rounded" size="sm" class="row-start-1 bg-navy-blue-200 text-navy-blue-650">
                <template #badge="{ avatar }">
                    <badge shape="rounded-full" bgColor="bg-green-500" size="sm" :avatar="avatar"></badge>
                </template>
            </avatar>
        </div>
        <div class="p-2">
            <avatar src="https://i.pravatar.cc/200?img=67" size="sm" class="row-start-1 bg-navy-blue-200 text-navy-blue-600">
                <template #badge="{ avatar }">
                    <badge shape="rounded-full" ping position="top-right" bgColor="bg-blue-500" size="sm" :avatar="avatar"></badge>
                </template>
            </avatar>
        </div>
        <div class="p-2">
            <avatar src="https://i.pravatar.cc/200?img=42" variant="rounded-none" size="sm" class="row-start-1 bg-navy-blue-200 text-navy-blue-650">
                <template #badge="{ avatar }">
                    <badge shape="rounded-full" bgColor="bg-green-500" size="sm" :avatar="avatar"></badge>
                </template>
            </avatar>
        </div>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Badges on Icons:</h1>
    <div class="w-full gap-8 grid--auto-cols grid--auto-cols-xs">
        <icon-with-badge>
            <template #icon>
                <IconNotification height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge>
                <badge shape="rounded-full" position="initial" bgColor="bg-navy-blue-500" size="sm"></badge>
            </template>
        </icon-with-badge>

        <icon-with-badge>
            <template #icon>
                <IconHome height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge>
                <badge shape="rounded-full" position="initial" bgColor="bg-red-500" size="sm"></badge>
            </template>
        </icon-with-badge>
        <icon-with-badge>
            <template #icon>
                <IconFavorite height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge>
                <badge shape="rounded-full" ping position="initial" bgColor="bg-green-500" size="sm"></badge>
            </template>
        </icon-with-badge>

        <icon-with-badge>
            <template #icon>
                <IconChat height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge-text>
                <badge bgColor="bg-red-500" shape="rounded-full" textColor="text-red-100">
                    <span class="text-sm"> +9</span>
                </badge>
            </template>
        </icon-with-badge>
        <icon-with-badge>
            <template #icon>
                <IconShoppingCart height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge-text>
                <badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
                    <span class="text-sm"> 4</span>
                </badge>
            </template>

        </icon-with-badge>
        <icon-with-badge>
            <template #icon>
                <IconModel height="32" width="32" class="text-gray-600" />
            </template>

            <template #badge-text>
                <badge bgColor="bg-emerald-500" shape="rounded-full" size="xs" textColor="text-emerald-100">
                    <span class="text-xs"> New</span>
                </badge>
            </template>

        </icon-with-badge>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Badges on buttons:</h1>
    <div class="flex flex-row items-center w-full space-x-24">
        <w-btn @click="count++">
            Count
            <template #append>
                <badge bgColor="bg-green-500" shape="rounded-full" size="xs" textColor="text-green-100">
                    {{count}}
                </badge>
            </template>
        </w-btn>
    </div>
</div>
<div class="p-8">
    <component-reflecter :component="badge" />
</div>
</template>

<script lang="ts">
import Avatar from "@/components/data-display/Avatar.vue";
import Badge from "@/components/data-display/Badge.vue";
import IconWithBadge from "@/components/data-display/IconWithBadge.vue";
import IconChat from '@/components/icons/IconChat';
import IconFavorite from '@/components/icons/IconFavorite';
import IconHome from '@/components/icons/IconHome';
import IconModel from '@/components/icons/IconModel';
import IconNotification from "@/components/icons/IconNotification";
import IconShoppingBag from '@/components/icons/IconShoppingBag';
import IconShoppingCart from '@/components/icons/IconShoppingCart';
import ComponentReflecter from "@/components/util/ComponentReflecter.vue";
import Button from "@/components/actions/Button.vue";

import {
    defineComponent
} from "vue";

export default defineComponent({
    data() {
        return {
            shapes: ["rounded-full", "rounded", "rounded-none"],
            badge: Badge,
            count: 0
        };
    },
    components: {
        Badge,
        ComponentReflecter,
        Avatar,
        IconNotification,
        IconWithBadge,
        IconHome,
        IconChat,
        IconShoppingBag,
        IconFavorite,
        IconShoppingCart,
        IconModel,
        "w-btn": Button,

    },
});
</script>

<style>
</style>
