import React from "react";
import ImgList from "./ImgList";
import ImgDrop from "./ImgDrop";
import QuestionHeader from "./QuestionHeader";

const ImgUploadComponent = () => {
  return (
    <div>
      <QuestionHeader
        title="This is the upload component"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />

      <ImgDrop />
      <ImgList />
    </div>
  );
};

export default ImgUploadComponent;
