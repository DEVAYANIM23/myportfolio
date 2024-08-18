// Typing animation script
var typed = new Typed(".typing", {
  strings: ["Web Developer", "UI/UX Designer", "Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed2 = new Typed(".typing-2", {
  strings: ["Web Developer", "UI/UX Designer", "Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Carousel script
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1,
          nav: false
      },
      600: {
          items: 2,
          nav: false
      },
      1000: {
          items: 3,
          nav: false
      }
  }
});

// Scroll-up button
$('.scroll-up-btn').click(function () {
  $('html').animate({ scrollTop: 0 });
});

// Navbar toggle
$('.menu-btn').click(function () {
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

// Sticky navbar on scroll
$(window).scroll(function () {
  if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
  } else {
      $('.navbar').removeClass("sticky");
  }
  if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
  } else {
      $('.scroll-up-btn').removeClass("show");
  }
});

// Form submission using Formspree
$("#contactForm").submit(function (e) {
  e.preventDefault(); // Prevent the form from refreshing the page

  const formData = {
      name: $("input[name='name']").val(),
      email: $("input[name='email']").val(),
      subject: $("input[name='subject']").val(),
      message: $("textarea[name='message']").val(),
  };

  // Send form data to the API endpoint
  fetch('https://formspree.io/f/xeojzdnw', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then((response) => {
      if (response.ok) {
          alert('Message sent successfully!');
          // Optionally, reset the form here
          $("#contactForm")[0].reset();
      } else {
          alert('Failed to send message.');
      }
  })
  .catch((error) => alert('Error: ' + error.message));
});

// "Hire Me" button functionality
document.querySelector('.home a').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link action

  // Open the modal
  var modal = document.getElementById("hireMeModal");
  modal.style.display = "block";

  // Close the modal when the close button is clicked
  document.querySelector('.close-btn').onclick = function () {
      modal.style.display = "none";
  };

  // Close the modal when user clicks anywhere outside of the modal content
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
});
