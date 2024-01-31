const Icon = ({ sprite, iconId, color = '#9197B3', width, height,styles}) => {
	return (
		<svg width={width} height={height} style={styles}>
			<use  xlinkHref={`${sprite}#${iconId}`}></use>
		</svg>
	);
};
export default Icon;
