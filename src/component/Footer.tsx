import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          The content of this website is copyright protected and belongs to
          Zanerio.co
        </p>
      </div>
      <div className="icon">
        <p>follow Us</p>
        <IconButton>
          <FacebookIcon color="secondary" />
        </IconButton>
        <IconButton>
          <TwitterIcon color="secondary" />
        </IconButton>
        <IconButton>
          <InstagramIcon color="secondary" />
        </IconButton>
        <IconButton>
          <LinkedInIcon color="secondary" />
        </IconButton>
      </div>
      <div></div>
    </div>
  );
}
