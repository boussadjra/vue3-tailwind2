<template>
  <section class="w-full h-full space-y-4">
  
    <aspect-ratio value="4/3">
      <iframe
        width="1349"
        height="480"
        src="https://www.youtube.com/embed/3u_vIdnJYLc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </aspect-ratio>
    <aspect-ratio value="4/3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
        alt="demo"
      ></iframe>
    </aspect-ratio>

  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspectRatio from "@/components/layout/AspectRatio";
import Flex from "@/components/layout/Flex"

export default defineComponent({
  components: { AspectRatio, Flex },
});
</script>

<style></style>
