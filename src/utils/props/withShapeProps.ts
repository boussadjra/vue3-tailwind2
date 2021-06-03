import { ComponentPropsOptions, PropType } from "@vue/runtime-core"

const withShapeProps = (props?:ComponentPropsOptions) => {
    return {
        shape: {
          type: String as PropType<"rounded-none" | "rounded" | "rounded-full">,
          default: "rounded",
        },
      ...props
    }
  }



  export default  withShapeProps;
