<template>
<div class="card  min-w-sm border border-gray-100 bg-gray-50   transition-shadow" :class="cardClasses">
    <h2 class="text-md mb-2 px-4 pt-4" v-if="$slots.header">
        <slot name="header"> </slot>
    </h2>
    <div class="w-full card__media" v-if="$slots.media">
        <slot name="media"> </slot>
    </div>
    <div class="  card__media--aside ">
        <slot name="mediaAside"> </slot>
    </div>
    <div class="flex items-center p-4">
        <slot> </slot>
    </div>

    <div class="text-md pt-4 pb-4 px-4" v-if="$slots.footer">
        <slot name="footer"> </slot>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue'

export default defineComponent({
    name: "card",
    props: {
        elevation: {
            type: String as PropType < "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" > ,
            default: "lg",
        },
    },
    data() {
        return {
            elevations: ["none", "xs", "sm", "md", "lg", "xl", "2xl"]
        }
    },
    computed: {
        cardClasses(): Array < string > {
            let classes: Array < string >= []
            let index: number = this.elevations.findIndex(el => el === this.elevation)
            let hoveredElevation = this.elevations[index + 1]
            classes.push(`shadow-${this.elevation} hover:shadow-${hoveredElevation}`)
            if (this.$slots.mediaAside) {
                classes.push('flex items-center')
            }
            return classes
        }
    },
    mounted() {

    },
});
</script>

<style lang="scss">
.card {
    &__media {
        max-height: 240px;

        img {
            max-height: 240px;
        }

    }
}
</style>
