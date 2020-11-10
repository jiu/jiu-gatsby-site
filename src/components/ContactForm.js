import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useStaticQuery, graphql } from "gatsby";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div className="field">
        <label className="label" htmlFor={props.id || props.name}>
          {label}
        </label>
        <div className="control">
          <input
            className={`text-input input ${
              meta.touched && meta.error ? "is-danger" : ""
            }`}
            {...field}
            {...props}
          />
        </div>
        {meta.touched && meta.error ? (
          <div className="error is-danger">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};
const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div className="field">
        <label className="label" htmlFor={props.id || props.name}>
          {label}
        </label>
        <div className="control">
          <textarea
            className={`textarea ${
              meta.touched && meta.error ? "is-danger" : ""
            }`}
            {...field}
            {...props}
          />
        </div>
        {meta.touched && meta.error ? (
          <div className="error is-danger">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          apiURL
        }
      }
    }
  `);

  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          message: Yup.string()
            .min(20, "Must be 20 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, actions) => {
          axios({
            method: "POST",
            url: `${data.site.siteMetadata.apiURL}`,
            headers: { "content-type": "application/json" },
            data: values,
          })
            .then((response) => {
              actions.setSubmitting(false);
              actions.resetForm();
              handleServerResponse(
                true,
                "Thanks for the message! Keep in touch very soon. :)"
              );
            })
            .catch((error) => {
              actions.setSubmitting(false);
              handleServerResponse(false, error.response.data.error);
            });
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@google.com"
          />
          <MyTextArea
            label="message"
            name="message"
            placeholder="Write something.."
          />
          <button type="submit" className="button">
            Submit
          </button>
          {serverState && (
            <div
              className={`"notification" ${
                !serverState.ok ? "is-danger" : "is-success"
              }`}
            >
              {serverState.msg}
            </div>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
