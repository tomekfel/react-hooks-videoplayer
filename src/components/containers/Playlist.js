import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItem from "../PlaylistItem";
import NightMode from "../Nightmode";

const Playlist = props => (
  <>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItem />
  </>
);

export default Playlist;
