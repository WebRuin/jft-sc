import React from "react";
import styled from "styled-components";

import PageLink from "./PageLink";

const PageSummary = props => (
  <StyledPageSummary>
    <PageLink title={props.title} id={props.id} />
    <div className="meta-box">
      <span className="name">{props.name}</span>
      <span className="date">{props.readableDate}</span>
    </div>
    <p>{props.body}</p>
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
    text-align: left !important;
    font-size: 1.25rem !important;
  }

  .meta-box {
    display: flex;
    margin-top: -15px;
    margin-bottom: 0.75rem;
    justify-content: space-between;
  }
`;

export default PageSummary;
