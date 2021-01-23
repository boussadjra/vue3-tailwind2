<template>
<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs:</h1>
    <div class="w-full  place-items-center">
        <breadcrumb>
            <span>Home</span>
            <span>Library</span>
            <span>Data</span>

        </breadcrumb>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs with custom separator:</h1>
    <div class="w-full  place-items-center">
        <breadcrumb>
            <span>Home</span>
            <span>Library</span>
            <span>Data</span>

            <template #separator>

                <icon-caret-right />
            </template>
        </breadcrumb>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs as badges:</h1>
    <div class="w-full  place-items-center">
        <breadcrumb>
            <badge>Home</badge>
            <badge>Library</badge>
            <badge>Data</badge>
            <template #separator>

                <icon-caret-right class="text-navy-blue-500" />
            </template>
        </breadcrumb>
    </div>
</div>

<div class="space-y-2">
    <h1 class="section__title">Breadcrumbs with current route path:</h1>
    <div class="w-full  place-items-center">
        <breadcrumb :path="$route.path">

        </breadcrumb>
    </div>
</div>
</template>

<script lang="ts">
import IconCaretRight from '@/components/icons/IconCaretRight';
import Breadcrumb from "@/components/navigation/Breadcrumb";
import Badge from "@/components/data-display/Badge.vue";

import {
    defineComponent
} from "vue";

export default defineComponent({
    name: "breadcrumbs",
    components: {
        Breadcrumb,
        IconCaretRight,
        Badge
    },
});
</script>

<style>
</style>
