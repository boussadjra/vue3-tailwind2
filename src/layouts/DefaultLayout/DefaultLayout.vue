<template>
<div>
    <nav class="h-16 w-full p-4  bg-purple-800  text-purple-100 flex flex-row items-center justify-between shadow-md">
        <h1 class="logo text-4xl font-bold text-yellow-300">
            VUEWIND
        </h1>

        <ul class="flex flex-row justify-between w-4/12 text-sm uppercase cursor-pointer ">
            <li class="min-w-max">
                <router-link to="/" active-class="text-yellow-300">Home</router-link>
            </li>
            <li class="min-w-max">
                <router-link to="/components" active-class="text-yellow-300">Components</router-link>
            </li>
            <li class="min-w-max">Icons</li>
            <li class="min-w-max">

                <router-link to="/about" active-class="text-yellow-300">About me</router-link>

            </li>
        </ul>

        <div class="uppercase text-purple-200 cursor-pointer">
            <a href="https://github.com/boussadjra/vue3-tailwind2" target="_blank" rel="noopener noreferrer">Github</a>

        </div>
    </nav>

    <main>
        <slot></slot>
    </main>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>
