import styled from "styled-components";

const HeaderStyle = styled.header`
  height: ${({ theme }) => theme.spacing.fullHeight};
  background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
      ${({ theme }) => theme.secondaryDark75},
      rgba(51, 51, 51, 0.85),
      transparent
    ),
    url("/assets/img/book-stack-books-bookshop-264635.jpg");
  background-size: cover;
`;

export default HeaderStyle;
