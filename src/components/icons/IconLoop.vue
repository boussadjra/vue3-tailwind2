<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M23.59 19.41L26 22 21 22 21 24 26 24 23.59 26.59 25 28 30 23 25 18 23.59 19.41zM13 6A9 9 0 005.52 20l1.66-1.11A7 7 0 1113 22H2v2H13A9 9 0 0013 6z"/></svg>
</template>
<script> 
export default
{ name:"IconLoop", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>