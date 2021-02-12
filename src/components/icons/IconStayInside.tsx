const IconStayInside = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M16,20a4,4,0,1,0-4-4A4,4,0,0,0,16,20Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,16,14Z" />
			<path d="M16.6123,2.2139a1.0094,1.0094,0,0,0-1.2427,0L1,13.4194l1.2427,1.5718L4,13.6211V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM20,26H12V24a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Zm6,0H22V24a3,3,0,0,0-3-3H13a3,3,0,0,0-3,3v2H6V12.0615l10-7.79,10,7.8Z" />
		</svg>
	);
};
export default IconStayInside;
