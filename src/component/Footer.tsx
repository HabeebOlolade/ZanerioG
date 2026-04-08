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
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com/zanerio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon color="secondary" />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com/zanerio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon color="secondary" />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://instagram.com/zanerio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon color="secondary" />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://linkedin.com/company/zanerio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon color="secondary" />
        </IconButton>
      </div>
      <div></div>
    </div>
  );
}
