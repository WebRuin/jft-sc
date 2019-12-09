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

const Topbar = () => (
  <Headroom>
    <Nav className="nav">
      <Menu className="menu">
        <li>
          <Link href="/">
            <a>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="svg-inline--fa fa-home fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
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
