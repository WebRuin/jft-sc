import React, { Component } from "react";
import styled from "styled-components";
// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = props => (
  <FooterStyled>
    <h3>Find us on:</h3>
    <section className="buttonBox">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/justfortomorrowbook"
            target="_blank"
          >
            <span className="lable">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="label">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="label">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/WebRuin/just-for-tomorrow"
            target="_blank"
          >
            <span className="label">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        </li>
      </ul>
    </section>
    <section className="footer-bottom">
      <span>Just for Tomorrow &reg; {new Date().getFullYear()}</span>
    </section>
  </FooterStyled>
);

const FooterStyled = styled.footer`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};

  h3 {
    font-size: ${({ theme }) => theme.textSize.h3};
    color: ${({ theme }) => theme.colors.text};
    padding: 1rem 2rem;
  }

  .buttonBox {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    height: 100%;
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
  }

  ul li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25%;
  }

  ul li a {
    width: 100%;
    color: #f2d8c2;
    font-weight: bolder;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul li a:hover {
    color: #2b3240;
    background: #f2b66d;
  }

  ul li a span:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background: #f2b66d;
  }

  ul li a span {
    width: inherit;
    height: 100px;
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: normal;
  }

  .footer-bottom {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.75rem;
    text-align: center;
    padding: 1rem;
  }

  @media screen and (max-width: 360px) {
    height: auto;

    ul {
      flex-wrap: wrap;
    }

    ul li {
      width: 50%;
    }

    ul li a {
      font-size: 0.8rem;
    }

    ul li a span {
      padding: 1.25rem;
    }
  }
`;

export default Footer;
