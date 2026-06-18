<script>
  // 1. Smooth scroll
  document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", () => {
      const section = document.getElementById(li.textContent.toLowerCase());
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 2. Hamburger (mobile)
  const navUl = document.querySelector("nav ul");
  const btn = document.createElement("button");
  btn.textContent = "☰";
  btn.style.cssText = "display:none; background:none; border:none; color:#00ffff; font-size:24px; cursor:pointer;";
  document.querySelector("nav").prepend(btn);
  if (window.innerWidth <= 768) { btn.style.display = "block"; navUl.style.display = "none"; }
  btn.addEventListener("click", () => { navUl.style.display = navUl.style.display === "none" ? "flex" : "none"; });

  // 3. Active nav highlight
  document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", () => {
      document.querySelectorAll("nav ul li").forEach(el => { el.style.color = "#00ffff"; el.style.fontWeight = ""; });
      li.style.color = "#ffffff"; li.style.fontWeight = "bold";
    });
  });

  // 4. Gallery lightbox
  const overlay = document.createElement("div");
  overlay.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; justify-content:center; align-items:center;";
  const bigImg = document.createElement("img");
  bigImg.style.cssText = "max-width:90%; max-height:90%; border-radius:10px;";
  overlay.appendChild(bigImg); document.body.appendChild(overlay);
  document.querySelectorAll(".gallery img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => { bigImg.src = img.src; overlay.style.display = "flex"; });
  });
  overlay.addEventListener("click", () => overlay.style.display = "none");

  // 5. Scroll-to-top button
  const topBtn = document.createElement("button");
  topBtn.textContent = "↑";
  topBtn.style.cssText = "display:none; position:fixed; bottom:30px; right:30px; background:#0b3d91; color:white; border:none; border-radius:50%; width:45px; height:45px; font-size:20px; cursor:pointer; z-index:999;";
  document.body.appendChild(topBtn);
  window.addEventListener("scroll", () => { topBtn.style.display = window.scrollY > 300 ? "block" : "none"; });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // 6. Course box toast
  function showToast(msg) {
    const t = document.createElement("div");
    t.textContent = msg;
    t.style.cssText = "position:fixed; bottom:80px; right:20px; background:#0b3d91; color:white; padding:10px 18px; border-radius:8px; z-index:9999; font-size:14px;";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
  }
  document.querySelectorAll(".course-box").forEach(box => {
    box.addEventListener("click", () => showToast("Clicked: " + box.textContent.trim()));
  });
</script>
