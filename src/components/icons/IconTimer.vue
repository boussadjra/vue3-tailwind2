<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M15 11H17V20H15zM13 2H19V4H13z"/><path d="M28,9,26.58,7.59,24.33,9.84a10.94,10.94,0,1,0,1.18,1.65ZM16,26a9,9,0,1,1,9-9A9,9,0,0,1,16,26Z"/></svg>
</template>
<script> 
export default
{ name:"IconTimer", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>