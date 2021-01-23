<template>
  <div class="layout has-sidebar min-h-screen text-black-700" v-bind:class="{ rtl }">
    <aside
      class="sidebar break-point-md min-h-screen bg-gray-100 dark:bg-black-700"
      v-bind:class="{ collapsed, toggled }"
    >
      <dashboard-side :show="!collapsed"></dashboard-side>
    </aside>
    <div class="overlay" v-on:click="setToggled()"></div>
    <div class="layout">
      <header class="header bg-gray-50 dark:bg-black-700 shadow-sm">
        <dashboard-header
          @collapse-sidebar="setCollapsed"
          @toggle-rtl="setRTL"
          :rtl="rtl"
          :sidebar-collapsed="collapsed"
        />
      </header>
      <main
        class="content bg-white text-black-700 dark:text-black-100 dark:bg-black-600 p-8"
      >
        <slot></slot>
      </main>

      <!-- <footer class="footer">
            <div class="text-sm flex justify-center items-center h-auto py-2 bottom-0  dark:bg-gray-500">
                Developed with
                <span class="text-red-700 whitespace-pre text-2xl"> ❤ </span> by
                Boussadjra Brahim
            </div>
        </footer>-->
    </div>
  </div>
</template>

<script>
import DashboardHeader from "./DashboardHeader.vue";
import DashboardSide from "./DashboardSide.vue";
export default {
  name: "App",
  data: () => ({
    collapsed: false,
    toggled: false,
    rtl: false,
  }),
  methods: {
    setCollapsed() {
      this.collapsed = !this.collapsed;
    },
    setToggled() {
      this.toggled = !this.toggled;
    },
    setRTL() {
      this.rtl = !this.rtl;
    },
  },

  components: {
    DashboardHeader,
    DashboardSide,
  },
};
</script>

<style>
a.btn {
  display: inline-block;
  margin: 10px 0;
  padding: 8px 20px;
  background-color: #fff;
  text-decoration: none;
  color: #000;
  box-shadow: 1px 1px 4px #8990ad;
  width: 100px;
  text-align: center;
  border-radius: 4px;
  font-size: 0.9rem;
}

a.btn:hover {
  background-color: #f1f1f1;
}
</style>
