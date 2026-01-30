window.addEventListener("DOMContentLoaded", () => {

  // ================= INTRO =================
  const intro = document.querySelector(".intro");
  const logospan = document.querySelectorAll(".logo");
  const nav = document.querySelector(".futuristic-nav");

  // HIDE NAVBAR INITIALLY
  nav.style.display = "none";

  // Logo animation
  setTimeout(() => {
    logospan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    // Fade logo
    setTimeout(() => {
      logospan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    // Remove intro & SHOW NAVBAR
    setTimeout(() => {
      intro.style.top = "-100vh";
      nav.style.display = "block";
    }, 2300);

  }, 100);
});


// ================= SCROLL NAV =================
const nav = document.querySelector(".futuristic-nav");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
});


// ================= HIDE NAV ON LINK CLICK =================
const navbarLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// Simple fade-in animation
const section = document.querySelector(".about-section");

window.addEventListener("load", () => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";

  setTimeout(() => {
    section.style.transition = "0.8s ease";
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  }, 200);
});

// ================= TESTIMONIAL SECTION =================
const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");
const clientName = document.getElementById("clientName");
const clientReview = document.getElementById("clientReview");
const clientOrder = document.getElementById("clientOrder");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {

    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");

    mainImage.style.opacity = "0";

    setTimeout(() => {
      mainImage.src = thumb.src;
      clientName.textContent = thumb.dataset.name;
      clientReview.textContent = thumb.dataset.review;
      clientOrder.textContent = `#${thumb.dataset.order}`;
      mainImage.style.opacity = "1";
    }, 200);
  });
});

