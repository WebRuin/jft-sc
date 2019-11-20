import styled from "styled-components";

const Logo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  left: 50%;
  top: 1rem;
  width: 100px;
  opacity: 0.25;
  margin-top: 100px;
  margin-left: -42px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  text-transform: uppercase;
  transition: all 0.75s ease-in;

  span {
    font-size: 2rem;
    margin-top: 0.25rem;
    margin-left: 0.75rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 360px) {
    order: -1;
    width: ${({ theme }) => theme.spacing.fullWidth};
    margin-left: 0 !important;
    position: initial !important;

    .logo-span-fadeIn {
      margin-left: 0.3rem !important;
      font-size: 1.2rem !important;
    }
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    order: -1;
    width: ${({ theme }) => theme.spacing.fullWidth};
    margin-left: 0 !important;
    position: initial !important;

    .logo-span-fadeIn {
      margin-left: 0.3rem !important;
      font-size: 1.2rem !important;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    order: -1;
    width: ${({ theme }) => theme.spacing.fullWidth};
    margin-left: 0 !important;
    position: initial !important;

    .logo-span-fadeIn {
      margin-left: 0.3rem !important;
      font-size: 1.2rem !important;
    }
  }
`;

export default Logo;
