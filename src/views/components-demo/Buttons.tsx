import { defineComponent, ref } from 'vue';
import WGrid from '@/components/layout/Grid';
import DemoRow from '@/components/util/DemoRow';
import WButton from '@/components/actions/WButton';
import IconClose from '@/components/icons/IconClose';

import IconInformation from '@/components/icons/IconInformation';
import IconWarning from '@/components/icons/IconWarning';
import IconCheckmark from '@/components/icons/IconCheckmark';

import IconSearch from '@/components/icons/IconSearch';
import IconAdd from '@/components/icons/IconAdd';


export default defineComponent({
	name: 'buttons',
	components: {
		WGrid,
		DemoRow,
		'w-btn': WButton,
	},
	setup() {
		const variants = ref<Array<string>>(['default', 'primary', 'danger', 'success', 'warning']);
		const sizes = ref<Array<string>>(['xs', 'sm', 'md', 'lg']);
		const shapes = ref<Array<string>>(['rounded', 'rounded-full', 'rounded-none']);

		return () => (
			<w-grid gapY="16">
				<div class="sub-title-1">Buttons :</div>
				<demo-row
					v-slots={{
						title: () => 'Default buttons shape:',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{variants.value.map((variant) => {
									return <w-btn variant={variant}>{variant}</w-btn>;
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Buttons with smooth colors:',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{variants.value.map((variant) => {
									return (
										<w-btn smooth variant={variant}>
											{variant}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Outlined buttons :',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{variants.value.map((variant) => {
									return (
										<w-btn outlined variant={variant}>
											{variant}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Buttons with different sizes :',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{sizes.value.map((size) => {
									return (
										<w-btn variant="primary" size={size}>
											{size}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Buttons with different shapes :',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{shapes.value.map((shape) => {
									return (
										<w-btn variant="primary" shape={shape}>
											{shape}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Text buttons :',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{variants.value.map((variant) => {
									return (
										<w-btn text variant={variant}>
											{variant}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Raised buttons :',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{variants.value.map((variant) => {
									return (
										<w-btn raised variant={variant}>
											{variant}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
				<demo-row
					v-slots={{
						title: () => 'Only icons:',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
					
								<w-btn circle >
									<IconSearch />
								</w-btn>
								<w-btn circle variant="info">
									<IconInformation />
								</w-btn>
								<w-btn circle variant="warning">
									<IconWarning />
								</w-btn>
								<w-btn circle variant="success">
									<IconCheckmark />
								</w-btn>
								<w-btn circle variant="danger">
									<IconClose />
								</w-btn>
								<w-btn circle variant="primary">
									<IconAdd />
								</w-btn>
							</w-grid>
						),
					}}
				/>

<demo-row
					v-slots={{
						title: () => 'Block buttons :',
						default: () => (
							<w-grid gap="4" cols-xs="2" cols-md="3" cols-lg="5">
								{variants.value.map((variant) => {
									return (
										<w-btn full variant={variant}>
											{variant}
										</w-btn>
									);
								})}
							</w-grid>
						),
					}}
				/>
			</w-grid>
		);
	},
});
