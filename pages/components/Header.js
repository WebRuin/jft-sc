import React from "react";
import styled from "styled-components";
import Link from "next/link";

// Components
import TopBar from "./Topbar";
import Button from "./Button";

//
// Styles
//

const HeaderText = styled.section`
  color: ${({ theme }) => theme.colors.white};
  width: 80vw;

  h2 {
    font-size: ${({ theme }) => theme.textSize.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.textSize.h3};
    margin-top: 1.25rem;
  }

  .button {
    border: none;
    margin: 1.5rem 0 0 0;
    padding: 0.5rem 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    display: inline-block;
    border: 3px solid ${({ theme }) => theme.colors.highlight};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.secondaryDark75};
    font-size: 2rem;
    text-decoration: none;
  }
`;

const HeaderBody = styled.section`
  height: ${({ theme }) => theme.spacing.fullHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderStyle = styled.header`
  margin-top: -60px;
  height: ${({ theme }) => theme.spacing.fullHeight};
  background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
      ${({ theme }) => theme.colors.secondaryDark45},
      ${({ theme }) => theme.colors.secondaryDark25}
    ),
    url("https://res.cloudinary.com/tihos/image/upload/q_auto/v1574168832/just-for-tomorrow/blur-books-close-up-159866.jpg");
  background-size: cover;
`;

const Header = () => {
  return (
    <>
      <TopBar />
      <HeaderStyle>
        <HeaderBody className="header-root">
          <HeaderText>
            <h2>
              Welcome to the <span>Just For Tomorrow</span> project.
            </h2>
            <h3>
              We invite you to contribute to a future book loosely based on
              Narcotics Anonymous' "Just for Today" and Alcoholics Anonymous' "A
              Day at a Time"
            </h3>
            <Button page="/contribute">Contribute A Page</Button>
          </HeaderText>
        </HeaderBody>
      </HeaderStyle>
    </>
  );
};

export default Header;
