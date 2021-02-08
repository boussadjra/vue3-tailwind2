<template>
  <v-flex space-y="8" dir="col">
    <v-flex space-y="6" dir="col">
      <div class="sub-title-2 text-navy-blue-700 dark:text-navy-blue-300 py-4">Heading and text with different sizes :</div>
      <v-flex dir="col" space-y="4">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <div class="title">Main Title</div>
      <div class="sub-title-1">Substitle 1</div>
      <div class="sub-title-2">Substitle 2</div>
      <p class="max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa deserunt officiis, quos asperiores natus eius illo quas a id, voluptas quam, doloremque officia tenetur esse mollitia deleniti ipsam ut?</p>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
import VFlex from "@/components/layout/VFlex";
export default {
  components: {
    VFlex,
  },
};
</script>

<style></style>
