import React, { Component } from "react";
import axios from "axios";

const API_PATH = "http://hello.iamjiu.eu/api/contact/index.php";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };
  render() {
    return (
      <>
        <div>
          {this.state.mailSent && <div>Thank you for contacting us.</div>}
        </div>
        <form action="#">
          <div className="field">
            <label className="label" htmlFor="fname">
              First Name
            </label>
            <div className="control">
              <input
                type="text"
                id="fname"
                name="firstname"
                className="input"
                placeholder="Your name.."
                value={this.state.fname}
                onChange={(e) => this.setState({ fname: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="lname">
              Last Name
            </label>
            <div className="control">
              <input
                type=" text"
                id="lname"
                name="lastname"
                className="input"
                placeholder="Your last name.."
                value={this.state.lname}
                onChange={(e) => this.setState({ lname: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <div className="control">
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="Your email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="message">
              Message
            </label>
            <div className="control">
              <textarea
                id="message"
                name="message"
                className="textarea"
                placeholder="Write something.."
                onChange={(e) => this.setState({ message: e.target.value })}
                value={this.state.message}
              ></textarea>
            </div>
          </div>
          <div class="control">
            <input
              type="submit"
              onClick={(e) => this.handleFormSubmit(e)}
              value="Submit"
              className="button is-primary"
            />
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
