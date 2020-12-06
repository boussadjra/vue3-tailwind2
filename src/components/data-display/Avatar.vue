<template>
<div :class="classes" class="avatar flex items-end justify-end text-purple-600 min-w-max">
    <!-- -->
    <img :class="classes" v-if="!$slots.default" :src="src" alt="" />
    <div v-else-if="$slots.default" class="w-full self-center text-4xl flex justify-center items-center font-semibold">
        <slot></slot>
    </div>

    <div class="absolute">
        <slot name="badge" :avatar="{ size, shape }"></slot>
    </div>
</div>
</template>

<script lang="ts">
import {
    keyable
} from "@/@types/global";
import shaped from "@/mixins/shaped";
import sizeable from "@/mixins/sizeable";
import {
    defineComponent,
    PropType
} from "vue";

export default defineComponent({
    name: "avatar",

    props: {
        src: {
            type: String,
            default: "",
        },
    },
    mixins: [shaped, sizeable],
    data() {
        return {};
    },

    computed: {
        classes(): Array < string | keyable > {
            return [
                `${this.sizes[this.size]}`,
                `${this.size}`,
                this.shapes[this.shape],
                "relative",
            ];
        },
    },
});
</script>

<style lang="scss">
.avatar.sm {
    min-width: 64px;
}
</style>
