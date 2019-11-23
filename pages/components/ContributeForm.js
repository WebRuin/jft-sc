import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, FieldSet } from "formik-material-ui";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const validateEmail = value => {
  let errorMessage;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

const ContributeForm = () => (
  <Formik
    initialValues={{ firstName: "", email: "", submission: "" }}
    validate={value => {
      // Your client-side validation logic
    }}
    onSubmit={(values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      // Call your API
    }}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <h2>Submit an idea for a page.</h2>
        <p>Have fun! Sarcasm is welcomed 😅</p>
        <Field
          className="field"
          type="name"
          name="firstName"
          component={TextField}
        />
        <Field
          className="field"
          validate={validateEmail}
          type="email"
          name="email"
          component={TextField}
        />
        <Field
          type="text"
          name="submission"
          component={() => (
            <textarea
              rows="10"
              className="text-field"
              placeholder="Write your submittion here"
            />
          )}
        />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default ContributeForm;
