import { ISelectOption, ItemType, keyable } from '@/@types/global';
import { colorable, inputable, sizeable, variantable } from '@/mixins';
import { defineComponent, PropType, withModifiers } from 'vue';
import IconChevronDown from '../icons/IconChevronDown';
import WInput from './WInput';

export default defineComponent({
	name: 'w-select',
	props: {
		items: {
			type: Array as PropType<Array<ItemType>>,

			default: [],
		},
		itemLabel: { type: String, default: 'label' },
		itemValue: { type: String, default: 'value' },
	},
	mixins: [inputable, colorable, sizeable, variantable],

	data() {
		return {
			showDropdown: false,
			selected: { label: '' },
		};
	},
	components: {
		WInput,
	},
	mounted() {

	},
	methods: {
		selectOption(option: ISelectOption) {
			console.log('------option-------------');
			console.log(option);
			console.log('--------------------');
			this.selected = option;

			if (this.isPrimArray) {
				this.$emit('update:modelValue', option.value);
			} else if (this.isObjectArray) {
				this.$emit('update:modelValue', this.getItem(option));
			}
			this.showDropdown = false;
		},
		getItem(option: ISelectOption) {
			return this.items.find((item) => {
				return (item as keyable)[this.itemValue] === option.value;
			});
		},
	},
	computed: {
		options(): Array<ISelectOption> | undefined {
			if (this.isPrimArray) {
				return this.items.map(
					(_item: ItemType): ISelectOption => {
						return {
							label: _item.toString(),
							value: _item,
						};
					}
				);
			} else if (this.isObjectArray) {
				return this.items.map((_item: ItemType) => {
					return {
						label: (_item as keyable)[this.itemLabel],
						value: (_item as keyable)[this.itemValue],
					};
				});
			} else {
				throw 'The items structure is incorrect !';
			}
		},
		isPrimArray(): boolean {
			return this.items.every((item: ItemType) => ['number', 'string'].includes(typeof item));
		},
		isObjectArray(): boolean {
			return this.items.every((item: ItemType) => typeof item === 'object');
		},
	},

	render() {
		return (
			<div class="relative">
				<w-input
					v-model={this.selected.label}
					placeholder={this.placeholder}
					label={this.label}
					v-slots={{
						append: () => (
							<span onClick={() => (this.showDropdown = true)}>
								<IconChevronDown
									className={`${
										this.showDropdown
											? 'transform rotate-180 cursor-pointer dark:text-white'
											: 'cursor-pointer dark:text-white'
									}`}
								/>
							</span>
						),
					}}
					onFocus={() => (this.showDropdown = true)}
					// onBlur={() => (this.showDropdown = false)}
				></w-input>

				<div
					class={[
						{ 'h-auto max-h-52 ring-1': this.showDropdown },
						'absolute w-full z-50 shadow-md overflow-hidden bg-white dark:bg-black-600 ring-0 ring-gray-200 dark:ring-black-500 rounded  h-0 transition-all duration-200',
					]}
				>
					<ul class="">
						{this.options?.map((option: ISelectOption, i) => {
							return (
								<li
									class="py-2 pl-3 hover:bg-gray-200 dark:hover:bg-black-500 cursor-pointer"
									key={i}
									onClick={withModifiers(() => this.selectOption(option), ['stop'])}
									// onClick={()=>console.log("option ",option)}
								>
									{/* {this.$slots.item ? this.$slots.item(this.getItem(option)) : option.label} */}
									{this.$slots.item ? this.$slots.item(this.getItem(option)) : option.label}
								
							
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	},
});
