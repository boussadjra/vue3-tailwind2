<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M25 11L25 9 17 9 17 23 19 23 19 17 24 17 24 15 19 15 19 11 25 11zM15 23H9a2 2 0 01-2-2V11A2 2 0 019 9h6v2H9V21h6z"/></svg>
</template>
<script> 
export default
{ name:"IconCloudFoundry2", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>