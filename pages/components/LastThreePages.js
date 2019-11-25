import React from "react";
import styled from "styled-components";

import PageSummary from "./PageSummary";

const lastThreePages = props => (
  <StyledLastThreePages>
    <h2>Last Three Pages</h2>
    <PageSummary author="Tim Smith" date="09/24/2019" />
    <PageSummary author="Helen Schaffer" date="10/24/2019" />
    <PageSummary author="Eric Rigor" date="11/24/2019" />
  </StyledLastThreePages>
);

const StyledLastThreePages = styled.section`
  width: 30%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text};

  p,
  h2 {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1.75rem;
  }
`;

export default lastThreePages;
