<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 30H4a2 2 0 01-2-2V24a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 30zM4 24v4H8V24zM18 30H14a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 30zm-4-6v4h4V24zM28 30H24a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 30zm-4-6v4h4V24zM28 20H4a2 2 0 01-2-2V4A2 2 0 014 2H28a2 2 0 012 2V18A2 2 0 0128 20zM4 4V18H28V4z"/></svg>
</template>
<script> 
export default
{ name:"IconThumbnail1", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>