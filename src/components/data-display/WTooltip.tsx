import { computed, defineComponent, onMounted, onUnmounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({
	props: {
		position: {
			type: String as PropType<'top' | 'left' | 'bottom' | 'right'>,
			default: 'top',
		},
		trigger: {
			type: String as PropType<'mouseover' | 'focus' | 'click'>,
			default: 'mouseover',
		},
	},

	setup(props, { slots }) {
		const tooltip = ref<HTMLDivElement | null>(null);
		const show = ref(false);
		onMounted(() => {
			tooltip.value?.addEventListener(props.trigger, () => {
				switch (props.trigger) {
					case 'click':
						show.value = !show.value;
						break;
					case 'mouseover':
						show.value = true;
						delay();
						break;
					case 'focus':
						show.value = true;
						delay();
						break;

					default:
						break;
				}
			});
		});
		const positions = {
			left: {
				margin: `-mr-48`,
				translate: `-translate-x-full`,
				outerFlex: 'items-center justify-start',
				innerFlex: 'items-center',
				arrow: 'flex-grow-0 transform  -rotate-90',
			},
			top: {
				margin: ``,
				translate: `-translate-y-full`,
				outerFlex: ' items-start justify-center',
				innerFlex: 'flex-col items-center justify-center',
				arrow: '',
			},
			right: {
				margin: ``,
				translate: `translate-x-full`,
				outerFlex: 'items-center justify-end',
				innerFlex: 'flex-row-reverse items-center',
				arrow: 'flex-grow-0 transform rotate-90',
			},
			bottom: {
				margin: `-mx-24`,
				translate: `translate-y-full`,
				outerFlex: 'items-end justify-center',
				innerFlex: 'flex-col-reverse  items-center',
				arrow: ' transform rotate-180',
			},
		};

		onUnmounted(() => {
			tooltip.value?.removeEventListener(props.trigger, () => {});
		});

		function delay() {
			setTimeout(() => {
				show.value = false;
			}, 1000);
		}

		return () => (
			<div class={`relative group max-w-max`} ref={tooltip}>
				{slots.trigger && slots.trigger()}

				{show.value && (
					<span
						class={`absolute flex  ${
							positions[props.position].outerFlex
						} inset-0 pointer-events-none whitespace-nowrap ${positions[props.position].margin}   z-10 `}
					>
						<span
							class={`flex  font-normal ${
								positions[props.position].innerFlex
							} text-white transition transform ${
								positions[props.position].translate
							}    scale-90 group-hover:scale-100`}
						>
							<span class="bg-black-900 dark:bg-black-100 dark:text-black-800 leading-relaxed text-sm px-3 py-2 rounded-md shadow-md">
								{slots.default && slots.default()}
							</span>
							<svg
								class={`text-gray-900 dark:text-black-100 h-2 w-2 ${positions[props.position].arrow}`}
								viewBox="0 0 255 255"
							>
								<polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
							</svg>
						</span>
					</span>
				)}
			</div>
		);
	},
});
