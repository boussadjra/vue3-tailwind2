import { keyable } from '@/@types/global';
import { colorable, shaped, sizeable, variantable } from '@/mixins';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'w-radio',
	props: {
		modelValue: [String, Number],
		value: [String, Number],
		label: {
			type: String,
			default: '',
		},
		variant: {
			type: String as PropType<'default' | 'danger' | 'success' | 'warning'>,
			default: 'default',
		},
	},

	mixins: [colorable, sizeable, variantable],

	data() {
		return {
			inputSizes: {
				sm: 'h-4 w-4',
				md: 'h-6 w-6',
				lg: 'h-8 w-8',
			},
			checkMarkSizes: {
				sm: 'h-3 w-3',
				md: 'h-4 w-4',
				lg: 'h-6 w-6',
			},
		};
	},
	created() {
		console.log('--------------------')
		console.log(this.$attrs)
		console.log('--------------------')
	},
	computed: {
		customColors(): keyable {
			return { ...this.colors, default: 'text-blue-600' };
		},
		classes() {
			let classes: Array<string> = [
				'   flex flex-shrink-0 form-radio  justify-center items-center mr-2 focus-within:border-blue-500',
			];
			classes.push(this.inputSizes[this.size]);

			classes = [...classes, this.customColors[this.variant]];

			return classes;
		},
	
	},

	render() {
		return (
			<div class="space-y-2 ">
				<label class="flex justify-start items-center ">
					<div style={{ padding: '1px' }}>
						<input
							type="radio"
							class={this.classes}
							// class="opacity-0 absolute"
							{...this.$attrs}
							value={this.value}
							onInput={($event: Event) =>
								this.$emit('update:modelValue', ($event.target as HTMLInputElement).value)
							}
						/>
					
					</div>
					<div class="select-none">{this.$slots.label ? this.$slots.label() : this.label}</div>
				</label>
			</div>
		);
	},
});
