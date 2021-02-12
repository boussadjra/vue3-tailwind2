<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$router.currentRoute.value.meta.layout || "default-layout";
    },
  },
  components: {
    DefaultLayout,
    DashboardLayout,
  },
  mounted() {
    // let htmlElem = document.querySelector('html')
    // htmlElem.classList.add('dark')
    // console.log(htmlElem.classList)
  },
};
</script>

<style></style>
