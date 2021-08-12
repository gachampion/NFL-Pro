import React from "react";
import streamPlaceholder from "./footage/loading_stream_1_cbs.png"
import streamContent from "./footage/nflpro-livecast_compressed2.mp4"

import "./VideoStream.css";

export default function VideoStream() {
  return (
    <div className="videoPlayer">
    <link href="https://vjs.zencdn.net/7.11.4/video-js.css" rel="stylesheet" />
      <video
            id="my-video"
            class="video-js"
            preload="auto"
            controls
            width="1382"
            height="777"
            poster={streamPlaceholder}
        >
            <source src={streamContent} type="video/mp4" />
        </video>
    </div>
  );
}