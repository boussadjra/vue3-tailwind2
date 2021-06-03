import { ComponentPropsOptions, PropType } from "@vue/runtime-core"

const withSizeProps = (props?:ComponentPropsOptions) => {
    return {
      size: {
        type: String as PropType<"xs" | "sm" | "md" | "lg">,
        default: "md",
    },
      ...props
    }
  }



  export default  withSizeProps;
