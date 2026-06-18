document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 1. Smooth Scroll Navigation
  // =========================
  document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", () => {
      const section = document.getElementById(
        li.textContent.trim().toLowerCase()
      );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // =========================
  // 2. Mobile Hamburger Menu
  // =========================
  const nav = document.querySelector("nav");
  const navUl = document.querySelector("nav ul");

  if (nav && navUl) {
    const menuBtn = document.createElement("button");

    menuBtn.innerHTML = "☰";
    menuBtn.classList.add("menu-btn");

    menuBtn.style.cssText = `
      display:none;
      background:none;
      border:none;
      color:#00ffff;
      font-size:24px;
      cursor:pointer;
    `;

    nav.prepend(menuBtn);

    function handleMenu() {
      if (window.innerWidth <= 768) {
        menuBtn.style.display = "block";

        if (!navUl.classList.contains("menu-open")) {
          navUl.style.display = "none";
        }
      } else {
        menuBtn.style.display = "none";
        navUl.style.display = "flex";
      }
    }

    handleMenu();

    window.addEventListener("resize", handleMenu);

    menuBtn.addEventListener("click", () => {
      if (navUl.style.display === "none") {
        navUl.style.display = "flex";
        navUl.style.flexDirection = "column";
        navUl.classList.add("menu-open");
      } else {
        navUl.style.display = "none";
        navUl.classList.remove("menu-open");
      }
    });
  }

  // =========================
  // 3. Active Navigation Highlight
  // =========================
  document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", () => {
      document.querySelectorAll("nav ul li").forEach(item => {
        item.style.color = "#00ffff";
        item.style.fontWeight = "normal";
      });

      li.style.color = "#ffffff";
      li.style.fontWeight = "bold";
    });
  });

  // =========================
  // 4. Gallery Lightbox
  // =========================
  const galleryImages = document.querySelectorAll(".gallery img");

  if (galleryImages.length > 0) {
    const overlay = document.createElement("div");

    overlay.style.cssText = `
      display:none;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.9);
      justify-content:center;
      align-items:center;
      z-index:9999;
    `;

    const bigImg = document.createElement("img");

    bigImg.style.cssText = `
      max-width:90%;
      max-height:90%;
      border-radius:10px;
      box-shadow:0 0 25px rgba(255,255,255,0.2);
    `;

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    galleryImages.forEach(img => {
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        bigImg.src = img.src;
        overlay.style.display = "flex";
      });
    });

    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }

  // =========================
  // 5. Scroll To Top Button
  // =========================
  const topBtn = document.createElement("button");

  topBtn.innerHTML = "↑";

  topBtn.style.cssText = `
    display:none;
    position:fixed;
    bottom:30px;
    right:30px;
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:#0b3d91;
    color:white;
    font-size:20px;
    cursor:pointer;
    z-index:999;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);
  `;

  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.style.display =
      window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // =========================
  // 6. Toast Notification
  // =========================
  function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;

    toast.style.cssText = `
      position:fixed;
      bottom:90px;
      right:20px;
      background:#0b3d91;
      color:white;
      padding:12px 20px;
      border-radius:8px;
      font-size:14px;
      z-index:9999;
      box-shadow:0 4px 10px rgba(0,0,0,0.3);
      animation:fadeIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2500);
  }

  document.querySelectorAll(".course-box").forEach(box => {
    box.addEventListener("click", () => {
      showToast(`Clicked: ${box.textContent.trim()}`);
    });
  });

  // =========================
  // 7. Fade-In Animation
  // =========================
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section, .course-box").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";

    observer.observe(el);
  });

});