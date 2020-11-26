<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18,14H14V11h5V9H14a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V16A2,2,0,0,0,18,14Zm-4,7V16h4v5Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumber6", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>