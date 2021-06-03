<template>
  <div class="w-full h-full p-16">
    <input
      type="text"
      class="border border-black-300 bg-gray-200"
      v-model="keywordInput"
    />

    <ul>
      <li v-for="k in keywords">
        <span>
          {{ k }}
        </span>

        <span class="text-red-500 ml-2">x</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from "vue";
export default defineComponent({
  setup() {
    const keywordInput = ref<string | null>(null);

    const keywords = ref<string[]>([]);

    function handleEnter(event: any) {
      if (event.key === "Enter") {
        keywords?.value?.push(keywordInput?.value ?? "");
        keywordInput.value = "";
      }
    }

    function removeItem(keyword: any) {
      keywords.value = keywords?.value?.filter((item) => item !== keyword) || null;
    }

    onMounted(() => {
      window.addEventListener("keydown", handleEnter);
    });

    onUnmounted(() => {
      window.removeEventListener("keydown", handleEnter);
    });

    return {
      keywordInput,
      keywords,
      removeItem,
    };
  },
});
</script>
