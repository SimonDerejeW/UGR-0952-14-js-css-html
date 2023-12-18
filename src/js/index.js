// Function to filter projects based on the category
function filterProjects(category) {
  var projects = document.querySelectorAll(".portfolio__project-container");

  projects.forEach(function (project) {
    let projectType = project.classList[1];

    if (category === "all" || projectType === category) {
      project.classList.add("show");
    } else {
      project.classList.remove("show");
    }
  });
}

//Slider

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  // slidesPerGroup: 1,
  loop: true,
  //loopFillGroupWithBlank: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      //   spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
  },
});
