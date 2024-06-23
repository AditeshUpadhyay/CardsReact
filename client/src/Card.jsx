import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import './Card.css';

export default function CardComponent({ number, name }) {
  return (
    <Card className="card" >
      <CardContent className="card-content">
        <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
          Card Number: {number}
        </Typography>
        <Typography variant="h5" component="h2">
            <br />
            <br />
          {name}
        </Typography>
        {/* <Typography style={{ marginBottom: 12 }} color="textSecondary">
          Keep Motivated
        </Typography>
        <Typography variant="body2" component="p">
          Stay Happy 
        </Typography> */}
      </CardContent>
      
    </Card>
  );
}
