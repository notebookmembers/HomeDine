import "./Signup.css";
import Input from "../../components/Input";

function Signup() {
  return (
    <div>
      <div className="bg_img"></div>
      <div className="outer">
        <div className="inner">
          <div className="signup_img"></div>
          <div className="signup_info">
            <form action="/signup" method="post">
              <div className="sign_info_details">
                <h1 className="hd_name">
                  Home<span>Dine</span>
                </h1>
                <h2 className="get_srted">Get Started</h2>
                <button type="button" className="btn-tag google">
                  <div className="btn-name">Continue with Google</div>
                </button>
                <br />
                <button type="button" className="btn-tag fb">
                  <div className="btn-name ">Continue with Facebook</div>
                </button>
                <p style={{ textAlign: "center", margin: "5px" }}>OR</p>
                <div className="sign_details">
                  <Input
                    input_cls="sign_name"
                    input_label="Name"
                    input_type="text"
                    input_placeholder="Enter your name"
                  />
                  <Input
                    input_cls="sign_email"
                    input_label="Email"
                    input_type="email"
                    input_placeholder="Enter your email"
                  />
                  <Input
                    input_cls="sign_pass"
                    input_label="Password"
                    input_type="password"
                    input_placeholder="Set your password"
                  />

                  <div className="show_pass">
                    <input type="checkbox" />
                    <label htmlFor="show_pass">Show Password</label>
                  </div>

                  <Input
                    input_cls="submit"
                    input_type="submit"
                    input_value="submit"
                  />

                  <div className="have_an_acc">
                    <p>
                      Have An Account?<a href="404.html">Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
