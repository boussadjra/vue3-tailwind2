<template>
<div class="space-y-2">
    <h1 class="section__title">Cards:</h1>
    <div class="w-full grid grid-cols-3 gap-4 place-items-start">
        <card>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
        </card>
        <card>
            <template #header>
                <h1 class="text-2xl font-semibold text-gray-600">Some header</h1>
            </template>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
        </card>
        <card>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
            <template #footer>
                <h1 class="text-2xl font-semibold text-gray-600">Some footer</h1>
            </template>
        </card>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Cards with actions:</h1>
    <div class="w-full grid grid-cols-3 gap-4 place-items-start">
        <card>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
            <template #footer>
                <div class="flex flex-row-reverse space-x-2 space-x-reverse">
                    <vw-btn size="sm"> Add </vw-btn>
                    <vw-btn size="sm" outlined variant="danger"> Cancel </vw-btn>
                </div>
            </template>
        </card>
        <card>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
            <template #footer>
                <div class="flex space-x-8 ml-4 items-end justify-around">
                    <IconFavorite height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />
                    <IconChat height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />

                    <IconShare height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />
                </div>
            </template>
        </card>
        <card>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
            <template #footer>
                <div class="flex space-x-8 ml-4 items-end justify-around">
                    <IconFavoriteFilled height="24" width="24" class="cursor-pointer text-red-600" />
                    <IconChat height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />

                    <IconShare height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />
                </div>
            </template>
        </card>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Cards with Media:</h1>
    <div class="w-full grid grid-cols-3 gap-4 place-items-start">
        <card>
            <template #media>
                <img src="@/assets/img/salade.jpg" alt="" srcset="" />
            </template>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
        </card>
        <card>
            <template #header>
                <div class="flex space-x-2 items-center w-full justify-between pb-4">
                    <div class="flex space-x-2 items-center w-full">
                        <avatar src="https://avatars2.githubusercontent.com/u/11801238?s=460&u=07a60f4b248400448eef07da47e3ace15331e06f&v=4" shape="rounded-full" size="sm" class="flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                        </avatar>
                        <div class="flex flex-col space-y-1">
                            <span class="text-md whitespace-nowrap text-gray-700">Boussadjra Brahim</span>
                            <span class="text-xs whitespace-nowrap text-gray-500">December 5, 2020</span>
                        </div>
                    </div>
                    <vw-btn circle text>
                        <IconOverflowMenuVertical height="24" width="24" class="justify-self-end text-gray-600 cursor-pointer" />
                    </vw-btn>
                </div>
            </template>
            <template #media>
                <img src="@/assets/img/walter-verna.jpg" alt="" srcset="" />
            </template>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
            <template #footer>
                <div class="flex space-x-8 ml-4 items-end justify-around">
                    <IconFavoriteFilled height="24" width="24" class="cursor-pointer text-red-600" />
                    <IconChat height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />

                    <IconShare height="24" width="24" class="text-gray-600 cursor-pointer hover:text-purple-600" />
                </div>
            </template>
        </card>
        <card>
            <template #media>
                <img src="@/assets/img/aflou.jpg" alt="" srcset="" />
            </template>
            <div>
                <h1 class="text-md font-bold text-gray-600">Aflou</h1>
                <p class="text-gray-600 text-sm py-1">
                    Aflou is a town and commune in Laghouat Province, Algeria. It is
                    located in the Amour Range of the Saharan Atlas, at an elevation of
                    1,426 m, which makes it one of the highest towns in Algeria. Aflou
                    is the capital of Aflou District. Its population in 1998 was 48,000
                </p>
            </div>
            <template #footer>
                <div class="flex ">
                    <vw-btn size="xs" variant="success" text>SHARE</vw-btn>
                    <vw-btn size="xs" text>LEARN MORE</vw-btn>
                </div>
            </template>
        </card>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Cards with Media aside:</h1>
    <div class="w-full grid  gap-4 place-items-start">
        <card>
            <template #mediaAside>
                <img src="@/assets/img/scott-webb.jpg" alt="" srcset="" />
            </template>
            <p class="text-gray-600 text-sm">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, a accusantium itaque explicabo, incidunt aliquam molestias neque asperiores obcaecati libero commodi, consectetur eveniet officiis hic rerum totam? Perferendis, repellendus eum ullam asperiores quas optio! Minima beatae expedita quam at non.
            </p>
        </card>
    </div>
</div>
</template>

<script>
//mL72nBk16#hak
import Button from "@/components/actions/Button.vue";
import Card from "@/components/surface/Card.vue";
import {
    defineComponent
} from "vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconFavorite from "@/components/icons/IconFavorite.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconFavoriteFilled from "@/components/icons/IconFavoriteFilled.vue";
import Avatar from "@/components/data-display/Avatar.vue";
import IconOverflowMenuVertical from "@/components/icons/IconOverflowMenuVertical.vue";

export default defineComponent({
    name: "cards",
    components: {
        Card,
        "vw-btn": Button,
        IconChat,
        IconShare,
        IconFavorite,
        IconFavoriteFilled,
        Avatar,
        IconOverflowMenuVertical,
    },
});
</script>

<style>
</style>
