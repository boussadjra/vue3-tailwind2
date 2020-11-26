<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18 30H14a2 2 0 01-2-2V21a2 2 0 01-2-2V13a3 3 0 013-3h6a3 3 0 013 3v6a2 2 0 01-2 2v7A2 2 0 0118 30zM13 12a.94.94 0 00-1 1v6h2v9h4V19h2V13a.94.94 0 00-1-1zM16 9a4 4 0 114-4h0A4 4 0 0116 9zm0-6a2 2 0 102 2h0a2 2 0 00-2-2z"/></svg>
</template>
<script> 
export default
{ name:"IconPerson", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>