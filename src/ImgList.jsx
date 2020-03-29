import React from "react";
import ImgTile from "./ImgTile";

const ImgList = () => {
  //get ImageList from global state

  return (
    <div className="ImgList">
      <ImgTile imgSrc="https://source.unsplash.com/KXkgOigCqj0" />
      <ImgTile imgSrc="https://source.unsplash.com/KXkgOigCqj0" />
      <ImgTile />
      <ImgTile />
      <ImgTile />
    </div>
  );
};

export default ImgList;
