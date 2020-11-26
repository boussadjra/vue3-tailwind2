<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M7 11H9V21H7zM11 11H13V21H11zM15 11H17V21H15zM19 11H21V21H19zM23 11H25V21H23z"/><path d="M28,26H4a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,4,6H28a2.0023,2.0023,0,0,1,2,2V24A2.0023,2.0023,0,0,1,28,26ZM4,8V24H28V8Z"/></svg>
</template>
<script> 
export default
{ name:"IconEdgeService", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>