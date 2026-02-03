import React, { useEffect, useState } from "react";
import { scatterplot_svg_func } from "../functions/svg-func";

const ScatterplotComponent = ({
  idi,
  changeIdiValue,
  kValue,
  changeKValue,
}) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:5000/table_loading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idi,
        }),
      })
        .then((response) => response.json())

        .catch((error) => {
          // Handle any errors
        }),
      fetch("http://127.0.0.1:5000/scatter_plot_matrix").then((response) =>
        response.json()
      ),
    ])
      .then(([tableLoadingData, scatterPlotMatrixData]) => {
        const extractedFeatures = tableLoadingData.data
          .slice(0, 4)
          .map((item) => item.Attr);
        setFeatures(extractedFeatures);

        scatterplot_svg_func(
          scatterPlotMatrixData.data,
          extractedFeatures,
          idi
        );
      })
      .catch((error) => console.error("Error:", error));
  }, [idi]);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Scatter Plot</h3>
      <svg id="svg_id2"> </svg>
    </div>
  );
};
export default ScatterplotComponent;
