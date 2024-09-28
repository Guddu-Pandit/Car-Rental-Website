const menubtn = document.querySelector("#menu-btn");
const navlinks = document.querySelector("#nav-links");
const menubtnicon = document.querySelector("i");

menubtn.addEventListener("click" , (e) => {
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menubtnicon.setAttribute("class", isopen ? "fa-solid fa-bars" : "fa-solid fa-bars")
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class", "fa-solid fa-bars");
  });

const scrollrevealoption = {
    origin : "bottom",
    distance :"50px",
    duration: 1000,
};

ScrollReveal().reveal(".header-container h1", {
    ...scrollrevealoption,
});
ScrollReveal().reveal(".header-container form", {
    ...scrollrevealoption,
    delay:500
});
ScrollReveal().reveal(".header-container img", {
    ...scrollrevealoption,
    delay:500
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

function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
      const index = args && args[0].realIndex;
      priceEl.innerText = price[index];
      selectCards.forEach((item) => {
        item.classList.remove("show__info");
      });
      selectCards[index].classList.add("show__info");
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
      updateSwiperImage(event, args);
    },
});