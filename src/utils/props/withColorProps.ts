import { ComponentPropsOptions } from "@vue/runtime-core"

const withColorProps = (props?:ComponentPropsOptions) => {
    return {
        bgColor: {
            type: String,
            default: "",
        },
        bgColorHover: {
            type: String,
            default: "",
        },
        textColor: {
            type: String,
            default: "",
        },
      ...props
    }
  }



  export default  withColorProps;
