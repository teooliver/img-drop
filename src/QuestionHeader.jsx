import React from "react";

const QuestionHeader = ({ title, description }) => {
  return (
    <div className="QuestionHeader">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default QuestionHeader;
