import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop";

const FileList = () => {
  const [state, setState] = useState({
    files: [
      "nice.pdf",
      "verycool.jpg",
      "amazing.png",
      "goodstuff.mp3",
      "thankyou.doc"
    ]
  });

  const handleDrop = files => {
    let fileList = this.state.files;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      fileList.push(files[i].name);
    }
    setState({ files: fileList });
  };

  return (
    <DragAndDrop handleDrop={handleDrop}>
      <div style={{ height: 300, width: 250 }}>
        {state.files.map((file, i) => (
          <div key={i}>{file}</div>
        ))}
      </div>
    </DragAndDrop>
  );
};

export default FileList;
