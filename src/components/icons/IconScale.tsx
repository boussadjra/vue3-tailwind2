const IconScale = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M13,17H7a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V19A2,2,0,0,0,13,17ZM7,25V19h6v6Z" />
			<path d="M19,21v2h6a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2H11A2,2,0,0,0,9,7v6h2V7H25V21" />
		</svg>
	);
};
export default IconScale;
