import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const FormModal = ({ children }) =>
  ReactDOM.createPortal(
    <StyledFormModal>{children}</StyledFormModal>,
    document.querySelector(".header-root")
  );

const StyledFormModal = styled.div`
  position: fixed;
  top: 12px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondaryDark75};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export default FormModal;
