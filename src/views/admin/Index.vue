<template>
<div>admin</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

export default defineComponent({
    name: "admin",
    mounted() {
        console.log('-------admin mounted------------')
        console.log(this.$router)
        console.log('--------------------')
    },
});
</script>

<style>
</style>
