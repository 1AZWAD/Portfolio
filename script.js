/* =========================
   PORTFOLIO JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const navLinks = document.querySelectorAll(".nav-links a");


  /* =========================
     SCROLL REVEAL ANIMATION
  ========================= */

  const hiddenElements = document.querySelectorAll(
    ".section-title, .about-content, .project-card, .skill-category, .contact-content, .achievement-card, .education-card, .blog-card, .publication-card"
  );

  hiddenElements.forEach((element) => {
    element.classList.add("hidden");
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  hiddenElements.forEach((element) => {
    observer.observe(element);
  });


  /* =========================
     ACTIVE NAVBAR LINK
     Works with separate pages
  ========================= */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }

  });


  /* =========================
     CV BUTTON
  ========================= */

  const cvButton =
    document.querySelector(".download-cv-btn");

  if (cvButton) {

    cvButton.addEventListener("click", () => {
      console.log("CV download started.");
    });

  }


  /* =========================
     PROJECT LINKS
  ========================= */

  const projectLinks =
    document.querySelectorAll(".project-link");

  projectLinks.forEach((link) => {

    link.addEventListener("click", () => {
      console.log("Opening project...");
    });

  });

});
