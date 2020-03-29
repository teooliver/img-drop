import React, { useRef, useState } from "react";

const DragAndDrop = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setDragCounter(dragCounter + 1);
    }
  };
  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
    setIsDragging(false);
    if (dragCounter > 0) return;
    setIsDragging(false);
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    console.log("Uploading file");
  };

  return (
    <div
      onDragEnter={e => handleDragIn(e)}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDrag(e)}
      onDragExit={e => handleDragOut(e)}
      style={{ display: "inline-block", position: "relative" }}
    >
      {isDragging && (
        <div
          style={{
            border: "4px dashed grey",
            backgroundColor: "rgba(255,255,255,.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              left: 0,
              textAlign: "center",
              color: "grey",
              fontSize: 36
            }}
          >
            <div>Drop Here ::</div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DragAndDrop;
