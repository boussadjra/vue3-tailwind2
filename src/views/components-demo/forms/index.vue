<template>
  <router-view></router-view>
</template>

<script lang="ts">
import WTabView from "@/components/navigation/WTabView.vue";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {},
  components: {
    WTabView,
  },
  mounted() {},
});
</script>

<style></style>
