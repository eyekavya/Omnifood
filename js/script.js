// Set current year in footer
const yearEl = document.querySelector(".year");
const currenYear = new Date().getFullYear();
yearEl.textContent = currenYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// For Smooth Scrolling Animation

// for selecting more than one element
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //   to prevent the default scroll
    e.preventDefault();
    //   to get the link of the href attribute
    const href = link.getAttribute("href");
    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //   Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////
// STICKY NAVIGATION
///////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    // we want to get an event as soon as hero section moves out completely of the viewport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
