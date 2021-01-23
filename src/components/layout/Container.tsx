import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({

	props: {
		maxWidth: {
			type: String as PropType<'max-w-none' |'max-w-xs' | 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl'  | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl'  >,
			default: 'w-full',
		},
	},

	setup(props, { slots }) {


    
		return () => (
			<div class={ `${props.maxWidth} p-4`}>

				{slots.default && slots.default()}
			</div>
		);
	},
});
