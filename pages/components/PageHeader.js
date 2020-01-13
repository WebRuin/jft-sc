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
  margin-top: -60px;
  height: ${({ theme }) => theme.spacing.pageHeaderHeight};
  background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
      ${({ theme }) => theme.colors.secondaryDark45},
      ${({ theme }) => theme.colors.secondaryDark25}
    ),
    url("https://res.cloudinary.com/tihos/image/upload/q_auto/v1574168819/just-for-tomorrow/book-stack-books-bookshop-264635.jpg");
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
