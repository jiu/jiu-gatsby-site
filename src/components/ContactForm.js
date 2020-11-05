import React from "react";

const ContactForm = () => {
  const config = {
    cors: "https://cors-anywhere.herokuapp.com/", // <optional> doesn't display the cors error
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScFxrYw7dzvbFN7cXtUC4oE6Lw4r1oRc6XW4Zlye8UFDwYFEg/formResponse",
  };

  const Input = ({ name, label, doChange, type = "text" }) => {
    return (
      <label htmlFor={name} className="form-label">
        {label}
        <input type={type} id={name} name={name} onChange={doChange} />
      </label>
    );
  };
  /**
    I think this way to organize the 'inputs' is more clearest.
    The 'id' property is the input field in your google form,
    for example the 'name' field, if you inpect you Google form this should looks like 'entry.2005620554'
    */
  state = {
    inputs: {
      name: { id: 2005620554, value: "" },
      email: { id: 1045781291, value: "" },
      phone: { id: 1166974658, value: null },
      message: { id: 839337160, value: "" },
    },
  };

  doSubmit = async (e) => {
    e.preventDefault();

    const { inputs } = this.state;
    const formData = new FormData();

    _.map(inputs, (item) => {
      formData.append(`entry.${item.id}`, item.value);
    });

    await axios({
      url: `${config.cors}${config.formUrl}`,
      method: "post",
      data: formData,
      responseType: "json",
    })
      .then(() => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const { inputs } = this.state;

    inputs[name].value = value;

    this.setState({
      inputs,
    });
  };

  return (
    <form name="contact-form" onSubmit={this.doSubmit}>
      <fieldset>
        <legend>Contact Form</legend>

        <Input name="name" label="Name" doChange={this.handleChange} />
        <Input
          name="email"
          label="Email"
          doChange={this.handleChange}
          type="email"
        />
        <Input name="phone" label="Phone number" doChange={this.handleChange} />

        <label htmlFor="message" className="form-label">
          Message
          <textarea id="message" name="message" onChange={this.handleChange} />
        </label>

        <p>
          <button className="btn">Send message</button>
        </p>
      </fieldset>
    </form>
  );
};

export default ContactForm;
