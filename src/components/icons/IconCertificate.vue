<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 17L25.912 20.703 30 21.297 27 24 27.771 28 24 25.75 20.229 28 21 24 18 21.297 22.2 20.703 24 17zM6 16H12V18H6zM6 12H16V14H6zM6 8H16V10H6z"/><path d="M16,26H4V6H28V16h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H16Z"/></svg>
</template>
<script> 
export default
{ name:"IconCertificate", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>