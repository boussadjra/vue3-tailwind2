import { ComponentPropsOptions, PropType } from "@vue/runtime-core"

const withSmoothProps = (props?:ComponentPropsOptions) => {
    return {
        smooth: {
          type:Boolean,
          default: false,
        },
      ...props
    }
  }



  export default  withSmoothProps;
