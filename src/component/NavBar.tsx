import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import zenerio from "../img/zenero.png";
import { ROUTES } from "../constants/routes";

export default function NavBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box color="inherit" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div className="logo">
            <img src={zenerio} alt="Zanerio logo" />
          </div>

          <Box sx={{ display: { md: "flex" } }}>
            <Link to={ROUTES.HOME} style={{ textDecoration: 'none' }}>
              <Typography
                component="div"
                color={isActive(ROUTES.HOME) ? "secondary" : "primary"}
                sx={{
                  display: { sm: "block" },
                  mx: 2,
                  fontWeight: isActive(ROUTES.HOME) ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                HOME
              </Typography>
            </Link>
            <Link to={ROUTES.ABOUT} style={{ textDecoration: 'none' }}>
              <Typography
                component="div"
                color={isActive(ROUTES.ABOUT) ? "secondary" : "primary"}
                sx={{
                  display: { sm: "block" },
                  mx: 2,
                  fontWeight: isActive(ROUTES.ABOUT) ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                ABOUT US
              </Typography>
            </Link>
            <Link to={ROUTES.CONTACT} style={{ textDecoration: 'none' }}>
              <Typography
                component="div"
                color={isActive(ROUTES.CONTACT) ? "secondary" : "primary"}
                sx={{
                  display: { sm: "block" },
                  mx: 2,
                  fontWeight: isActive(ROUTES.CONTACT) ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                CONTACT
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
