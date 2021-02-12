const IconListBulleted = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<circle cx="7" cy="9" r="3" />
			<circle cx="7" cy="23" r="3" />
			<path d="M16 22H30V24H16zM16 8H30V10H16z" />
		</svg>
	);
};
export default IconListBulleted;
