import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";

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

    button {
      border: none;
      width: 100%;
      margin: 1.5rem 0 0 0;
      padding: 0.5rem 0.75rem;
      color: ${({ theme }) => theme.colors.text};
      display: inline-block;
      border: 3px solid ${({ theme }) => theme.colors.highlight};
      border-radius: 7px;
      background: ${({ theme }) => theme.colors.secondaryDark};
      font-size: 2rem;
    }
    button:hover {
      color: ${({ theme }) => theme.colors.secondaryDark};
      background: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

const Fieldset = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Fields = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;

  .field {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.text10};
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.highlight};
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  }

  .error {
    color: #f00;
    margin-top: -5px;
    margin-bottom: 1.5rem;
  }

  .title {
    width: 100%;
  }
`;

const FieldTextArea = styled.div`
  width: 100%;

  .field {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.text10};
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.highlight};
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  }

  .error {
    color: #f00;
    margin-top: -5px;
    margin-bottom: 1.5rem;
  }

  .title {
    width: 100%;
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
`;

const ContributeForm = () => {
  const { handleSubmit, register, errors } = useForm();

  async function onSubmit(values) {
    try {
      const data = await postData("/api/put", values);
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    async function postData(url = "", data = {}) {
      const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
      });

      return await res.json(); // parses JSON response into native JavaScript object
    }

    document.getElementById("contributeForm").reset();
  }

  return (
    <FormBody>
      <h2>Submit an idea for a page.</h2>
      <form onSubmit={handleSubmit(onSubmit)} id="contributeForm">
        <p>Have fun! Sarcasm is welcomed 😅!</p>
        <Fieldset>
          <Fields>
            <input
              className="field"
              name="name"
              placeholder="What is you first and last initial?"
              ref={register({
                required: "Required"
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="error">This is required</span>
            )}
          </Fields>
          <Fields>
            <input
              className="field"
              name="email"
              placeholder="What is you email?"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="error">This is required</span>
            )}
          </Fields>
        </Fieldset>
        <FieldTextArea>
          <input
            className="field title"
            name="title"
            placeholder="A funny title..."
            ref={register({
              required: "Required"
            })}
          />
          {errors.title && errors.title.type === "required" && (
            <span className="error">This is required</span>
          )}
          <textarea
            rows="10"
            className="text-field"
            placeholder="Write your submittion here"
            name="body"
            ref={register({
              required: "Required"
            })}
          />
          {errors.body && errors.body.type === "required" && (
            <span className="error">This is required</span>
          )}
        </FieldTextArea>
        <button type="submit">Submit</button>
      </form>
    </FormBody>
  );
};

export default ContributeForm;
