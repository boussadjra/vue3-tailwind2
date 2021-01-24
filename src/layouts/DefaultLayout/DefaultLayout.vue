<template>
  <div>
    <nav
      class="h-48 lg:h-16 w-full sticky overflow-hidden top-0 z-20 p-4 bg-navy-blue-800 text-navy-blue-100 flex flex-col lg:flex-row items-center justify-between"
    >
      <h1 class="logo text-4xl font-bold text-emerald-500">VUEWIND</h1>

      <ul
        class="flex flex-row space-x-8 justify-between w-10/12 sm:w-6/12 lg:w-4/12 text-xs uppercase cursor-pointer"
      >
        <li class="min-w-max">
          <router-link
            to="/"
            active-class="text-emerald-500 "
            class="flex space-x-2 items-center"
          >
            <icon-home height="16" width="16" />
            <span>Home</span>
          </router-link>
        </li>
        <li class="min-w-max">
          <router-link
            to="/components"
            active-class="text-emerald-500 "
            class="flex space-x-2 items-center"
          >
            <IconModel height="16" width="16" />
            <span>Components</span>
          </router-link>
        </li>
        <li class="min-w-max">
          <router-link
            to="/dashboard"
            active-class="text-emerald-500"
            class="flex space-x-2 items-center"
          >
            <IconDashboard height="16" width="16" />
            <span> Dashboard </span>
          </router-link>
        </li>
        <li class="min-w-max">
          <router-link
            to="/about"
            active-class="text-emerald-500"
            class="flex space-x-2 items-center"
          >
            <IconUser height="16" width="16" />
            <span>About me</span>
          </router-link>
        </li>
      </ul>

      <div
        class="uppercase text-navy-blue-200 cursor-pointer flex items-center space-x-4"
      >
        <a
          href="https://github.com/boussadjra/vue3-tailwind2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <w-btn
            >Github
            <template #prepend>
              <icon-logo-github />
            </template>
          </w-btn>
        </a>
        <a href="#"    @click.prevent="isLight = !isLight">
          <component
            :is="isLight ? 'icon-moon' : 'icon-sun'"
            class="text-navy-blue-100 dark:text-navy-blue-50"
            height="24"
            width="24"
         
          />
        </a>
      </div>
    </nav>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Button from "@/components/actions/Button.vue";
import IconLogoGithub from "@/components/icons/IconLogoGithub";
import IconModel from "@/components/icons/IconModel";
import IconHome from "@/components/icons/IconHome";
import IconDashboard from "@/components/icons/IconDashboard";
import IconUser from "@/components/icons/IconUser";
import IconSun from "../../components/icons/IconSun";
import IconMoon from "../../components/icons/IconMoon";
export default {
  data() {
    return {
      isLight: true,
    };
  },
  watch: {
    isLight() {
      this.switchMode();
    },
  },
  components: {
    "w-btn": Button,
    IconLogoGithub,
    IconModel,
    IconHome,
    IconDashboard,
    IconUser,
    IconSun,
    IconMoon,
  },
  methods: {
    switchMode() {
      let htmlElem = document.querySelector("html");
      htmlElem.classList[this.isLight ? "remove" : "add"]("dark");
      localStorage.setItem("vwmode-islight", this.isLight);
    },
  },
  mounted() {
    this.isLight = JSON.parse(localStorage.getItem("vwmode-islight"));
  },
};
</script>

<style></style>
