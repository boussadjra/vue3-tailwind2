

import { PropType } from "vue";

const sizeable={
 
    props:{
        size: {
            type: String as PropType < "xs" | "sm" | "md" | "lg" > ,
            default: "md",
        },
    },
    data() {
        return {
            sizes: {
                xs: 'h-8 w-8',
                sm: 'h-16 w-16',
                md: 'h-24 w-24',
                lg: 'h-32 w-32',
                full: "full h-full w-full",
            },
        }
    },
}


export default sizeable;