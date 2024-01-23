import "./Login.css";
import Input from "../Input";

function Login() {
  return (
    <div>
      <div className="bg_img"></div>
      <div className="outer">
        <div className="inner">
          <div className="login_info">
            <form action="/login" method="post">
              <div className="log_info_details">
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
                <div className="log_details">
                  <Input
                    input_cls="log_email"
                    input_label="Email"
                    input_type="email"
                    input_placeholder="Enter your email"
                  />
                  <Input
                    input_cls="log_pass"
                    input_label="Password"
                    input_type="password"
                    input_placeholder="Set your password"
                  />

                  <div className="show_pass">
                    <label for="show_pass">
                      <a href="404.html">Forgot Password?</a>
                    </label>
                  </div>

                  <Input
                    input_cls="submit"
                    input_type="submit"
                    input_value="Login"
                  />

                  <div className="have_an_acc">
                    <p>
                      Don't have An Account?<a href="404.html">Signup</a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="login_img"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
