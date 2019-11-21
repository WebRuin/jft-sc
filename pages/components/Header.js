import React from "react";
import styled from "styled-components";

// Components
import TopBar from "./Topbar";
import ToggleContent from "./ToggleContent";
import FormModal from "./FormModal";

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
            <button aria-label="Contribute A Page">Contribute A Page</button>
            <p>
              Click to reveal a secret:
              <ToggleContent
                toggle={show => <button onClick={show}>Open</button>}
                content={hide => (
                  <FormModal>
                    There is no spoon...
                    <button onClick={hide}>Close</button>
                  </FormModal>
                )}
              />
            </p>
          </HeaderText>
        </HeaderBody>
      </HeaderStyle>
    </>
  );
};

export default Header;
