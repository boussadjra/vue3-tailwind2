<template>
<div class="flex flex-row">
    <div class="min-h-screen flex  justify-center bg-gray-100 py-6 w-48">
        <div class="flex w-full max-w-xs p-4 ">

            <ul class="flex flex-col w-full">
                <li class="p-2 relative" v-for="(component, index) in components" :key="index">
                    <!-- <span class="w-2 h-2 rounded-full bg-purple-500 absolute  left-0 top-2">

                    </span>-->

                    <router-link active-class="text-purple-500" :to="`${component.toLowerCase()}`">{{
              component
            }}</router-link>
                </li>
            </ul>
        </div>
    </div>

    <main>
        <router-view></router-view>
    </main>
</div>
</template>

<script>
export default {
    name: "components",

    data() {
        return {
            components: ["Alerts", "Avatars", "Badges", "Buttons", "Cards", "Inputs"],
        };
    },
};
</script>

<style>
</style>
