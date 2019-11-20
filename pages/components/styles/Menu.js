import styled from "styled-components";

const Menu = styled.ul`
  opacity: 1 !important;
  margin-top: 0px !important;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 180px;
  opacity: 0.25;
  transition: all 1.2s ease-in;

  li {
    height: inherit;
    display: inline-block;
  }

  li a {
    align-items: center;
    display: flex;
    justify-content: center;
    height: inherit;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    padding: 0 0.5rem;
    font-size: ${({ theme }) => theme.textSize.linkTextSize};
    font-family: "Raleway", sans-serif;
  }

  @media screen and (max-width: 360px) {
    li {
      margin-right: 0 !important;
    }

    li a {
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.textSize.smallDeviceTextSize};
    }
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    li a {
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.textSize.smallDeviceTextSize};
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    li a {
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.textSize.smallDeviceTextSize};
    }
  }
`;

export default Menu;
