import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NightMode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
  <StyledPlaylist>
    <NightMode nightMode={nightMode} nightModeCallback={nightModeCallback} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;
