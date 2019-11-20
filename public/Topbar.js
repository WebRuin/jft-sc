import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const NavWrapper = styled.section`
  position: fixed;
  width: ${({ theme }) => theme.spacing.fullWidth};
`;

class Topbar extends Component {
  componentDidMount() {
    const nav = document.querySelector(".nav");
    const menu = document.querySelector(".menu");
    const logo = document.querySelector(".logo");
    const logoSpans = [...document.querySelectorAll(".logo-span")];
    const social = document.querySelector(".social");
    const socialLinkText = [...document.querySelectorAll(".social-link-text")];
    const socialLinkIcons = [
      ...document.querySelectorAll(".social-link-icons")
    ];

    menu.classList.add("loaded-menu");
    logo.classList.add("loaded-logo");
    social.classList.add("loaded-social");

    let scrollpos = window.scrollY;

    const add_class_on_scroll = () => {
      nav.classList.add("nav-fadeIn");
      logo.classList.add("logo-fadeIn");
      logoSpans.forEach(function(span) {
        span.classList.add("logo-span-fadeIn");
      });
      socialLinkText.forEach(function(text) {
        if (text.classList.contains("show")) {
          text.classList.remove("show");
        }
        text.classList.add("hide");
      });
      socialLinkIcons.forEach(function(icon) {
        icon.classList.add("show");
      });
    };
    const remove_class_on_scroll = () => {
      nav.classList.remove("nav-fadeIn");
      logo.classList.remove("logo-fadeIn");
      logoSpans.forEach(function(span) {
        span.classList.remove("logo-span-fadeIn");
      });
      socialLinkText.forEach(function(text) {
        text.classList.remove("hide");
        text.classList.add("show");
      });
      socialLinkIcons.forEach(function(icon) {
        icon.classList.remove("show");
        icon.classList.add("hide");
      });
    };

    window.addEventListener("scroll", function() {
      scrollpos = window.scrollY;
      if (scrollpos >= 140) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });
  }
  render() {
    return (
      <NavWrapper>
        <Nav className="nav">
          <Menu className="menu">
            <li>
              <Link href="/home">
                <a>
                  <span>Home</span>
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
                <span className="social-link-text">Facebook</span>
                <span className="social-link-icons">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <span className="social-link-text">Twitter</span>
                <span className="social-link-icons">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
            </li>
            <li>
              <a href="#instagram">
                <span className="social-link-text">Instagram</span>
                <span className="social-link-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </a>
            </li>
          </Social>
        </Nav>
      </NavWrapper>
    );
  }
}

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

  .loaded-logo {
    margin-top: 0 !important;
    opacity: 1 !important;
  }

  span {
    font-size: 2.55rem;
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

const Menu = styled.ul`
  margin-top: 180px;
  opacity: 0.25;
  padding-left: 20px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 180px;
  opacity: 0.25;
  transition: all 1.2s ease-in;

  .loaded-menu {
    opacity: 1 !important;
    margin-top: 0px !important;
  }

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

const Nav = styled.nav`
  height: 140px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};

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

const Social = styled.ul`
  margin-top: 180px;
  opacity: 0.25;
  padding: 0 30px 0 0;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 180px;
  opacity: 0.25;
  transition: all 1.2s ease-in;

  .loaded-social {
    opacity: 1 !important;
    margin-top: 0px !important;
  }

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

    .hide {
      display: none !important;
    }

    .show {
      display: inline-block !important;
    }
  }

  .social-link-icons {
    display: none;
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
