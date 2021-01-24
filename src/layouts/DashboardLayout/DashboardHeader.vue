<template>
  <div class="w-full h-full flex items-center justify-between px-4">
    <div>
      <w-btn
        circle
        bgColor="bg-gray-100 dark:bg-gray-600"
        bgColorHover="hover:bg-gray-200"
        textColor="text-gray-700 dark:text-gray-200"
        v-on:click="setCollapsed()"
      >
 
          <IconQueryQueue
            height="24"
            width="24"
            :style="collapseBtnStyle"
            class="transition-transform duration-300"
          />
   
      </w-btn>
    </div>
    <div class="flex space-x-3 items-center justify-between">
      <div>
        <w-btn
          circle
          @click="setRTL"
          bgColor="bg-gray-transparent"
          bgColorHover="hover:bg-gray-200"
          textColor="text-gray-500"
          v-on:click="setCollapsed()"
        >
          <component
            :is="rtl ? 'IconTextAlignLeft' : 'IconTextAlignRight'"
            class="text-navy-blue-700 dark:text-navy-blue-400"
            height="24"
            width="24"
            @click="isLight = !isLight"
          />
        </w-btn>
      </div>
      <a href="#" @click.prevent="isLight = !isLight">
        <component
          :is="isLight ? 'icon-moon' : 'icon-sun'"
          class="text-navy-blue-700 dark:text-navy-blue-400"
          height="24"
          width="24"
          @click="isLight = !isLight"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Button from "../../components/actions/Button.vue";
import IconSun from "../../components/icons/IconSun";
import IconMoon from "../../components/icons/IconMoon";
import IconQueryQueue from "../../components/icons/IconQueryQueue";
import IconTextAlignLeft from "../../components/icons/IconTextAlignLeft";
import IconTextAlignRight from "../../components/icons/IconTextAlignRight";
export default {
  props: {
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
  },
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
  computed: {
    collapseBtnStyle() {
      return {
        transform: this.sidebarCollapsed ? "scale(1)" : "scale(-1,1)",
      };
    },
  },
  components: {
    "w-btn": Button,
    IconSun,
    IconMoon,
    IconQueryQueue,
    IconTextAlignLeft,
    IconTextAlignRight,
  },
  methods: {
    setCollapsed() {
      this.$emit("collapse-sidebar");
    },
    setRTL() {
      this.$emit("toggle-rtl");
    },
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
