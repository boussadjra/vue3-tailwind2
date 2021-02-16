<template>
  <div class="space-y-2">
    <h1 class="section__title">Breadcrumbs:</h1>
    <div class="w-full place-items-center">
      <w-breadcrumb>
        <span>Home</span>
        <span>Library</span>
        <span>Data</span>
      </w-breadcrumb>
    </div>
  </div>
  <div class="space-y-2">
    <h1 class="section__title">Breadcrumbs with custom separator:</h1>
    <div class="w-full place-items-center">
      <w-breadcrumb>
        <span>Home</span>
        <span>Library</span>
        <span>Data</span>

        <template #separator>
          <icon-caret-right />
        </template>
      </w-breadcrumb>
    </div>
  </div>

  <div class="space-y-2">
    <h1 class="section__title">Breadcrumbs as badges:</h1>
    <div class="w-full place-items-center">
      <w-breadcrumb>
        <w-badge>Home</w-badge>
        <w-badge>Library</w-badge>
        <w-badge>Data</w-badge>
        <template #separator>
          <icon-caret-right class="text-navy-blue-500" />
        </template>
      </w-breadcrumb>
    </div>
  </div>

  <div class="space-y-2">
    <h1 class="section__title">Breadcrumbs with current route path:</h1>
    <div class="w-full place-items-center">
      <w-breadcrumb :path="$route.path"> </w-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
import IconCaretRight from "@/components/icons/IconCaretRight";
import WBreadcrumb from "@/components/navigation/WBreadcrumb";
import WBadge from "@/components/data-display/WBadge.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "breadcrumbs",
  components: {
    WBreadcrumb,
    IconCaretRight,
    WBadge,
  },
});
</script>

<style></style>
