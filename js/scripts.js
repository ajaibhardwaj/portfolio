// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation occurs only once when scrolling
    });
  });
  
  // Smooth Scroll for Internal Links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Form Validation (for contact.html)
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission for demo purposes
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all fields!");
      } else {
        alert("Thank you for reaching out! We'll get back to you soon.");
        contactForm.reset(); // Reset form fields
      }
    });
  }
  