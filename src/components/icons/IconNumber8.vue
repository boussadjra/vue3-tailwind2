<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18,9H14a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V11A2,2,0,0,0,18,9Zm0,2v4H14V11ZM14,21V17h4v4Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumber8", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>