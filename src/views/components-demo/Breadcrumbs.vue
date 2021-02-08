<template>
<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs:</h1>
    <div class="w-full  place-items-center">
        <v-breadcrumb>
            <span>Home</span>
            <span>Library</span>
            <span>Data</span>

        </v-breadcrumb>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs with custom separator:</h1>
    <div class="w-full  place-items-center">
        <v-breadcrumb>
            <span>Home</span>
            <span>Library</span>
            <span>Data</span>

            <template #separator>

                <icon-caret-right />
            </template>
        </v-breadcrumb>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs as badges:</h1>
    <div class="w-full  place-items-center">
        <v-breadcrumb>
            <w-badge>Home</w-badge>
            <w-badge>Library</w-badge>
            <w-badge>Data</w-badge>
            <template #separator>

                <icon-caret-right class="text-navy-blue-500" />
            </template>
        </v-breadcrumb>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs with current route path:</h1>
    <div class="w-full  place-items-center">
        <v-breadcrumb :path="$route.path">

        </v-breadcrumb>
    </div>
</div>
</template>

<script lang="ts">
import IconCaretRight from '@/components/icons/IconCaretRight';
import VBreadcrumb from "@/components/navigation/VBreadcrumb";
import WBadge from "@/components/data-display/WBadge.vue";

import {
    defineComponent
} from "vue";

export default defineComponent({
    name: "breadcrumbs",
    components: {
        VBreadcrumb,
        IconCaretRight,
        WBadge
    },
});
</script>

<style>
</style>
