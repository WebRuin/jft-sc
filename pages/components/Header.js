import React from "react";
import styled from "styled-components";

// Components
import TopBar from "../../public/Topbar";

const HeaderText = styled.section`
  color: ${({ theme }) => theme.colors.white};
  width: 80vw;

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }

  button {
    border: none;
    margin: 1.5rem 0 0 0;
    padding: 0.5rem 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    display: inline-block;
    border: 3px solid ${({ theme }) => theme.colors.highlight};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.secondaryDark75};
    font-size: 2rem;
  }
`;

const HeaderBody = styled.section`
  height: ${({ theme }) => theme.spacing.fullHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderStyle = styled.header`
  height: ${({ theme }) => theme.spacing.fullHeight};
  background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(#0a023bb9, rgba(51, 51, 51, 0.85), transparent),
    url("book-stack-books-bookshop-264635.jpg");
  background-size: cover;
`;

const Header = () => (
  <>
    <TopBar />
    <HeaderStyle>
      <HeaderBody>
        <HeaderText>
          <h2>
            Welcome to the <span>Just For Tomorrow</span> project.
          </h2>
          <h3>
            We invite you to contribute to a future book loosely based on
            Narcotics Anonymous' "Just for Today" and Alcoholics Anonymous' "A
            Day at a Time"
          </h3>
          <button aria-label="Contribute A Page">Contribute A Page</button>
        </HeaderText>
      </HeaderBody>
    </HeaderStyle>
  </>
);

export default Header;
