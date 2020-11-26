<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Zm0,22H4V6H28Z"/><path d="M21 20H13a3.51 3.51 0 00-.88-1.86l3.8-6.64-1.74-1-3.78 6.62A3.35 3.35 0 009.5 17a3.5 3.5 0 103.15 5H21zM9.5 22A1.5 1.5 0 1111 20.5 1.5 1.5 0 019.5 22zM19 8H26V10H19zM19 12H23V14H19z"/></svg>
</template>
<script> 
export default
{ name:"IconAnnotationVisibility", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>