$(".main__news-arcticles").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

const anchors = querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
