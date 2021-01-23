import { defineComponent, onMounted, ref, withModifiers } from "vue";

 import Icon3DCursor from './Icon3DCursor'
interface Props{
  val:number|string
}

export default defineComponent({
  name:'HelloWorld',
  props:{
    val:{
      type:Number,
      default:0
    }
  },
  components:{
    Icon3DCursor
  },
  setup({val}) {
    const count = ref(val);

    const inc = () => {
      count.value++;
    };
onMounted(()=>{
console.log('--------------------')
console.log(val)
// console.log(this.val)
console.log('--------------------')
})
    return () => (
      <>
      <div>
{val}
      </div>
      <div class="py-2 rounded cursor-pointer px-8 mt-8 bg-navy-blue-600 text-white " onClick={withModifiers(inc, ['self'])}>
        {count.value}
     

    <Icon3DCursor />
      </div>
     
      </>
    );
  }
})