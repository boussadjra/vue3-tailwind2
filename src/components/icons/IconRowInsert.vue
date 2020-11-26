<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28 12H10a2.0021 2.0021 0 01-2-2V4a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 12zM10 4v6H28V4zM28 30H10a2.0021 2.0021 0 01-2-2V22a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 30zM10 22v6H28V22zM9 16L3.414 10.414 2 11.828 6.172 16 2 20.172 3.414 21.586 9 16z"/></svg>
</template>
<script> 
export default
{ name:"IconRowInsert", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>