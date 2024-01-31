const Icon = ({ sprite, iconId, color = '#9197B3', width, height}) => {
	return (
		<svg width={width} height={height} >
			<use  xlinkHref={`${sprite}#${iconId}`}></use>
		</svg>
	);
};
export default Icon;
