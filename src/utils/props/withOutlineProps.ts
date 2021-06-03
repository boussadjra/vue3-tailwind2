import { ComponentPropsOptions } from "@vue/runtime-core"

const withOutlineProps = (props?:ComponentPropsOptions) => {
    return {
        outlined: {
            type: Boolean,
            default: false,
        },
      ...props
    }
  }



  export default  withOutlineProps;
