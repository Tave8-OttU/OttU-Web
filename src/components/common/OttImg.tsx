import * as React from 'react';
interface props {
	ott: string;
	width?: string;
	height?: string;
	isWhite?: boolean;
}
const OttImg: React.FC<props> = ({ ott, width, height, isWhite }) => {
	return (
		<img
			src={
				isWhite && (ott === 'Disney+' || ott === 'Wavve')
					? require('../../assets/images/' + ott + '_white.png').default
					: require('../../assets/images/' + ott + '.png').default
			}
			width={width}
			height={height}
		/>
	);
};
export default React.memo(OttImg);
