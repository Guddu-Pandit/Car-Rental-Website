const menubtn = document.querySelector("#menu-btn");
const navlinks = document.querySelector("#nav-links");
const menubtnicon = document.querySelector("i");

menubtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");

  const isopen = navlinks.classList.contains("open");
  menubtnicon.setAttribute(
    "class",
    isopen ? "fa-solid fa-bars" : "fa-solid fa-bars"
  );
});

navlinks.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  menubtnicon.setAttribute("class", "fa-solid fa-bars");
});

const scrollrevealoption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header-container h1", {
  ...scrollrevealoption,
});
ScrollReveal().reveal(".header-container form", {
  ...scrollrevealoption,
  delay: 500,
});
ScrollReveal().reveal(".header-container img", {
  ...scrollrevealoption,
  delay: 500,
});
ScrollReveal().reveal(".range-card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".location-image img", {
  ...scrollrevealoption,
  origin: "right",
});
ScrollReveal().reveal(".location-content .section-header", {
  ...scrollrevealoption,
  delay: 500,
});
ScrollReveal().reveal(".location-content p", {
  ...scrollrevealoption,
  delay: 1000,
});
ScrollReveal().reveal(".location-content .location-btn", {
  ...scrollrevealoption,
  delay: 1500,
});

const selectcards = document.querySelectorAll(".select-card");
selectcards[0].classList.add("show-info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.querySelector("#select-price");

function updateswiperimage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
    selectcards.forEach((item) => {
      item.classList.remove("show-info");
    });
    selectcards[index].classList.add("show-info");
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(event, ...args) {
    updateswiperimage(event, args);
  },
});

ScrollReveal().reveal(".story-card", {
  ...scrollrevealoption,
  interval: 500,
});

const banner = document.querySelector(".banner-wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download-image img", {
  ...scrollrevealoption,
  origin: "right",
});
ScrollReveal().reveal(".download-content .section-header", {
  ...scrollrevealoption,
  delay: 500,
});
ScrollReveal().reveal(".download-links", {
  ...scrollrevealoption,
  delay: 1000,
});
