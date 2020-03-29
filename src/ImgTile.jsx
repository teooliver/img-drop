import React from "react";

const ImgTile = ({ imgSrc }) => {
  return (
    <div className="ImgTile">
      {imgSrc ? (
        <img src={imgSrc} alt="" />
      ) : (
        <div className="palceholder"></div>
      )}
    </div>
  );
};

export default ImgTile;
