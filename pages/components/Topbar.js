import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import Headroom from "react-headroom";

//
// Fontawesome Fonts
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

//
// Material Design
//
import { makeStyles } from "@material-ui/core/styles";
import { blue, orange } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles(theme => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2)
    }
  },
  iconHover: {
    "&:hover": {
      color: orange[800]
    }
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Topbar = () => (
  <Headroom>
    <Nav className="nav">
      <Menu className="menu">
        <li>
          <Link href="/">
            <a>
              <HomeIcon className="home" fontSize="large" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contribute">
            <a>
              <span>Contribute</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              <span>About</span>
            </a>
          </Link>
        </li>
      </Menu>
      <Logo className="logo">
        <span className="logo-span">Just</span>
        <span className="logo-span">For</span>
        <span className="logo-span">Tomorrow</span>
      </Logo>
      <Social className="social">
        <li>
          <a href="#facebook">
            <span className="social-link-icons">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
          </a>
        </li>
        <li>
          <a href="#twitter">
            <span className="social-link-icons">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
        </li>
        <li>
          <a href="#instagram">
            <span className="social-link-icons">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </li>
        <li>
          <a href="#github">
            <span className="social-link-icons">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        </li>
      </Social>
    </Nav>
  </Headroom>
);

const Logo = styled.div`
  position: absolute;
  left: 50%;
  width: 300px;
  height: 100%;
  margin-left: -150px;
  display: flex;
  justify-content: center;
  align-items: center
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  text-transform: uppercase;
  transition: all 0.75s ease-in;

  span {
    font-size: 2rem;    height: inherit;
    display: flex;
    align-items: center;
    margin-left: 0.75rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 360px) {
    order: -1;
    width: ${({ theme }) => theme.spacing.fullWidth};
    margin-left: 0 !important;
    position: initial !important;
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    order: -1;
    width: ${({ theme }) => theme.spacing.fullWidth};
    margin-left: 0 !important;
    position: initial !important;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    order: -1;
    width: ${({ theme }) => theme.spacing.fullWidth};
    margin-left: 0 !important;
    position: initial !important;
  }
`;

const Menu = styled.ul`
  padding-left: 20px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  .home {
    ${({ theme }) => theme.colors.text};
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

const Nav = styled.nav`
  top: 0;
  height: 60px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.secondaryDark25};
  border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};

  @media screen and (max-width: 360px) {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    height: auto !important;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Social = styled.ul`
  padding: 0 30px 0 0;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1.2s ease-in;

  li {
    height: inherit;
    display: inline-block;
    margin-right: 1rem;
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
    li {
      margin-right: 0 !important;
    }

    li a {
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.textSize.smallDeviceTextSize};
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    li {
      margin-right: 0 !important;
    }

    li a {
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.textSize.smallDeviceTextSize};
    }
  }
`;

export default Topbar;
