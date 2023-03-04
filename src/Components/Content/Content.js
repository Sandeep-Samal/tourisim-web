import { Tab, Tabs } from "@mui/material";
import React from "react";
import "../componentStyle.css";
import TourComponent from "./TourComponent";

const Content = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="content">
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{background:"bisque"}}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={0} label="Odisha" />
        <Tab value={1} label="Karnataka" />
        <Tab value={2} label="Tamilnadu" />
      </Tabs>
      <TourComponent selectedState={value} />
    </div>
  );
};

export default Content;
