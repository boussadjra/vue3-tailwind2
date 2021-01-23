<template>
<div class="space-y-2">
    <h1 class="section__title">Cards:</h1>
    <div class="w-full grid--auto-cols gap-8">
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
    <div class="w-full grid--auto-cols gap-4">
        <card>
            <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                illum totam nulla, sunt enim numquam eveniet animi nostrum eius quia
                laborum ex facilis aspernatur? Alias eos error voluptatibus
                repudiandae quia.
            </p>
            <template #footer>
                <div class="flex flex-row-reverse space-x-2 space-x-reverse">
                    <w-btn size="sm"> Add </w-btn>
                    <w-btn size="sm" outlined variant="danger"> Cancel </w-btn>
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
                    <IconFavorite height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />
                    <IconChat height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />

                    <IconShare height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />
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
                    <IconChat height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />

                    <IconShare height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />
                </div>
            </template>
        </card>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Cards with Media:</h1>
    <div class="w-full grid--auto-cols gap-4">
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
                        <avatar src="https://avatars2.githubusercontent.com/u/11801238?s=460&u=07a60f4b248400448eef07da47e3ace15331e06f&v=4" shape="rounded-full" size="sm" class="flex bg-navy-blue-200 text-navy-blue-100 row-start-1 row-end-3 text-navy-blue-650 ring-1 ring-white">
                        </avatar>
                        <div class="flex flex-col space-y-1">
                            <span class="text-md whitespace-nowrap text-gray-700">Boussadjra Brahim</span>
                            <span class="text-xs whitespace-nowrap text-gray-500">December 5, 2020</span>
                        </div>
                    </div>
                    <w-btn circle text>
                        <IconOverflowMenuVertical height="24" width="24" class="justify-self-end text-gray-600 cursor-pointer" />
                    </w-btn>
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
                    <IconChat height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />

                    <IconShare height="24" width="24" class="text-gray-600 cursor-pointer hover:text-navy-blue-600" />
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
                    <w-btn size="xs" variant="success" text>SHARE</w-btn>
                    <w-btn size="xs" text>LEARN MORE</w-btn>
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
                <div class="w-96">
                    <img src="@/assets/img/scott-webb.jpg" alt="" srcset="" />
                </div>
            </template>
            <div class="h-full ">
                <h1 class="text-2xl font-bold text-gray-700 ">
                    Some title
                </h1>
                <p class="text-gray-600 text-md leading-snug ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem maiores provident mollitia tenetur alias quidem quia suscipit, amet aut eaque nisi tempora voluptates numquam. Soluta dolorem recusandae sapiente atque, quos fugiat dicta consectetur, explicabo et modi facere pariatur officiis quod suscipit neque expedita earum laboriosam itaque voluptate distinctio aperiam. Neque, dolorum sint, quo aspernatur ullam, qui doloremque quod perspiciatis fugiat fuga quis repudiandae! Laborum, enim! Sit, optio commodi esse eaque eum dolorum nulla accusamus, sequi quidem ut eveniet explicabo laborum iste perferendis architecto maxime. Vel labore possimus ipsa reiciendis officia assumenda minus repudiandae? Facere cupiditate molestias ea, repudiandae excepturi odit modi sequi ducimus possimus totam quia a dignissimos laboriosam explicabo repellendus reiciendis consequuntur. Quibusdam culpa voluptas iure dolorem excepturi explicabo nostrum minus. Laborum, doloribus illum sint doloremque quod exercitationem omnis quibusdam qui eligendi illo ipsam cum deserunt. Culpa, distinctio voluptates similique architecto sint repudiandae eveniet dolor quasi amet minus ex, natus porro eligendi. Ad culpa enim veritatis mollitia harum quibusdam sapiente reprehenderit dolores. Odio ipsa ducimus dicta iure obcaecati itaque assumenda, quaerat minus nesciunt accusantium architecto ex? Tenetur odio enim mollitia placeat reprehenderit dolores, vel ipsum, hic eum libero perferendis culpa exercitationem illum itaque unde officia animi sapiente maiores.
                </p>
            </div>
        </card>
    </div>
</div>
<div class="space-y-2">
    <h1 class="section__title">Cards weather:</h1>
    <div class="w-full grid--auto-cols gap-4">
        <card class="w-full bg-gradient-to-r from-navy-blue-900 to-navy-blue-700 text-navy-blue-50 rounded-md ">
            <template #header>
                <div class="flex justify-between">
                    <badge shape="rounded">Algiers</badge>
                    <span class="text-lg font-bold ">{{new Date().toLocaleTimeString().slice(0,-6)}}</span>
                </div>
            </template>

            <div class="flex justify-center items-center w-96">
                <IconAwake class="h-32 w-32 text-yellow-300" />
            </div>
            <template #footer>
                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <span class="flex space-x-2 items-center">
                            <IconWindyStrong /> <span>14km/h</span>
                        </span>
                        <span class="flex space-x-2 items-center">
                            <IconRainDrop /> <span>58%</span>
                        </span>

                    </div>

                    <div>
                        <h1 class="text-6xl">
                            18°
                        </h1>
                    </div>
                </div>
            </template>
        </card>
        <card class="w-full bg-gradient-to-r from-navy-blue-900 to-navy-blue-700 text-navy-blue-50 rounded-md ">
            <template #header>
                <div class="flex justify-between">
                    <badge shape="rounded">Laghouat</badge>
                    <span class="text-lg font-bold ">{{new Date().toLocaleTimeString().slice(0,-6)}}</span>
                </div>
            </template>

            <div class="flex justify-center items-center w-96">
                <IconMostlyCloudy class="h-32 w-32 text-yellow-300" />
            </div>
            <template #footer>
                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <span class="flex space-x-2 items-center">
                            <IconWindyStrong /> <span>27km/h</span>
                        </span>
                        <span class="flex space-x-2 items-center">
                            <IconRainDrop /> <span>32%</span>
                        </span>

                    </div>

                    <div>
                        <h1 class="text-6xl">
                            12°
                        </h1>
                    </div>
                </div>
            </template>
        </card>
        <card class="w-full bg-gradient-to-r from-navy-blue-900 to-navy-blue-700 text-navy-blue-50 rounded-md ">
            <template #header>
                <div class="flex justify-between">
                    <badge shape="rounded">Annaba</badge>
                    <span class="text-lg font-bold ">{{new Date().toLocaleTimeString().slice(0,-6)}}</span>
                </div>
            </template>

            <div class="flex justify-center items-center w-96">
                <IconCloudy class="h-32 w-32 text-yellow-300" />
            </div>
            <template #footer>
                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <span class="flex space-x-2 items-center">
                            <IconWindyStrong /> <span>31km/h</span>
                        </span>
                        <span class="flex space-x-2 items-center">
                            <IconRainDrop /> <span>62%</span>
                        </span>

                    </div>

                    <div>
                        <h1 class="text-6xl">
                            21°
                        </h1>
                    </div>
                </div>
            </template>
        </card>

    </div>
</div>
</template>

<script>
//mL72nBk16#hak
import Button from "@/components/actions/Button.vue";
import Card from "@/components/surface/Card";

import {
    defineComponent
} from "vue";
import IconChat from "@/components/icons/IconChat";
import IconFavorite from "@/components/icons/IconFavorite";
import IconShare from "@/components/icons/IconShare";
import IconFavoriteFilled from "@/components/icons/IconFavoriteFilled";
import Avatar from "@/components/data-display/Avatar.vue";
import IconOverflowMenuVertical from "@/components/icons/IconOverflowMenuVertical";
import Badge from '@/components/data-display/Badge.vue';
import IconAwake from '@/components/icons/IconAwake';
import IconWindyStrong from '@/components/icons/IconWindyStrong';
import IconRainDrop from '@/components/icons/IconRainDrop';
import IconMostlyCloudy from '@/components/icons/IconMostlyCloudy';
import IconCloudy from '@/components/icons/IconCloudy';

export default defineComponent({
    name: "cards",
    components: {
        Card,
        "w-btn": Button,
        IconChat,
        IconShare,
        IconFavorite,
        IconFavoriteFilled,
        Avatar,
        IconOverflowMenuVertical,
        Badge,
        IconAwake,
        IconWindyStrong,
        IconRainDrop,
        IconMostlyCloudy,
        IconCloudy
    },
});
</script>

<style>
</style>
