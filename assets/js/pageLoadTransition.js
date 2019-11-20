const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const logoSpans = [...document.querySelectorAll(".logo-span")];
const social = document.querySelector(".social");
const socialLinkText = [...document.querySelectorAll(".social-link-text")];
const socialLinkIcons = [...document.querySelectorAll(".social-link-icons")];

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(function() {
    menu.classList.add("loaded-menu");
    logo.classList.add("loaded-logo");
    social.classList.add("loaded-social");
  }, 400);
});

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
  console.log(scrollpos);
});
