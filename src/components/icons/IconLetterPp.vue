<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M23 13H17V27h2V23h4a2 2 0 002-2V15A2 2 0 0023 13zm-4 8V15h4v6zM9 23H7V9h6a2 2 0 012 2v5a2 2 0 01-2 2H9zm0-7h4V11H9z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterPp", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>