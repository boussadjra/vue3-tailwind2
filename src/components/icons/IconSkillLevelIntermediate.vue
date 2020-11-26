<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30 30H22V4h8zm-6-2h4V6H24zM20 30H12V12h8zM10 30H2V18h8z"/></svg>
</template>
<script> 
export default
{ name:"IconSkillLevelIntermediate", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>