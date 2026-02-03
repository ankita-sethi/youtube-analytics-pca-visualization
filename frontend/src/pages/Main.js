import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import ClusterComponent from "../components/cluster-component";
import ScatterplotComponent from "../components/scatterplot-component";
import SceeplotComponent from "../components/sceeplot-component";
import BiplotComponent from "../components/biplot-component";

const Main = () => {
  const [steps, setSteps] = useState(0);
  const [idi, setIdi] = useState("");
  const [kValue, setKValue] = useState("");
  const changeKValue = (value) => {
    setKValue(value);
  };
  const changeIdiValue = (value) => {
    setIdi(value);
  };
  const handleNext = () => {
    setSteps((prevSteps) => prevSteps + 1);
  };

  const handlePrev = () => {
    setSteps((prevSteps) => Math.max(prevSteps - 1, 0));
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ backgroundColor: "red" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Youtube Data Analysis</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          marginRight: "20px",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={steps === 0}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={steps === 1}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>

      <div style={{ height: "90vh" }}>
        {steps === 0 && (
          <div>
            <SceeplotComponent
              idi={idi}
              changeIdiValue={changeIdiValue}
              kValue={kValue}
              changeKValue={changeKValue}
            />
            <ScatterplotComponent
              idi={idi}
              changeIdiValue={changeIdiValue}
              kValue={kValue}
              changeKValue={changeKValue}
            />
          </div>
        )}
        {steps === 1 && (
          <div>
            <BiplotComponent
              idi={idi}
              changeIdiValue={changeIdiValue}
              kValue={kValue}
              changeKValue={changeKValue}
            />

            <ClusterComponent
              idi={idi}
              changeIdiValue={changeIdiValue}
              kValue={kValue}
              changeKValue={changeKValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;
