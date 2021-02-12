<template>
  <div class="relative h-8 max-w-min">
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="absolute -right-0 -top-0 icon-badge">
      <slot name="badge"></slot>
    </div>
    <div class="absolute -right-8 -top-3">
      <slot name="badge-text"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon-badge .animate-ping {
  top: 0;
  right: 0;
}
</style>
