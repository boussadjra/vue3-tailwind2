<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M13 9L13 15 9 15 9 9 7 9 7 23 9 23 9 17 13 17 13 23 15 23 15 9 13 9zM23 13H19V9H17V23h2V15h4v8h2V15A2 2 0 0023 13z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterHh", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>