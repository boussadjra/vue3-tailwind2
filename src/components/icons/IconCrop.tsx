const IconCrop = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M25,20H23V9H12V7H23a2,2,0,0,1,2,2Z" />
			<path d="M9,23V2H7V7H2V9H7V23a2,2,0,0,0,2,2H23v5h2V25h5V23Z" />
		</svg>
	);
};
export default IconCrop;
