<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 8H30V10H16zM16 22H30V24H16zM10 14H4a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 014 4h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0110 14zM4 6v6h6.0012L10 6zM10 28H4a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0110 28zM4 20v6h6.0012L10 20z"/></svg>
</template>
<script> 
export default
{ name:"IconListBoxes", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>