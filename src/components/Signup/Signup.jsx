import "./Signup.css";
import Input from "../Input";

function Signup() {
  return (
    <div>
      <div class="bg_img"></div>
      <div class="outer">
        <div class="inner">
          <div class="signup_img"></div>
          <div class="signup_info">
            <form action="/signup" method="post">
              <div class="sign_info_details">
                <h1 class="hd_name">
                  Home<span>Dine</span>
                </h1>
                <h2 class="get_srted">Get Started</h2>
                <div class="sign_details">
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

                  <div class="show_pass">
                    <input type="checkbox" />
                    <label for="show_pass">Show Password</label>
                  </div>

                  <Input
                    input_cls="submit"
                    input_type="submit"
                    input_value="submit"
                  />

                  <div class="have_an_acc">
                    <p>
                      Have An Acount?<a href="404.html">Login</a>
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
