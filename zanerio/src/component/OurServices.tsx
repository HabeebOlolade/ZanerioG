import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OurServices() {
  return (
    <div>
      <Box sx={{ minWidth: 275, flexGrow: 1 }}>
        <div className="ourservice">
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Our Service
            </Typography>
            <Typography variant="h5" component="div">
              Professional IT Consulting
            </Typography>
            <Typography variant="body2">
              We offer consultancy services for every need of our clients and
              prospective clients in the IT sector. Join us to become one of us
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Our Service
            </Typography>
            <Typography variant="h5" component="div">
              Software Development
            </Typography>
            <Typography variant="body2">
              We offer both frontend and backend solutions. Our development team
              based in Uzgorrod, Ukraine and Oslo, Norway ensures we deliver
              just the right solution for you.
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Our Service
            </Typography>
            <Typography variant="h5" component="div">
              BubblePerk
            </Typography>
            <Typography variant="body2">
              BubblePerk is one of our ongoing venture that will be both mobile
              and web-based and will aim to make ad content creation, sharing
              and monetization more fun.
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Our Service
            </Typography>
            <Typography variant="h5" component="div">
              Seed Investment
            </Typography>
            <Typography variant="body2">
              We offer initial seed stage investment in new/existing ventures we
              find interesting and valuable. One of our partners is Elite
              Personal Training Center in Göteborg.
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </div>
      </Box>
      <div className="aboutSlide">
        <Slide>
          <div className="each-slide-effect">
            <div className="slice1">
              <p className="info">Zanerio</p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className="slice3">
              <Typography
                variant="h6"
                component="div"
                color="inherit"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Zanerio
              </Typography>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
