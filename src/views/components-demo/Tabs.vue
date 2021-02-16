<template>
  <div class="space-y-2">
    <h1 class="section__title">Tab views :</h1>
    <div class="w-full grid gap-4 place-items-center">
      <card>
        <w-tab-view :items="items"> </w-tab-view>
      </card>
    </div>
  </div>

  <div class="space-y-2">
    <h1 class="section__title">Tab views with custom headers:</h1>
    <div class="w-full grid gap-4 place-items-center md:pl-12">
      <card class="w-auto">
        <w-tab-view :items="items">
          <template #item="{ item }">
            <div class="flex space-x-2 items-center">
              <component :is="item.header.toLowerCase()"></component>
              <span>{{ item.header }}</span>
            </div>
          </template>
        </w-tab-view>
      </card>
      <card class="w-auto">
        <w-tab-view :items="items">
          <template #item="{ item }">
            <div class="flex space-x-2 items-center">
              <component :is="item.header.toLowerCase()"></component>
              <span>{{ item.header }}</span>
              <w-badge
                v-if="item.header === 'Notifications'"
                textColor="text-white"
                size="xs"
                bgColor="bg-red-500"
                ><span class="text-xs">5</span></w-badge
              >
            </div>
          </template>
        </w-tab-view>
      </card>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Tab view for mobile:</h1>
    <div class="w-full flex justify-around space-x-4">
      <card class="w-auto">
        <w-tab-view :items="items" border-top class="max-w-min">
          <template #item="{ item }">
            <div class="flex items-center">
              <component
                :height="32"
                :width="32"
                :is="item.header.toLowerCase()"
              ></component>
            </div>
          </template>
        </w-tab-view>
      </card>
      <card class="w-auto">
        <w-tab-view :items="items" border-top class="max-w-min">
          <template #item="{ item }">
            <div class="flex items-center">
              <component
                v-if="item.header !== 'Home'"
                class="fill-current text-gray-500"
                :height="32"
                :width="32"
                :is="item.header.toLowerCase()"
              ></component>
              <w-icon-with-badge v-else>
                <template #icon>
                  <home :height="32" :width="32" />
                </template>

                <template #badge>
                  <w-badge
                    shape="rounded-full"
                    position="initial"
                    color="red"
                    size="sm"
                  ></w-badge>
                </template>
              </w-icon-with-badge>
            </div>
          </template>
        </w-tab-view>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WTabView from "@/components/navigation/WTabView.vue";
import IconHome from "@/components/icons/IconHome";
import IconBookmark from "@/components/icons/IconBookmark";
import IconNotification from "@/components/icons/IconNotification";
import IconUser from "@/components/icons/IconUser";
import Card from "@/components/surface/Card";
import WBadge from "@/components/data-display/WBadge.vue";
import WIconWithBadge from "@/components/data-display/WIconWithBadge.vue";

export default defineComponent({
  data() {
    return {
      items: [
        {
          header: "Home",
          body: " Lorem ipsum dolor sit amet consectetur adipisicing. 1",
        },
        {
          header: "Bookmarks",
          body: " Lorem ipsum dolor sit amet consectetur adipisicing. 2",
        },
        {
          header: "Notifications",
          body: " Lorem ipsum dolor sit amet consectetur adipisicing. 3",
        },
        {
          header: "Profile",
          body: " Lorem ipsum dolor sit amet consectetur adipisicing. 4",
        },
      ],
    };
  },

  components: {
    WTabView,
    home: IconHome,
    bookmarks: IconBookmark,
    notifications: IconNotification,
    profile: IconUser,
    Card,
    WBadge,
    WIconWithBadge,
  },
});
</script>

<style></style>
