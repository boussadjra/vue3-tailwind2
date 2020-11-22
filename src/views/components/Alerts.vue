<template>
<div class="p-8 h-full w-full grid grid-cols-2 gap-4 place-items-center ">
    <alert v-for="variant in variants" :variant="variant">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusamus porro maxime, veniam pariatur asperiores?
    </alert>
</div>
</template>

<script>
import Alert from '@/components/data-display/Alert.vue'
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'alerts',
    components: {
        Alert
    },
    data() {
        return {
            variants: ["default", "info", "success", "danger", "warning"]
        }
    },
})
</script>

<style>

</style>
