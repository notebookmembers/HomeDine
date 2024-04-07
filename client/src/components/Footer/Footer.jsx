import "./Footer.css";
import insta from "/social-logo/instagram.svg";
import tweet from "/social-logo/twitter-x.svg";
import fb from "/social-logo/facebook-f.svg";

function Footer() {
  return (
    <body>
      <footer>
        <div className="foot">
          <div className="foot_top">
            <div className="foot_top_links">
              <h2>Need Help?</h2>
              <ul>
                <li>
                  <a href="#">Visit Help Centre</a>
                </li>
                <li>
                  <a href="#">Share Feedback</a>
                </li>
              </ul>
            </div>
            <div className="foot_top_links">
              <h2>View in Website</h2>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>
            <div className="foot_top_links">
              <h2>Social Media</h2>
              <ul className="social_media_logo">
                <li>
                  <a href="#">
                    <img src={insta} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={tweet} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={fb} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="foot_bottom">
            <div className="foot_bottom_flex">
              <div className="foot_bottom_left">
                <div className="foot_copyright">
                  © 2024 HomeDine. All rights reserved.
                </div>
                <div className="terms_list">
                  <ul>
                    <li>
                      <a href="#">Terms of use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="foot_bottom_right">
                <a href="#">HomeDine</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default Footer;
