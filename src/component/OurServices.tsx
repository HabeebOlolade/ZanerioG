import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ minWidth: 300, flexGrow: 1 }}>
        <div className="ourservice">
          <Card className="card">
            <CardContent>
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
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/AboutUs')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className="card">
            <CardContent>
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
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/AboutUs')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className="card">
            <CardContent>
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
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/AboutUs')}>
                Learn More
              </Button>
            </CardActions>
          </Card>
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
