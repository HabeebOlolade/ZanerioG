import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import zenerio from "../img/zenero.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box color="inherit" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div className="logo">
            <img src={zenerio} alt="" />
          </div>

          <Box sx={{ display: { md: "flex" } }}>
            <Link to="/">
              <IconButton size="large" color="inherit">
                <Typography
                  component="div"
                  color="primary"
                  sx={{ display: { sm: "block" } }}
                >
                  HOME
                </Typography>
              </IconButton>
            </Link>
            <Link to="/AboutUs">
              <IconButton size="large" color="inherit">
                <Typography
                  component="div"
                  color="primary"
                  sx={{ display: { sm: "block" } }}
                >
                  ABOUT US
                </Typography>
              </IconButton>
            </Link>
            <Link to="/Contact">
              <IconButton size="large" edge="end" color="inherit">
                <Typography
                  component="div"
                  color="primary"
                  sx={{ display: { sm: "block" } }}
                >
                  CONTACT
                </Typography>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
