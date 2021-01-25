<template>
  <flex space-y="12" dir="col">
    <flex space-y="6" dir="col">
      <div class="sub-title-2 text-navy-blue-700 dark:text-navy-blue-300 py-4">
        Basic tooltips :
      </div>
      <flex dir="row" space-x="16"  >
        <tooltip v-for="(pos, index) in positions" :key="index" :position="pos" trigger="mouseover">
          <template #trigger>
            <w-btn>{{pos}}</w-btn>
          </template>
          Tooltip
        </tooltip>
      </flex>
    </flex>
    <flex space-y="6" dir="col">
      <div class="sub-title-2 text-navy-blue-700 dark:text-navy-blue-300 py-4">
        Trigger tooltip by click event :
      </div>
      <flex dir="row" space-x="16"  >
        <tooltip v-for="(pos, index) in positions" :key="index" :position="pos" trigger="click">
          <template #trigger>
            <w-btn variant="success">{{pos}}</w-btn>
          </template>
          Tooltip
        </tooltip>
      </flex>
    </flex>
  </flex>
</template>

<script>
import Flex from "@/components/layout/Flex";
import Tooltip from "@/components/data-display/Tooltip";
import Button from "@/components/actions/Button.vue";

export default {
  data() {
    return {
      positions:['top','right','bottom','left']
    }
  },
  components: {
    Flex,
    Tooltip,
    "w-btn": Button,
  },
};
</script>

<style></style>
