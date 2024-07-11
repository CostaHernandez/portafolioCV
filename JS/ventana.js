const iconBoxes = document.querySelectorAll(".icon-box");
const iconBoxContainers = document.querySelectorAll(".icon-container");
const closeBtns = document.querySelectorAll(".close-btn");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");

iconBoxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    modal.style.display = "none";
    body.classList.remove("prevent-background-scroll");
    iconBoxContainers.forEach((container) => {
      container.style.display = "flex";
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});

maximizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    let container = modal.querySelector(".popup-container");
    let body = modal.querySelector(".popup-body");

    if (modal.classList.contains("maximized")) {
      container.style.width = "min(900px, 90%)";
      container.style.top = "45%";
      body.style.height = "70vh";
    } else {
      container.style.width = "100%";
      container.style.top = "50%";
      body.style.height = "90vh";
    }

    modal.classList.toggle("maximized");
    body.classList.toggle("prevent-scroll");
  });
});

var swiper = new Swiper(".swiper", {
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  mousewheel: {
    invert: false,
    thresholdDelta: 50,
    sensitivity: 1
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    680: {
      slidesPerView: 2
    },
    1100: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 4
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Abre el popup correspondiente cuando se hace clic en un icono
  document.querySelectorAll('.icon-box').forEach(function (icon) {
    icon.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });

  // Cierra el popup cuando se hace clic en el botón de cierre
  document.querySelectorAll('.close-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.closest('.popup').style.display = 'nonblo';
    });
  });

  // Agrega la funcionalidad del slider de Swiper si es necesario
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });
  }
});

//body de fondo

/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========== sticky navbar ==========*/
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right"
});

/*  funcion para el formulario 

MailerLite Universal */

(function (w, d, e, u, f, l, n) {
  (w[f] =
    w[f] ||
    function () {
      (w[f].q = w[f].q || []).push(arguments);
    }),
    (l = d.createElement(e)),
    (l.async = 1),
    (l.src = u),
    (n = d.getElementsByTagName(e)[0]),
    n.parentNode.insertBefore(l, n);
})(
  window,
  document,
  "script",
  "https://assets.mailerlite.com/js/universal.js",
  "ml"
);
ml("account", "736768");

document.addEventListener("DOMContentLoaded", function () {
  const darkModeIcon = document.getElementById("darkMode-icon");
  const body = document.body;

  // Recupera la preferencia del modo oscuro del localStorage
  const isDarkModeSaved = localStorage.getItem("darkMode") === "true";
  if (isDarkModeSaved) {
    enableDarkMode();
  }

  darkModeIcon.addEventListener("click", function () {
    // Cambia entre modo oscuro y claro
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    darkModeIcon.classList.add("bx-sun");
    body.classList.add("dark-mode");

    // Guarda el modo actual en localStorage para recordar la preferencia del usuario
    localStorage.setItem("darkMode", "true");

    // Aplica los estilos después de cambiar el modo oscuro
    applyDarkModeStyles();
  }

  function disableDarkMode() {
    darkModeIcon.classList.remove("bx-sun");
    body.classList.remove("dark-mode");

    // Guarda el modo actual en localStorage para recordar la preferencia del usuario
    localStorage.setItem("darkMode", "false");

    // Aplica los estilos después de cambiar el modo oscuro
    applyDarkModeStyles();
  }

  // Función para cambiar el estilo de los elementos en función del modo oscuro
  function applyDarkModeStyles() {
    const elementsToStyle = document.querySelectorAll(".dark-mode-affected");

    elementsToStyle.forEach((element) => {
      // Aquí puedes ajustar los estilos según tus necesidades
      element.style.backgroundColor = body.classList.contains("dark-mode")
        ? "#1a1a1a"
        : ""; // Color de fondo en modo oscuro
      element.style.color = body.classList.contains("dark-mode")
        ? "#ffffff"
        : ""; // Color del texto en modo oscuro
      // Añade más estilos según sea necesario
    });
  }
});

// form
const $form = document.querySelector('.contact form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData($form);
  try {
    const response = await fetch($form.action, {
      method: $form.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      $form.reset();
      alert('Correo enviado exitosamente, te escribiré y me comunicaré contigo pronto');
    } else {
      alert('Hubo un problema al enviar el correo, por favor intenta de nuevo.');
    }
  } catch (error) {
    alert('Ocurrió un error inesperado, por favor intenta de nuevo.');
  }
}

document.getElementById('redirectButtonT').addEventListener('click', function () {
  window.location.href = 'Titulos.html';
});
document.getElementById('redirectButton').addEventListener('click', function () {
  window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('read-more-btn');
  const lastParagraph = document.getElementById('last-paragraph');

  readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    lastParagraph.classList.toggle('hidden');
    if (lastParagraph.classList.contains('hidden')) {
      readMoreBtn.textContent = 'leer más';
    } else {
      readMoreBtn.textContent = 'ocultar';
    }
  });
});
