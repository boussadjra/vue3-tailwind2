import { ALIGHMENTS, JUSTIFY } from '@/utils/constants/alignments';
import { SPACES_X, SPACES_Y } from '@/utils/constants/spaces';
import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({
	props: {
		dir: {
			type: String as PropType<'row' |'row-reverse' |'col'|'col-reverse'>,
			default: 'row',
		},
		wrap: {
			type: Boolean,
			default: true,
		},
		spaceX: {
			type: [Number, String],
			default: 0,
		},
		spaceY: {
			type: [Number, String],
			default: 0,
		},
		align: {
			type: String as PropType<'start' | 'center' | 'end' | 'baseline' | 'stretch'>,
			default: 'start',
		},
		justify: {
			type: String as PropType<'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'>,
			default: 'start',
		},
	},

	setup(props, { slots }) {
		return () => (
			<div
				class={`flex w-full   ${SPACES_X[props.spaceX]} ${SPACES_Y[props.spaceY]} ${
					props.dir === 'col' ? 'flex-col' : 'flex-row'
				} 
                ${props.dir==='col-reverse' && 'flex-col-reverse'}
                ${props.dir==='row-reverse' && 'flex-row-reverse'}
                ${props.wrap ? 'flex-wrap' : 'flex-nowrap'} 
                ${JUSTIFY[props.justify]}
                ${ALIGHMENTS[props.align]}
                `}
			>
				{slots.default && slots.default()}
			</div>
		);
	},
});
