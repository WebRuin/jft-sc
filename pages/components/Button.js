import Link from "next/link";
import styled from "styled-components";

const Button = props => (
  <StyledA>
    <Link href={props.page}>
      <a aria-label="Contribute A Page">{props.children}</a>
    </Link>
  </StyledA>
);

export default Button;

const StyledA = styled.div`
  border: none;
  margin: 1.5rem 0 0 0;
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondaryDark45};
  border-top: 2px solid ${({ theme }) => theme.colors.highlight};
  border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
  font-size: 2rem;

  a {
    display: block;
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  a:hover {
    margin-left: -2px;
    padding: 1rem 1.5rem;
    border-left: 2px solid ${({ theme }) => theme.colors.highlight};
    border-right: 2px solid ${({ theme }) => theme.colors.highlight};
  }
`;
