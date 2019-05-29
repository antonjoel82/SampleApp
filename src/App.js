import React from 'react';
import VideoGrid from './Components/VideoGrid/VideoGrid';
import StickyBar from './Components/StickyBar/StickyBar';

const videos = [
  // { src : "https://www.youtube.com/embed/xlwL_vSsIPI" },
  { src : "" },
  { src : "" },
  { src : "" },
  { src : "" },
  { src : "" },
  { src : "" },
  { src : "" },
  { src : "" },
  { src : "" }
]


function App() {
  return (
    <div>
      <StickyBar />
      <VideoGrid videos={videos} />
    </div>
  );
}

export default App;
