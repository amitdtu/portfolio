import React, { Component } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { emailJS } from "../config";
import checkedIcon from "./../assets/images/checked.svg";
import Title from "./Title";

class ContactMe extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isLoading: false,
  };

  handleSubmit = async (e) => {
    this.setState({ isLoading: true });
    const { name, email, message } = this.state;
    e.preventDefault();

    // validate
    if (name === "") alert("name is empty");
    if (email === "") alert("email is empty");
    if (message === "") alert("message is empty");
    if (name === "" || email === "" || message === "") return;

    let templateParams = {
      name: name,
      email: email,
      message: message,
    };
    try {
      const res = await emailjs.send(
        emailJS.serviceId,
        emailJS.templateId,
        templateParams,
        emailJS.userId
      );

      if (res.status === 200) {
        this.setState({ name: "", email: "", message: "" });
      }
      toast.success("Form has been submitted. I will contact you shortly.");
      this.setState({ isLoading: false });
    } catch (err) {
      console.log(err);
      if (err.status === 400)
        toast.error("Something went wrong. Please try again.");
      this.setState({ isLoading: false });
      console.log(err);
    }

    // console.log(e.target);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isDark } = this.props;
    const { name, email, message, isLoading } = this.state;
    return (
      <section className=" body-font relative">
        <ToastContainer
          position="top-center"
          transition={Slide}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Contact Me
            </h1> */}
            <Title subtitle="">
              Contact Me
              <p class="lg:w-2/3 font-normal mx-auto leading-relaxed text-base">
                Always want to work with awesome ideas.
              </p>
            </Title>

            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p> */}
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <input
                    required
                    value={name}
                    name="name"
                    onChange={this.handleInputChange}
                    className={`w-full  rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 ${
                      isDark ? "bg-black placeholder-white::placeholder" : ""
                    }`}
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="p-2 w-1/2">
                  <input
                    required
                    value={email}
                    onChange={this.handleInputChange}
                    name="email"
                    className={`w-full  rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 ${
                      isDark ? "bg-black placeholder-white::placeholder" : ""
                    }`}
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="p-2 w-full">
                  <textarea
                    required
                    value={message}
                    onChange={this.handleInputChange}
                    name="message"
                    className={`w-full  rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block ${
                      isDark ? "bg-black placeholder-white::placeholder" : ""
                    }`}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="p-2 w-full text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    ) : null}
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactMe;
