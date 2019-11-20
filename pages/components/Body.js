import React from "react";
import styled from "styled-components";

const BodyStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.highlight};

  h3 {
    font-size: 2.55rem;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 1.75rem;
    padding: 1rem 4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  p span {
    margin-left: 5px;
    font-weight: bold;
  }
`;

const Body = props => (
  <BodyStyle>
    <h3 aria-label="Our Purpose">Our Purpose</h3>
    <p>
      The purpose of the
      <span aria-label="Just For Tomorrow">Just For Tomorrow</span> project is
      to gather deliberately sarcastic daily readings (ie. affirmations,
      meditations, stories, etc) that force you think "Just for Today". Our hope
      is that you will be creative and have fun with this. It is also the
      purpose of the project to find a positive solution to the negative effects
      or procrastination.
    </p>
  </BodyStyle>
);

export default Body;
