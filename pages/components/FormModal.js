import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const FormModal = ({ children }) =>
  ReactDOM.createPortal(
    <StyledFormModal>{children}</StyledFormModal>,
    document.querySelector(".header-root")
  );

const StyledFormModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60vw;
  margin-left: -30vw;
  margin-top: -191.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 0 2rem 2rem 2rem;
  background: ${({ theme }) => theme.colors.secondaryDark};
  border: 2px solid ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.text};

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    p,
    h2 {
      display: inline-block;
      width: 100%;
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 0;
    }

    p {
      font-size: 1.75rem;
    }

    .field {
      width: 48%;
      background: ${({ theme }) => theme.colors.text10};
      margin-bottom: 1rem;

      input {
        font-size: 1.75rem;
        color: ${({ theme }) => theme.colors.highlight};

        &::after {
          border-bottom: 1px solid ${({ theme }) => theme.colors.highlight} !important;
        }
        &::after:hover {
          border-bottom: 2px solid ${({ theme }) => theme.colors.highlight} !important;
        }
      }
    }
    .field {
      border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    }

    .text-field {
      width: 100%;
      font-size: 1.75rem;
      color: ${({ theme }) => theme.colors.highlight};
      background: ${({ theme }) => theme.colors.text10};
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
  }

  .close {
    position: absolute;
    top: -5px;
    right: 8px;
  }
`;

export default FormModal;
