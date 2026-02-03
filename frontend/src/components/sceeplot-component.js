import React, { useEffect, useState } from "react";
import { scree_svg_func } from "../functions/svg-func";

const SceeplotComponent = ({ idi, changeIdiValue, kValue, changeKValue }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/calculate_PCA")
      .then((response) => response.json())
      .then((pcaData) => {
        const cumData = JSON.parse(JSON.stringify(pcaData));
        scree_svg_func(pcaData.data, cumData.data, idi, changeIdiValue);
      });
  }, [idi, changeIdiValue]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Scree Plot</h3>
      <svg id="svg_id"></svg>
    </div>
  );
};

export default SceeplotComponent;
