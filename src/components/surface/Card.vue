<template>
<div class="w-full p-4  ring-4 ring-black ring-opacity-5  bg-gray-50">
    <h2 class="text-md mb-1">
        <slot name="header"> </slot>
    </h2>
    <div class="">
        <slot name="body"> </slot>
    </div>

    <div class="">
        <slot name="footer"> </slot>
    </div>
</div>
</template>

<script>
export default {
    name: "card",
};
</script>

<style>
</style>
