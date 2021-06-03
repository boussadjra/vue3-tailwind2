
import { computed, ref } from 'vue'

type IShape = "rounded-none" | "rounded" | "rounded-full"

const useShape = (props: { shape: IShape }) => {





    return { classes: computed(() => props.shape) }
}


export default useShape;