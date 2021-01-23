import { SPACES_X, SPACES_Y } from '@/utils/constants/spaces';
import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';


export default defineComponent({

    props: {
        dir: {
            type: String as PropType<'row' | 'col'>,
            default: 'row',
        },
        wrap: {
            type: Boolean,
            default: true
        }
    ,
        spaceX: {
            type: [Number,String],
            default: 0
        },
        spaceY: {
            type: [Number,String],
            default: 0
        },
    },

    setup(props, { slots }) {



        return () => (
            <div class={`flex ${SPACES_X[props.spaceX]} ${SPACES_Y[props.spaceY]} ${props.dir === 'col' ? 'flex-col' : 'flex-row spa'} ${props.wrap ? 'flex-wrap' : 'flex-nowrap'} `}>

                {slots.default && slots.default()}
            </div>
        );
    },
});
