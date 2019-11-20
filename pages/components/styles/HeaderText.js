import styled from "styled-components";

const HeaderText = styled.section`
  color: ${({ theme }) => theme.colors.white};
  width: 80vw;

  h3 {
    margin-top: 1.25rem;
  }

  button {
    border: none;
    margin: 1.5rem 0 0 0;
    padding: 0.5rem 0.75rem;
    color: ${({ theme }) => theme.color.text};
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.colors.highlight};
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.secondaryDark75};
    font-size: 1.2rem;
  }
`;

export default HeaderText;
