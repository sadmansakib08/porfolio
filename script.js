(function () {
  // Current year setup for the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Navbar and Back to Top scroll effect
  const navbar = document.getElementById("navbar");
  const backBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
    if (window.scrollY > 300) {
      backBtn?.classList.add("visible");
    } else {
      backBtn?.classList.remove("visible");
    }
  });

  // Mobile menu functionality
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Sidebar active state logic adapted to new sections
  const sections = [
    { id: "home", link: document.getElementById("link-home") },
    { id: "about", link: document.getElementById("link-about") },
    { id: "education", link: document.getElementById("link-education") },
    { id: "research", link: document.getElementById("link-research") },
    { id: "skills", link: document.getElementById("link-skills") },
    { id: "experience", link: document.getElementById("link-experience") },
    { id: "contact", link: document.getElementById("link-contact") },
  ];

  function updateSidebar() {
    const scrollPos = window.scrollY + 120;
    let currentId = sections[0].id;

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el && el.offsetTop <= scrollPos) {
        currentId = s.id;
      }
    });

    sections.forEach((s) => {
      if (s.link) {
        s.link.classList.toggle("active-sidebar", s.id === currentId);
      }
    });
  }

  window.addEventListener("scroll", updateSidebar);
  window.addEventListener("load", updateSidebar);

  // Fade observer logic for sections and cards
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("appear");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  faders.forEach((el) => observer.observe(el));
})();