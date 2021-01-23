<template>
<div :class="`flex ${borderTop ? 'flex-col-reverse' : 'flex-col'}`">
    <div class="header flex w-full border-gray-400" :class="`${borderTop ? 'border-t' : 'border-b'}`">
        <div class="relative cursor-pointer py-2 px-6 rounded-tr rounded-tl text-gray-700 hover:text-navy-blue-700" :class="{
          ' text-navy-blue-700': currentTab === index + 1,
        }" v-for="(item, index) in items" :key="index" @click="currentTab = index + 1">
            <div>
                <slot name="item" :item="item"></slot>

                <div v-if="!$slots.item">
                    {{ item.header }}
                </div>
            </div>

            <transition :name="`slide-fade-${currentTab > prevTab ? 'right' : 'left'}`">
                <div v-if="currentTab === index + 1" :class="`${borderTop ? 'top-0' : 'bottom-0'}`" class="w-full absolute left-0 border-b-2 border-navy-blue-700 text-navy-blue-700"></div>
            </transition>
        </div>
    </div>
    <transition name=" fade">
        <div class="p-4" v-if="items[currentTab - 1].body">
            {{ items[currentTab - 1].body }}
        </div>
    </transition>
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
        borderTop: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            currentTab: 1,
            prevTab: -1,
        };
    },
    watch: {
        currentTab(newVal, oldVal) {

            this.prevTab = oldVal;
        },
    },
    mounted() {
        console.log("--------------------");
        console.log(this.$slots.item);
        console.log("--------------------");
    },
});
</script>

<style>
.slide-fade-left-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-left-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-left-enter-from {
    transform: translateX(100px);
    opacity: 0;
}

.slide-fade-right-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-right-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-right-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
