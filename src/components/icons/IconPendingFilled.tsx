const IconPendingFilled = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM8,18a2,2,0,1,1,2-2A2,2,0,0,1,8,18Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,24,18Z" />
			<circle cx="8" cy="16" r="2" fill="none" />
			<circle cx="16" cy="16" r="2" fill="none" />
			<circle cx="24" cy="16" r="2" fill="none" />
		</svg>
	);
};
export default IconPendingFilled;
