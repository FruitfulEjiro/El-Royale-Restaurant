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

// Navbar Scroll Effect
const logo = document.querySelector(".navLogo");
const home = document.querySelector(".item1");
const about = document.querySelector(".item2");
const menu = document.querySelector(".item3");
const gallery = document.querySelector(".item4");
const blog = document.querySelector(".item5");
const shop = document.querySelector(".item6");
const reservation = document.querySelector(".item7");
const toggle1 = document.querySelector(".toggle1");
const caret1 = document.querySelector(".caret-icon1");
const caret2 = document.querySelector(".caret-icon2");

about.addEventListener("click", (e) => {
  e.preventDefault();
  if (close) {
    document.querySelector(".about-list").style.height = "16rem";
  } else {
    document.querySelector(".about-list").style.height = "0rem";
  }
  close = !close;
});

const navbar = document.getElementById("header");
const mediaQuery = window.matchMedia("(min-width: 900px)");

function handleScroll() {
  const navbar = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (mediaQuery.matches) {
    logo.src = "./Images/logo-light.png";
    // Styles for small screens
    if (scrollPosition < 100) {
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
  }
}
window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);

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

const faq1 = document.querySelector(".faq1");
const faq2 = document.querySelector(".faq2");
const faq3 = document.querySelector(".faq3");
const faq4 = document.querySelector(".faq4");
const faq5 = document.querySelector(".faq5");
const faq6 = document.querySelector(".faq6");
const faq7 = document.querySelector(".faq7");
const faq8 = document.querySelector(".faq8");

const faqText1 = document.querySelector(".faq-text1");
const faqText3 = document.querySelector(".faq-text3");
const faqText2 = document.querySelector(".faq-text2");
const faqText4 = document.querySelector(".faq-text4");
const faqText5 = document.querySelector(".faq-text5");
const faqText6 = document.querySelector(".faq-text6");
const faqText7 = document.querySelector(".faq-text7");
const faqText8 = document.querySelector(".faq-text8");

const faqIcon1 = document.querySelector(".faq-icon1");
const faqIcon2 = document.querySelector(".faq-icon2");
const faqIcon3 = document.querySelector(".faq-icon3");
const faqIcon4 = document.querySelector(".faq-icon4");
const faqIcon5 = document.querySelector(".faq-icon5");
const faqIcon6 = document.querySelector(".faq-icon6");
const faqIcon7 = document.querySelector(".faq-icon7");
const faqIcon8 = document.querySelector(".faq-icon8");

const faqBox1 = () => {
  if (close) {
    faqText1.classList.remove("hidden");
    faqIcon1.classList.remove("fa-square-plus");
    faqIcon1.classList.add("fa-square-minus");
    faq1.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq1.style.height = "5rem";
      faqText1.classList.add("hidden");
      faqIcon1.classList.remove("fa-square-minus");
      faqIcon1.classList.add("fa-square-plus");
    } else {
      faqText1.classList.add("hidden");
      faqIcon1.classList.remove("fa-square-minus");
      faqIcon1.classList.add("fa-square-plus");
      faq1.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox2 = () => {
  if (close) {
    faqText2.classList.remove("hidden");
    faqIcon2.classList.remove("fa-square-plus");
    faqIcon2.classList.add("fa-square-minus");
    faq2.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq2.style.height = "5rem";
      faqText2.classList.add("hidden");
      faqIcon2.classList.remove("fa-square-minus");
      faqIcon2.classList.add("fa-square-plus");
    } else {
      faqText2.classList.add("hidden");
      faqIcon2.classList.remove("fa-square-minus");
      faqIcon2.classList.add("fa-square-plus");
      faq2.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox3 = () => {
  if (close) {
    faqText3.classList.remove("hidden");
    faqIcon3.classList.remove("fa-square-plus");
    faqIcon3.classList.add("fa-square-minus");
    faq3.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq3.style.height = "5rem";
      faqText3.classList.add("hidden");
      faqIcon3.classList.remove("fa-square-minus");
      faqIcon3.classList.add("fa-square-plus");
    } else {
      faqText3.classList.add("hidden");
      faqIcon3.classList.remove("fa-square-minus");
      faqIcon3.classList.add("fa-square-plus");
      faq3.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox4 = () => {
  if (close) {
    faqText4.classList.remove("hidden");
    faqIcon4.classList.remove("fa-square-plus");
    faqIcon4.classList.add("fa-square-minus");
    faq4.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq4.style.height = "5rem";
      faqText4.classList.add("hidden");
      faqIcon4.classList.remove("fa-square-minus");
      faqIcon4.classList.add("fa-square-plus");
    } else {
      faqText4.classList.add("hidden");
      faqIcon4.classList.remove("fa-square-minus");
      faqIcon4.classList.add("fa-square-plus");
      faq4.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox5 = () => {
  if (close) {
    faqText5.classList.remove("hidden");
    faqIcon5.classList.remove("fa-square-plus");
    faqIcon5.classList.add("fa-square-minus");
    faq5.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq5.style.height = "5rem";
      faqText5.classList.add("hidden");
      faqIcon5.classList.remove("fa-square-minus");
      faqIcon5.classList.add("fa-square-plus");
    } else {
      faqText5.classList.add("hidden");
      faqIcon5.classList.remove("fa-square-minus");
      faqIcon5.classList.add("fa-square-plus");
      faq5.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox6 = () => {
  if (close) {
    faqText6.classList.remove("hidden");
    faqIcon6.classList.remove("fa-square-plus");
    faqIcon6.classList.add("fa-square-minus");
    faq6.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq6.style.height = "5rem";
      faqText6.classList.add("hidden");
      faqIcon6.classList.remove("fa-square-minus");
      faqIcon6.classList.add("fa-square-plus");
    } else {
      faqText6.classList.add("hidden");
      faqIcon6.classList.remove("fa-square-minus");
      faqIcon6.classList.add("fa-square-plus");
      faq6.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox7 = () => {
  if (close) {
    faqText7.classList.remove("hidden");
    faqIcon7.classList.remove("fa-square-plus");
    faqIcon7.classList.add("fa-square-minus");
    faq7.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq7.style.height = "5rem";
      faqText7.classList.add("hidden");
      faqIcon7.classList.remove("fa-square-minus");
      faqIcon7.classList.add("fa-square-plus");
    } else {
      faqText7.classList.add("hidden");
      faqIcon7.classList.remove("fa-square-minus");
      faqIcon7.classList.add("fa-square-plus");
      faq7.style.height = "3.5rem";
    }
  }
  close = !close;
};
const faqBox8 = () => {
  if (close) {
    faqText8.classList.remove("hidden");
    faqIcon8.classList.remove("fa-square-plus");
    faqIcon8.classList.add("fa-square-minus");
    faq8.style.height = "auto";
  } else {
    if (window.matchMedia("min-width:768px")) {
      faq8.style.height = "5rem";
      faqText8.classList.add("hidden");
      faqIcon8.classList.remove("fa-square-minus");
      faqIcon8.classList.add("fa-square-plus");
    } else {
      faqText8.classList.add("hidden");
      faqIcon8.classList.remove("fa-square-minus");
      faqIcon8.classList.add("fa-square-plus");
      faq8.style.height = "3.5rem";
    }
  }
  close = !close;
};
