<template>
<div class="w-auto">
    <div class="header flex   w-full border-b-2 border-gray-400">
        <div class="cursor-pointer py-2 px-6 rounded-tr rounded-tl text-gray-700 hover:bg-purple-300 hover:text-purple-700" v-for="(item, index) in items" :key="index">
            {{ item.header }}
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    keyable
} from "@/@types/global";
import {
    defineComponent,
    PropType
} from "vue";
interface itemType {
    header: string;
    body: string;
}
export default defineComponent({
    props: {
        items: {
            type: Array as PropType < Array < itemType >> ,
        },

    },
    data() {
        return {

        }
    },
});
</script>

<style>
</style>
