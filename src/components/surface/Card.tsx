import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({
	// name: 'card',
	props: {
		elevation: {
			type: String as PropType<'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>,
			default: 'lg',
		},
	},

	setup(props, { slots }) {
		const state = reactive({
			elevations: ['shadow-none', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'],
		});
// const cardClasses=ref('')
		const cardClasses = computed(() => {
            let classes:string= "test ";
            console.log(classes)
			let index: number = state.elevations.findIndex(el => el.split('-')[1] === props.elevation);
			let hoveredElevation = state.elevations[index + 1];
			classes+=` shadow-${props.elevation} hover:shadow-${hoveredElevation}`;
			if (slots.mediaAside) {
				classes+=' flex items-center';
            }
			return classes;
		});


     

      /*  onMounted(()=>{
            let classes:string= "test ";
            console.log(classes)
			let index: number = state.elevations.findIndex(el => el.split('-')[1] === props.elevation);
			let hoveredElevation = state.elevations[index + 1];
			classes+=` shadow-${props.elevation} hover:${hoveredElevation}`;
			if (slots.mediaAside) {
				classes+=' flex items-center';
            }
            cardClasses.value=classes
            console.log("classes ", classes)
            console.log('--------------------')
            console.log(props.elevation)
            console.log('--------------------')
        })*/
		return () => (
			<div class={`card  min-w-sm border border-gray-100 dark:border-black-600  bg-gray-50 dark:bg-black-600  transition-shadow ${cardClasses.value}`}>
				{slots.header && <div class="text-md mb-2 px-4 pt-4">{slots.header()}</div>}
				{slots.media && <div class="w-full card__media">{slots.media()}</div>}
				{slots.mediaAside && <div class="  card__media--aside ">{slots.mediaAside()}</div>}
				{slots.default && <div class="flex items-center p-4">{cardClasses} {slots.default()}</div>}
				{slots.footer && <div class="text-md pt-4 pb-4 px-4">{slots.footer()}</div>}
			</div>
		);
	},
});
