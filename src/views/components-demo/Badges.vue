<template>
  <div class="space-y-2">
    <h1 class="section__title">Badges with different shapes:</h1>
    <div class="w-full gap-4 grid--auto-cols">
      <w-badge
        v-for="shape in shapes"
        :key="shape"
        :shape="shape"
        textColor="text-white"
        bgColor="bg-navy-blue-500"
      >
        some text
      </w-badge>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Small with badges with texts:</h1>
    <div class="w-full gap-4 grid--auto-cols">
      <w-badge bgColor="bg-red-200" textColor="text-red-700"> +9 </w-badge>
      <w-badge bgColor="bg-red-500" textColor="text-red-200"> +99 </w-badge>
      <w-badge bgColor="bg-green-500" shape="rounded-full" textColor="text-green-100">
        5
      </w-badge>
      <w-badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
        +100
      </w-badge>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Badges on avatars:</h1>
    <div class="flex flex-wrap items-center w-full space-x-8">
      <div class="p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=56"
          variant="rounded-full"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-650"
        >
          <template #badge>
            <w-badge shape="rounded-full" size="md"></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=58"
          variant="rounded-full"
          size="xs"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge shape="rounded-full" size="xs" :avatar="avatar"></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=64"
          variant="rounded-full"
          size="sm"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              bgColor="bg-red-500"
              size="sm"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=65"
          variant="rounded"
          size="sm"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              bgColor="bg-green-500"
              size="sm"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=67"
          size="sm"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-600"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              ping
              position="top-right"
              bgColor="bg-blue-500"
              size="sm"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
      <div class="p-2">
        <w-avatar
          src="https://i.pravatar.cc/200?img=42"
          variant="rounded-none"
          size="sm"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-650"
        >
          <template #badge="{ avatar }">
            <w-badge
              shape="rounded-full"
              bgColor="bg-green-500"
              size="sm"
              :avatar="avatar"
            ></w-badge>
          </template>
        </w-avatar>
      </div>
    </div>
  </div>

  <div class="space-y-2">
    <h1 class="section__title">Badges on Icons:</h1>
    <div class="w-full gap-8 grid--auto-cols grid--auto-cols-xs">
      <w-icon-with-badge>
        <template #icon>
          <IconNotification height="32" width="32" class="text-gray-600" />
        </template>

        <template #badge>
          <w-badge
            shape="rounded-full"
            position="initial"
            bgColor="bg-navy-blue-500"
            size="sm"
          ></w-badge>
        </template>
      </w-icon-with-badge>

      <w-icon-with-badge>
        <template #icon>
          <IconHome height="32" width="32" class="text-gray-600" />
        </template>

        <template #badge>
          <w-badge
            shape="rounded-full"
            position="initial"
            bgColor="bg-red-500"
            size="sm"
          ></w-badge>
        </template>
      </w-icon-with-badge>
      <w-icon-with-badge>
        <template #icon>
          <IconFavorite height="32" width="32" class="text-gray-600" />
        </template>

        <template #badge>
          <w-badge
            shape="rounded-full"
            ping
            position="initial"
            bgColor="bg-green-500"
            size="sm"
          ></w-badge>
        </template>
      </w-icon-with-badge>

      <w-icon-with-badge>
        <template #icon>
          <IconChat height="32" width="32" class="text-gray-600" />
        </template>

        <template #badge-text>
          <w-badge bgColor="bg-red-500" shape="rounded-full" textColor="text-red-100">
            <span class="text-sm"> +9</span>
          </w-badge>
        </template>
      </w-icon-with-badge>
      <w-icon-with-badge>
        <template #icon>
          <IconShoppingCart height="32" width="32" class="text-gray-600" />
        </template>

        <template #badge-text>
          <w-badge bgColor="bg-blue-500" shape="rounded-full" textColor="text-blue-100">
            <span class="text-sm"> 4</span>
          </w-badge>
        </template>
      </w-icon-with-badge>
      <w-icon-with-badge>
        <template #icon>
          <IconModel height="32" width="32" class="text-gray-600" />
        </template>

        <template #badge-text>
          <w-badge
            bgColor="bg-emerald-500"
            shape="rounded-full"
            size="xs"
            textColor="text-emerald-100"
          >
            <span class="text-xs"> New</span>
          </w-badge>
        </template>
      </w-icon-with-badge>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Badges on buttons:</h1>
    <div class="flex flex-row items-center w-full space-x-24">
      <w-btn @click="count++">
        Count
        <template #append>
          <w-badge
            bgColor="bg-green-500"
            shape="rounded-full"
            size="xs"
            textColor="text-green-100"
          >
            {{ count }}
          </w-badge>
        </template>
      </w-btn>
    </div>
  </div>
  <div class="p-8">
    <component-reflecter :component="badge" />
  </div>
</template>

<script lang="ts">
import WAvatar from "@/components/data-display/WAvatar.vue";
import WBadge from "@/components/data-display/WBadge.vue";
import WIconWithBadge from "@/components/data-display/WIconWithBadge.vue";
import IconChat from "@/components/icons/IconChat";
import IconFavorite from "@/components/icons/IconFavorite";
import IconHome from "@/components/icons/IconHome";
import IconModel from "@/components/icons/IconModel";
import IconNotification from "@/components/icons/IconNotification";
import IconShoppingBag from "@/components/icons/IconShoppingBag";
import IconShoppingCart from "@/components/icons/IconShoppingCart";
import ComponentReflecter from "@/components/util/ComponentReflecter.vue";
import WButton from "@/components/actions/WButton.vue";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      shapes: ["rounded-full", "rounded", "rounded-none"],
      badge: WBadge,
      count: 0,
    };
  },
  components: {
    WBadge,
    ComponentReflecter,
    WAvatar,
    IconNotification,
    WIconWithBadge,
    IconHome,
    IconChat,
    IconShoppingBag,
    IconFavorite,
    IconShoppingCart,
    IconModel,
    "w-btn": WButton,
  },
});
</script>

<style></style>
