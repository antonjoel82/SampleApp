import React from "react";
import VideoFrame from "../VideoFrame/VideoFrame";
import Box from "@material-ui/core/Box";

import "./VideoGrid.css";

class VideoGrid extends React.Component {
	render() {
			return (
				<Box className="vid-grid" m={2}>
					{
						this.props.videos.map((vFrame, i) => {
							return (
								<VideoFrame  
									src={vFrame.src} 
									width={vFrame.width} 
									height={vFrame.height} 
								/>
							)
						})
					}
				</Box>
			);
	}
}
export default VideoGrid