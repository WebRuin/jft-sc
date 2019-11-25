import React from "react";
import styled from "styled-components";

const PageSummary = props => (
  <StyledPageSummary>
    <h4>Page Title</h4>
    <div className="meta-box">
      <span className="author">{props.author}</span>
      <span className="date">{props.date}</span>
    </div>
    <p>
      Lorem ipsum dolor amet everyday carry dreamcatcher crucifix, health goth
      brunch snackwave wolf franzen 3 wolf moon.
    </p>
  </StyledPageSummary>
);

const StyledPageSummary = styled.aside`
  padding: 0.5rem;

  h4 {
    font-size: 1.5rem;
    padding-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px dotted ${({ theme }) => theme.colors.highlight};
  }

  p {
    margin-top: 0;
    text-align: left;
    font-size: 0.85rem;
  }

  .meta-box {
    display: flex;
    margin-bottom: 0.75rem;
    justify-content: space-between;
  }
`;

export default PageSummary;
