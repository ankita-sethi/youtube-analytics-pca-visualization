import React, { useEffect } from "react";
import { biplot_svg_func } from "../functions/svg-func";

const BiplotComponent = ({ idi, changeIdiValue, kValue, changeKValue }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/bi_plot")
      .then((response) => response.json())
      .then((response) => {
        const output = JSON.parse(JSON.stringify(response));
        biplot_svg_func(output.data, output.components);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Bi Plot</h3>
      <svg id="svg_id3"></svg>
    </div>
  );
};
export default BiplotComponent;
