    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero p", { duration: 1.2, y: -30, opacity: 0, delay: 0.2 });
    gsap.from(".hero button", { duration: 1.4, y: -20, opacity: 0, delay: 0.4 });
    gsap.from(".projects .card", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
    gsap.from(".skills .card", { duration: 1, y: 50, opacity: 0, stagger: 0.1 });

    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    }

    (function () {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    })();
  