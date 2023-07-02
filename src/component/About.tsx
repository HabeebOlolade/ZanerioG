import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <div>
      <div className="about">
        <h1> About us</h1>
        <p>
          We have experienced and higly qualified consultants that are ready to
          provide professional and quality consultancy services all over the
          Nordic region. We have registsered office in Oslo, Norway, and also
          presence in Helsinki, Finland and Copenhagen, Denmark. This enable us
          to meet the needs of our partners all over the Nordic region. We offer
          consultancy service in specialized areas within Networks,
          application/software developmet, software/hardware testing and
          automation, Energy, Communication, ERP, Project Management etc.
          Contact us today to know more about our services or to know how to be
          a part of us.{" "}
        </p>
      </div>
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
