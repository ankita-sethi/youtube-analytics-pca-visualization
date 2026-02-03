import React, { useEffect } from "react";
import { elbow_svg_func } from "../functions/svg-func";

const ClusterComponent = ({ idi, changeIdiValue, kValue, changeKValue }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/scree_elbow")
      .then((response) => response.json())
      .then((text) => {
        const eig_data = JSON.parse(JSON.stringify(text.data));
        elbow_svg_func(eig_data);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>K-means</h3>

      <svg id="svg_id4"></svg>
    </div>
  );
};
export default ClusterComponent;
