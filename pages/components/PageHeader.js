import React from "react";
import styled from "styled-components";

// Components
import TopBar from "./Topbar";

const HeaderText = styled.section`
  color: ${({ theme }) => theme.colors.white};
  width: 80vw;

  h2 {
    font-size: ${({ theme }) => theme.textSize.h2};
  }

  p {
    font-size: ${({ theme }) => theme.textSize.h3};
    margin-top: 1.25rem;
  }
`;

const HeaderStyle = styled.header`
  height: ${({ theme }) => theme.spacing.pageHeaderHeight};
  background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(#0a023bb9, rgba(51, 51, 51, 0.85)),
    url("blur-books-close-up-159866.jpg");
  background-size: cover;
`;

const HeaderBody = styled.section`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageHeader = props => (
  <>
    <TopBar />
    <HeaderStyle>
      <HeaderBody>
        <HeaderText>
          <h2>{props.page}</h2>
          <p>
            We invite you to contribute to a future book loosely based on
            Narcotics Anonymous' "Just for Today" and Alcoholics Anonymous' "A
            Day at a Time"
          </p>
        </HeaderText>
      </HeaderBody>
    </HeaderStyle>
  </>
);

export default PageHeader;
