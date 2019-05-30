import React from "react";
import Box from '@material-ui/core/Box';

import "../../utils.css";

const VideoFrame = ({src, width, height}) => {
	// let calcWidth = width;
	// let calcHeight = height;

	// console.log(`BEFORE | Width: ${calcWidth}, Height: ${calcHeight}`)

	// if (!calcWidth && !calcHeight) {
	// 	calcWidth = VIDEO_FRAME.DEF_WIDTH;
	// 	calcHeight = VIDEO_FRAME.DEF_HEIGHT;
	// } else if (!calcWidth && calcHeight) {
	// 	//If the supplied dimension is smaller than the minimum, set the dimension to the minimum
	// 	calcHeight = calcHeight < VIDEO_FRAME.MIN_HEIGHT ? VIDEO_FRAME.MIN_HEIGHT : calcHeight;
	// 	calcWidth = Math.round(VIDEO_FRAME.DEF_WH_RATIO * calcHeight);
	// } else if (!calcHeight && calcWidth) {
	// 	//If the supplied dimension is smaller than the minimum, set the dimension to the minimum
	// 	calcWidth = calcWidth < VIDEO_FRAME.MIN_WIDTH ? VIDEO_FRAME.MIN_WIDTH : calcWidth;
	// 	calcHeight = Math.round(VIDEO_FRAME.DEF_HW_RATIO * calcWidth);
	// } else {
	// 	//Both dimensions are already defined explicitly
	// }

	// console.log(`AFTER | Width: ${calcWidth}, Height: ${calcHeight}`)

	return (
		<Box className="resp-container">
			<iframe
				className="resp-iframe"
				title="TODO"
				// width={calcWidth}
				// height={calcHeight}
				src={src}
				frameborder="5" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				allowfullscreen="true">
			</iframe>
		</Box>
	);
}
export default VideoFrame;