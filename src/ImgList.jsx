import React from "react";
import ImgTile from "./ImgTile";

const ImgList = () => {
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
