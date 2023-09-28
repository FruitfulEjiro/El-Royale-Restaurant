/** @format */
("use strict");
let close = true; // Flag to track toggle states

// Hamburger Menu
const hamburger = document.querySelector(".hamburger-icon");
const navBar = document.querySelector(".navbar-menu");

const toggle = () => {
  if (close) {
    navBar.style.transform = "translateX(0%)";
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
    hamburger.style.opacity = "1";
  } else {
    navBar.style.transform = "translateX(100%)";
    hamburger.classList.add("fa-bars");
    hamburger.classList.remove("fa-xmark");
    hamburger.style.opacity = "1";
  }
  close = !close;
};

const logo = document.querySelector(".navLogo");
const navbar = document.getElementById("header");
const home = document.querySelector(".item1");
const about = document.querySelector(".item2");
const menu = document.querySelector(".item3");
const gallery = document.querySelector(".item4");
const blog = document.querySelector(".item5");
const shop = document.querySelector(".item6");
const reservation = document.querySelector(".item7");
const toggle1 = document.querySelector(".toggle1");

const mediaQuery = window.matchMedia("(min-width: 899.9px)");

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        navbar.classList.remove("scrolled");
        home.classList.remove("scrolled-color");
        about.classList.remove("scrolled-color");
        menu.classList.remove("scrolled-color");
        gallery.classList.remove("scrolled-color");
        blog.classList.remove("scrolled-color");
        shop.classList.remove("scrolled-color");
        reservation.classList.remove("scrolled-button");
        logo.src = "./Images/logo-light.png";
        toggle1.classList.remove("scrolled-color");
      } else {
        navbar.classList.add("scrolled");
        home.classList.add("scrolled-color");
        about.classList.add("scrolled-color");
        menu.classList.add("scrolled-color");
        gallery.classList.add("scrolled-color");
        blog.classList.add("scrolled-color");
        shop.classList.add("scrolled-color");
        reservation.classList.add("scrolled-button");
        logo.src = "./Images/logo-dark.png";
        toggle1.classList.add("scrolled-color");
      }
    });
  } else {
    // Remove the scroll event listener when the media query doesn't match
    window.removeEventListener("scroll", () => {});
  }
}

// Initial call to handle media change based on the current window size
handleMediaChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addListener(handleMediaChange);

document.addEventListener("DOMContentLoaded", handleMediaChange);

// Side Menu
const sidemenu = document.querySelector(".side-menu");
const sidearrow = document.querySelector(".toggle-arrow");
const sideMenu = () => {
  if (close) {
    sidemenu.style.transform = "translateX(0%)";
  } else {
    sidemenu.style.transform = "translateX(100%)";
  }
  close = !close;
};

// Reservation Form

const guestList = document.querySelector(".guest-list");
const dateList = document.querySelector(".date-list");
const timeList = document.querySelector(".time-list");

// Guest Toggle Function
const guest = () => {
  if (close) {
    // If it's closed, open it
    guestList.style.height = "7rem";
    document.querySelector(".guesttoggler").style.transform = "rotate(90deg)";
  } else {
    // If it's open, close it and reset styles
    guestList.style.height = "0";
    document.querySelector(".guesttoggler").style.transform = "rotate(0deg)";
  }
  close = !close; // Toggle the flag
};
const guest2 = () => {
  const text = document.querySelector(".guest-item-2").textContent;
  document.querySelector(".guest-inputfield").textContent = text;
};
const guest3 = () => {
  const text = document.querySelector(".guest-item-3").textContent;
  document.querySelector(".guest-inputfield").textContent = text;
};
const guest4 = () => {
  const text = document.querySelector(".guest-item-4").textContent;
  document.querySelector(".guest-inputfield").textContent = text;
};
const guest5 = () => {
  const text = document.querySelector(".guest-item-5").textContent;
  document.querySelector(".guest-inputfield").textContent = text;
};

// Date Toggle Function
const date = () => {
  if (close) {
    // If it's closed, open it
    dateList.style.height = "10.5rem";
    document.querySelector(".datetoggler").style.transform = "rotate(90deg)";
  } else {
    // If it's open, close it and reset styles
    dateList.style.height = "0";
    document.querySelector(".datetoggler").style.transform = "rotate(0deg)";
  }

  close = !close; // Toggle the flag
};
const date1 = () => {
  const text = document.querySelector(".date-item-1").textContent;
  document.querySelector(".date-inputfield").textContent = text;
};
const date2 = () => {
  const text = document.querySelector(".date-item-2").textContent;
  document.querySelector(".date-inputfield").textContent = text;
};
const date3 = () => {
  const text = document.querySelector(".date-item-3").textContent;
  document.querySelector(".date-inputfield").textContent = text;
};
const date4 = () => {
  const text = document.querySelector(".date-item-4").textContent;
  document.querySelector(".date-inputfield").textContent = text;
};
const date5 = () => {
  const text = document.querySelector(".date-item-5").textContent;
  document.querySelector(".date-inputfield").textContent = text;
};
const date6 = () => {
  const text = document.querySelector(".date-item-6").textContent;
  document.querySelector(".date-inputfield").textContent = text;
};

// Time Toggle Function
const time = () => {
  if (close) {
    // If it's closed, open it
    timeList.style.height = "10.5rem";
    document.querySelector(".timetoggler").style.transform = "rotate(90deg)";
  } else {
    // If it's open, close it and reset styles
    timeList.style.height = "0";
    document.querySelector(".timetoggler").style.transform = "rotate(0deg)";
  }

  close = !close; // Toggle the flag
};
const time1 = () => {
  const text = document.querySelector(".time-item-1").textContent;
  document.querySelector(".time-inputfield").textContent = text;
};
const time2 = () => {
  const text = document.querySelector(".time-item-2").textContent;
  document.querySelector(".time-inputfield").textContent = text;
};
const time3 = () => {
  const text = document.querySelector(".time-item-3").textContent;
  document.querySelector(".time-inputfield").textContent = text;
};
const time4 = () => {
  const text = document.querySelector(".time-item-4").textContent;
  document.querySelector(".time-inputfield").textContent = text;
};
const time5 = () => {
  const text = document.querySelector(".time-item-5").textContent;
  document.querySelector(".time-inputfield").textContent = text;
};
const time6 = () => {
  const text = document.querySelector(".time-item-6").textContent;
  document.querySelector(".time-inputfield").textContent = text;
};
