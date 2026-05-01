import React from "react";


const Gradient = ({ width, height, margin}) => {

  return (
    <div
      className={` mt-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-200 dark:from-purple-900 dark:to-purple-600 ${width} ${height} ${margin}`}
      role="presentation"
    />
  );
};

export default Gradient;