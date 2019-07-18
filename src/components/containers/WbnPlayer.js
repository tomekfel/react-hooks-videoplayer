import React from "react";
import Video from "../Video";
import Playlist from "../containers/Playlist";

const WbnPlayer = props => {
  return (
    <React.Fragment>
      <Video />
      <Playlist />
    </React.Fragment>
  );
};

export default WbnPlayer;
