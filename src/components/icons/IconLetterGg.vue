<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M19 13a2 2 0 00-2 2v6a2 2 0 002 2h4v2H18v2h5a2 2 0 002-2V13zm4 8H19V15h4zM15 23H9a2 2 0 01-2-2V11A2 2 0 019 9h6v2H9V21h4V17H11V15h4z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterGg", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>