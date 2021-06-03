import { defineComponent,ref } from "vue"
interface IProps{
    type:string,
    label:string
}
export default defineComponent({
    // inheritAttrs: false,
    props: {
        type: String // this is the typing (warning: you cannot use typescript types here)
    },
    setup(props, { attrs }) {
        console.log('----attrs----------------')
        console.log(typeof attrs)
        console.log('--------------------')
        const v=ref(2)
        return () => (
            <div>
                <input   type="text" {...attrs} />
            </div>
        )
    }
})