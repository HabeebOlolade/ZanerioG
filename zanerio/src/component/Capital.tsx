import img3 from "../img/mailchimp-lsdA8QpWN_A-unsplash.jpg";
import img4 from "../img/mailchimp-lAx4E6Gl06s-unsplash.jpg";

export default function Capital() {
  return (
    <div className="capital">
      <div className="cap1">
        <p>
          Part of our business focus is Seed/Capital Funding for start-ups and
          small companies hoping to expand their operations. We provide
          short-term and in some cases, long-term financing to businesses in the
          IT industry, and in other industries that we find interesting to us.
          We are currently in partnetship with companies within the IT industry
          and also fitness/Lifestyle industry.{" "}
        </p>
      </div>
      <div className="cap2">
        <img src={img3} alt="image" />
      </div>
      <div className="cap3">
        <img src={img4} alt="image" />
      </div>
      <div className="cap4">
        <p>
          Zanerio apps is a part of our business that aim to bring new product
          to the public. These product are almost always in-house ideas crafted,
          designed and developed by our team of architects, developers and
          testers. We also have the possibility of working with on third-party
          app ideas by providing our expertise and resources needed to bring the
          ideas to reality. One of such app ideas is BubblePerk. BubblePerk aims
          to make ad content creation and sharing more fun and profitable for
          content creators and cheaper for advertisers. BubblePerk will be
          available on iOS and Android stores and also web.
        </p>
      </div>
    </div>
  );
}
