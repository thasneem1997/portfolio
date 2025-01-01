import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Import the envelope icon
import "@fortawesome/fontawesome-free/css/all.css";
import { useForm } from "react-hook-form";

function Footer() {
  const [result, setResult] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setResult("Sending....");

    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    formData.append("access_key", "6e6cc732-3c88-48e5-990e-c86dccd94ac8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setResult("Form Submitted Successfully");
    } else {
      setResult(result.message);
    }
  };
  return (
    <div>
      <footer>
        <div
          id="footer"
          className="footer-head"
          style={{ textAlign: "center" }}
        >
          <h1 style={{ marginTop: "51px", fontSize: "40px" }}>Get in Touch</h1>
        </div>

        <div className="footer-content">
          <div className="contact">
            <h1>Lets talk</h1>
            <p style={{ width: "386px" }}>
              I am actively seeking new opportunities and am available for
              immediate joining. Connect with me or call me . Let's discuss how
              I can contribute to your team
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="mailto:your.email@example.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </td>
                  <td>fathimaththasnee@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ fontSize: "20px" }}
                    ></i>{" "}
                  </td>
                  <td>Dubai UAE</td>
                </tr>
                <tr>
                  <td>
                    <i
                      className="fa-solid fa-phone"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </td>
                  <td>+971545705074</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                {...register("name", { required: "name is required" })}
                id="name"
                style={{ marginLeft: "30px" }}
                placeholder="Enter your email"
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
              <br />
              <br />
              <label htmlFor="email">Your email</label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                style={{ marginLeft: "28px" }}
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
              <br />
              <br />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="40"
                rows="4"
                style={{ marginLeft: "97px" }}
                placeholder="Enter Your Message"
                {...register("message")}
                required
              ></textarea>
              <br />
              <button
                type="submit"
                className="footer-btn "
                value="Send message"
                style={{ marginLeft: "108px", marginTop: "14px" }}
              >
                Send Message
              </button>
            </form>
            <br />
            <br />
            <h3 style={{ marginLeft: "100px" }}>{result}</h3>
          </div>
        </div>

        <hr className="footer-hr" />

        <div style={{ textAlign: "center" }}>
          <p className="copy">copyright© 2024. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
