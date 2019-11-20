import styled from "styled-components";

const Nav = styled.nav`
  height: 140px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  .nav-fadeIn {
    top: 0;
    height: 80px !important;
    background: ${({ theme }) => theme.colors.secondaryDark75};
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    width: 402px !important;
    margin-top: 0 !important;
    font-size: 1.25rem !important;
    margin-left: -201px !important;
  }

  @media screen and (max-width: 360px) {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: space-around;

    .nav-fadeIn {
      top: 0;
      height: 25px !important;
    }
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: space-around;

    .nav-fadeIn {
      top: 0;
      height: 25px !important;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: space-around;

    .nav-fadeIn {
      top: 0;
      height: 25px !important;
    }
  }
`;

export default Nav;
