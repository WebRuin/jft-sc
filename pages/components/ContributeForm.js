import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const validateEmail = value => {
  let errorMessage;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

const FormBody = styled.section`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};

  p,
  h2 {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  h2 {
    margin-bottom: 0;
    font-size: 2.5rem;
  }

  form {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    border-radius: 10px;
    justify-content: space-between;

    p {
      font-size: 1.75rem;
      margin-top: 0;
    }

    .field {
      width: 48%;
      padding: 0 10px;
      border-radius: 7px;
      margin-bottom: 1rem;
      background: ${({ theme }) => theme.colors.text10};

      input {
        font-size: 1.75rem;
        color: ${({ theme }) => theme.colors.highlight};

        &::after {
          border-bottom: 1px solid ${({ theme }) =>
            theme.colors.highlight} !important;
        }
        &::after:hover {
          border-bottom: 2px solid ${({ theme }) =>
            theme.colors.highlight} !important;
        }
      }
    }
    .field {
      border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    }

    .text-field {
      width: 100%;
      padding: 10px;
      font-size: 1.75rem;
      border-radius: 7px;
      color: ${({ theme }) => theme.colors.highlight};
      background: ${({ theme }) => theme.colors.text10};
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    }

    .title {
      width: 100%;
    }
  }

  button {
    border: none;
    margin: 1.5rem 0 0 0;
    padding: 0.5rem 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    display: inline-block;
    border: 3px solid ${({ theme }) => theme.colors.highlight};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.secondaryDark};
    font-size: 2rem;

    /* .MuiButton-label {
      z-index: 10000;
      position: relative;
    }

    .MuiTouchRipple-root {
      background: ${({ theme }) => theme.colors.secondaryDark};

      &::hover {
        background: ${({ theme }) => theme.colors.highlight};
        border: 2px solid ${({ theme }) => theme.colors.secondaryDark};
      } */
    }
  }
`;

const Fieldset = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
      <FormBody>
        <h2>Submit an idea for a page.</h2>
        <Form>
          <p>Have fun! Sarcasm is welcomed 😅!</p>
          <Fieldset>
            <Field
              className="field"
              type="name"
              name="firstName"
              placeholder="What is you first name?"
              component={TextField}
            />
            <Field
              className="field"
              validate={validateEmail}
              type="email"
              name="email"
              placeholder="What is you email?"
              component={TextField}
            />
          </Fieldset>
          <Field
            className="field title"
            type="title"
            name="title"
            placeholder="A funny title..."
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
      </FormBody>
    )}
  </Formik>
);

export default ContributeForm;
