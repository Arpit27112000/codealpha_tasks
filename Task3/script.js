// mobile nav toggle

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // hide menu after clicking any link (mobile UX)

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// footer year

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// smooth scroll (extra, browsers already support but we ensure)

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// EmailJS initialization

emailjs.init("jBvmFShYjjnr2VFa5");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.getElementById("send-btn");
    btn.innerText = "Sending...";
    btn.disabled = true;

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_oe55tvi";
    const templateID = "template_wknm8ea";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert("Message sent successfully! 🚀");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        btn.innerText = "Send Message";
        btn.disabled = false;
      })
      .catch((err) => {
        alert("Sending failed ❌ Check console.");
        console.log(err);
        btn.innerText = "Send Message";
        btn.disabled = false;
      });
  });
