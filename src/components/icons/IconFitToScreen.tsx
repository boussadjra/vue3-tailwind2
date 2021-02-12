const IconFitToScreen = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M22 16L24 16 24 8 16 8 16 10 22 10 22 16zM8 24L16 24 16 22 10 22 10 16 8 16 8 24z" />
			<path d="M26,28H6a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,6,4H26a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,26,28ZM6,6V26H26.0012L26,6Z" />
		</svg>
	);
};
export default IconFitToScreen;
