import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { tourState } from "../../Constant/Constant";
import "../componentStyle.css";

const TourComponent = ({ selectedState }) => {
  const openLocation = (location) => {
    window.open(location, '_blank').focus()
  }
  return (
    <div className="tourPlace">
      {tourState[selectedState].state.map((place) => {
        return(
            <Card sx={{ maxWidth: 400, margin: 5 }}>
              <CardMedia sx={{ height: 140 }} image={place.image} title={place.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {place.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {place.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => openLocation(place.location)}>See Location</Button>
              </CardActions>
            </Card>)
      })}
    </div>
  );
};

export default TourComponent;
