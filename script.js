const toggle = document.getElementById("menu-toggle");
      const nav = document.querySelector(".menu-nav");

      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("open");
      });