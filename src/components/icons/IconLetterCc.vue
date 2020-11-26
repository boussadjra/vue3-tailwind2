<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 23H19a2 2 0 01-2-2V15a2 2 0 012-2h5v2H19v6h5zM15 23H9a2 2 0 01-2-2V11A2 2 0 019 9h6v2H9V21h6z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterCc", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>