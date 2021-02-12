import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, { slots }) {
		return () => (
			<svg height="512" viewBox="0 0 700 512" width="700" version="1.1" preserveAspectRatio="xMidYMid">
				<linearGradient id="a" gradientUnits="objectBoundingBox" x2="1" y1="-.889" y2="1.889">
					<stop offset="0" stop-color="#2383ae" />
					<stop offset="1" stop-color="#6dd7b9" />
				</linearGradient>
				<clipPath id="b">
					<path d="m0 0h700v512h-700z" class="text-navy-blue-500 dark:text-navy-blue-400 fill-current" />
				</clipPath>
				<g clip-path="url(#b)">
					<path
						d="m179.9 157.625q34.5-138.109 172.607-138.109c138.109 0 155.338 103.532 224.373 120.821q69.055 17.278 120.82-51.766-34.5 138.079-172.586 138.089c-138.114 0-155.338-103.533-224.373-120.821q-69.054-17.278-120.821 51.766zm-172.606 207.144q34.557-138.109 172.606-138.109c138.109 0 155.338 103.532 224.373 120.821q69.054 17.278 120.821-51.766-34.494 138.108-172.606 138.108c-138.109 0-155.338-103.532-224.373-120.821q-69.055-17.278-120.821 51.767z"
						class="text-navy-blue-500 dark:text-navy-blue-400 fill-current"
						fill-rule="evenodd"
						transform="translate(2.299 29.484)"
					/>
				</g>
			</svg>
		);
	},
});
