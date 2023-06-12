import FacebookIcon from "resource/facebook-f.svg";
import TwitterIcon from "resource/twitter.svg";
import InstagramIcon from "resource/instagram.svg";
import Logo from "resource/F4HLogo.png";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="fit4happiness-logo" className="main-logo" />
      </div>
      <div className="address">
        <p>123 Nguyen Van Linh St.</p>
        <p>D7, Hochiminh city</p>
        <br />
        <p>(123) 456-7890</p>
        <p>hello@fit4happiness.com</p>
        <p>@fit4happiness</p>
      </div>
      <div className="social">
        <h3>STAY CONNECTED</h3>
        <div>
          <img src={FacebookIcon} alt="facebookIcon" className="icon" />
          <img src={TwitterIcon} alt="twitterIcon" className="icon" />
          <img src={InstagramIcon} alt="instagramIcon" className="icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
