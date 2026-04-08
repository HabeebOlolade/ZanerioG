import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Grid() {
  return (
    <div>
      <section className="two">
        <div className="flex">
          <div className="box1">
            <h3> Professional IT Consulting</h3>
            <p>
              Professional IT Consulting We offer consultancy services for every
              need of our clients and prospective clients in the IT sector. Join
              us to become one of us
            </p>
            <Button component={Link} to="/AboutUs" className="btn">
              Learn More...
            </Button>
          </div>
          <div className="backthree">
            <div className="backcovertwo"></div>
          </div>
        </div>
        <div className="flex">
          <div className="backfour">
            <div className="backcoverthree"></div>
          </div>
          <div className="box1">
            <h3>Software Development</h3>
            <p>
              We offer both frontend and backend solutions. Our development team
              based in Uzgorrod, Ukraine and Oslo, Norway ensures we deliver
              just the right solution for you.
            </p>
            <Button component={Link} to="/AboutUs" className="btn">
              Learn More...
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
