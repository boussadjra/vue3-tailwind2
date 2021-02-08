<template>
  <v-flex space-y="12" dir="col">
    <v-flex space-y="6" dir="col">
      <div class="sub-title-2 text-navy-blue-700 dark:text-navy-blue-300 py-4">
        Basic tooltips :
      </div>
      <v-flex dir="row" space-x="16"  >
        <w-tooltip v-for="(pos, index) in positions" :key="index" :position="pos" trigger="mouseover">
          <template #trigger>
            <w-btn>{{pos}}</w-btn>
          </template>
          WTooltip
        </w-tooltip>
      </v-flex>
    </v-flex>
    <v-flex space-y="6" dir="col">
      <div class="sub-title-2 text-navy-blue-700 dark:text-navy-blue-300 py-4">
        Trigger w-tooltip by click event :
      </div>
      <v-flex dir="row" space-x="16"  >
        <w-tooltip v-for="(pos, index) in positions" :key="index" :position="pos" trigger="click">
          <template #trigger>
            <w-btn variant="success">{{pos}}</w-btn>
          </template>
          WTooltip
        </w-tooltip>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
import VFlex from "@/components/layout/VFlex";
import WTooltip from "@/components/data-display/WTooltip";
import WButton from "@/components/actions/WButton.vue";

export default {
  data() {
    return {
      positions:['top','right','bottom','left']
    }
  },
  components: {
    VFlex,
    WTooltip,
    "w-btn": WButton,
  },
};
</script>

<style></style>
