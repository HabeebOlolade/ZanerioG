import React from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function Contact() {
  return (
    <div>
      <div className="Address">
        <h1>Contact</h1>
        <p>
          <i>Address: </i> Tellgrensgatan 11B, 411 04 Göteborg Sweden
        </p>
        <p>
          <a
            href="https://www.google.com/maps/place/Tellgrensgatan+11B,+414+60+G%C3%B6teborg/@57.6942262,11.9219862,17z/data=!3m1!4b1!4m6!3m5!1s0x464ff336755c6e33:0xf3ab0693df460cff!8m2!3d57.6942262!4d11.9245611!16s%2Fg%2F11c5jcrm8j?entry=ttu"
            target="_blank"
          >
            <AddLocationIcon /> Location
          </a>
        </p>
        <p>
          <i>Email:</i>
          <a href="mailto:info@zanerio.com">info@zanerio.com</a>
        </p>
        <p>
          <i>Phone:</i>+(46) 73 405 33 46
        </p>
      </div>
    </div>
  );
}
