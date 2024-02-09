import React from "react";

const Posts = (props) => {
  return (
    <div>
      Posts
      <div>Year : {props.match.params.year}</div>
      <div>Month: {props.match.params.month}</div>
    </div>
  );
};

export default Posts;
