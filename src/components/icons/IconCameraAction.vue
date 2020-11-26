<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12,23a6,6,0,1,1,6-6A6,6,0,0,1,12,23Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,12,13Z"/><path d="M29,27H3a1,1,0,0,1-1-1V6A1,1,0,0,1,3,5H29a1,1,0,0,1,1,1V26A1,1,0,0,1,29,27ZM4,25H28V7H4Z"/><path d="M19 9H26V11H19z"/><circle cx="12" cy="17" r="1"/></svg>
</template>
<script> 
export default
{ name:"IconCameraAction", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>