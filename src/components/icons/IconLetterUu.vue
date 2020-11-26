<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M23 23H19a2 2 0 01-2-2V13h2v8h4V13h2v8A2 2 0 0123 23zM13 23H9a2 2 0 01-2-2V9H9V21h4V9h2V21A2 2 0 0113 23z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterUu", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>