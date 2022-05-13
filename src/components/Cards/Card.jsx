import React from "react";
import Data from "../../example_data.json";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import "./Card.css";

const Cards = () => {
  const dayOfWeekName = new Date().toLocaleString("en-US", {
    weekday: "long",
  });
  console.log(dayOfWeekName);

  
  return (
    <div className="Cards">
      <Grid container spacing={3}>
        {Data &&
          Data.map((data) => {
            return (
              <Grid item xs={4}>
                <Card>
                  <CardActionArea
                    onClick={() => {
                    
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          variant="rounded"
                          src={data.profile_image_url}
                        />
                      }
                      title={data.name}
                      subheader={data.rating}
                      sx={{
                        textAlign: "left",
                      }}
                    />
                    <div className="cardMedia">
                      <CardMedia
                        component="img"
                        height="140"
                        image={data.images[0]}
                      />
                      <CardMedia
                        component="img"
                        height="140"
                        image={data.images[1]}
                      />
                      <CardMedia
                        component="img"
                        height="140"
                        image={data.images[2]}
                      />
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Cards;
