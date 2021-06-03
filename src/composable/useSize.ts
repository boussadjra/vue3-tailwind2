
import { computed, ref } from 'vue'

export type ISize = "xs" | "sm" | "md" | "lg"

const useSize = (props: { size: ISize, full: boolean, circle: boolean }) => {
    let sizes = {
        xs: 'h-4 w-8 text-sm',
        sm: 'px-3 h-6 ',
        md: 'px-4 h-8 ',
        lg: 'px-8 h-12  text-xl',
        full: " w-full",
    }

    let circleBtnSizes = {
        xs: 'h-4 w-4',
        sm: 'h-6 h-6 ',
        md: 'h-8 w-8 ',
        lg: 'h-12 w-12',

    }
    const classes = computed(() => props.full ? sizes[props.size || 'md']+' w-full' : ` ${sizes[props.size || 'md']} ${props.circle ? circleBtnSizes[props.size || 'md'] + ' rounded-full' : ''}`)



    return { classes }
}


export default useSize;