const weddingPhotos = [
  ["سيشن العروسين/02-dl-bf57a06ce420.jpg", "سيشن العروسين"],
  ["سيشن العروسين/03-dl-e092ab720128.jpg", "سيشن العروسين"],
  ["سيشن العروسين/04-dl-916a28359525.jpg", "سيشن العروسين"],
  ["سيشن العروسين/05-dl-1a02d6c9cad4.jpg", "سيشن العروسين"],
  ["سيشن العروسين/06-dl-469cd11a907f.jpg", "سيشن العروسين"],
  ["سيشن الفرح/01-dl-72ca59b1f1ea.jpg", "سيشن الفرح"],
  ["سيشن الفرح/02-dl-18f9dce27442.jpg", "سيشن الفرح"],
  ["سيشن الفرح/03-dl-f5da7dcecedd.jpg", "سيشن الفرح"],
  ["سيشن الفرح/04-dl-b6a3b2cafa34.jpg", "سيشن الفرح"],
  ["سيشن الفرح/05-dl-9f5227161457.jpg", "سيشن الفرح"],
  ["سيشن عروسين فى الخارج/02-dl-a1b8194ff8ba.jpg", "عروسين في الخارج"],
  ["سيشن عروسين فى الخارج/03-dl-d9a79cfafea8.jpg", "عروسين في الخارج"],
  ["سيشن عروسين فى الخارج/04-dl-889b04f958bf.jpg", "عروسين في الخارج"],
  ["سيشن عروسين فى الخارج/05-dl-6df69d11cf31.jpg", "عروسين في الخارج"],
  ["سيشن عروسين فى الخارج/06-dl-b3510bd797c8.jpg", "عروسين في الخارج"],
  ["سيشن فرح 3/02-dl-43b8be4c677f.jpg", "سيشن فرح"],
  ["سيشن فرح 3/03-dl-b0c9f4267284.jpg", "سيشن فرح"],
  ["سيشن فرح 3/04-dl-a8ca38077721.jpg", "سيشن فرح"],
  ["سيشن فرح 3/05-dl-0890f3932a0f.jpg", "سيشن فرح"],
  ["سيشن فرح 3/06-dl-7769fb840cb9.jpg", "سيشن فرح"],
  ["سيشن فرح/01-dl-cff1fbbcf632.jpg", "سيشن فرح"],
  ["سيشن فرح/02-dl-af2277e41adb.jpg", "سيشن فرح"],
  ["سيشن فرح/03-dl-545d0cae4ea8.jpg", "سيشن فرح"],
  ["سيشن فرح/04-dl-f1635c1a21d6.jpg", "سيشن فرح"],
  ["سيشن فرح/05-dl-eb6ad1bbba61.jpg", "سيشن فرح"],
  ["فرح 2/01-dl-472d08e379b3.jpg", "فرح"],
  ["فرح 2/02-dl-652a354b746a.jpg", "فرح"],
  ["فرح 2/03-dl-09bcbd768c54.jpg", "فرح"],
  ["فرح 2/04-dl-c46d50a91caf.jpg", "فرح"],
  ["فرح 2/05-dl-aa9687930cd9.jpg", "فرح"],
  ["فرح/01-dl-c1905c07fef0.jpg", "فرح"],
  ["فرح/02-dl-42c55782ad79.jpg", "فرح"],
  ["فرح/03-dl-a69a34628872.jpg", "فرح"],
  ["فرح/04-dl-6b19eb75ab98.jpg", "فرح"],
  ["فرح/05-dl-d2eee10a2bfd.jpg", "فرح"],
  ["الآرتايه/01-dl-7b3248ad4aea.jpg", "الآرتايه"],
  ["الآرتايه/02-dl-1bf95f7ef6fe.jpg", "الآرتايه"],
  ["الآرتايه/03-dl-664d77c13331.jpg", "الآرتايه"],
  ["الآرتايه/04-dl-c1fa453acc4a.jpg", "الآرتايه"],
  ["الآرتايه/05-dl-1d4897e267b5.jpg", "الآرتايه"],
  ["سيشن/02-dl-15756191b4ed.jpg", "سيشن"],
  ["سيشن/03-dl-b0de3fb0b58d.jpg", "سيشن"],
  ["سيشن/04-dl-1c64612353e1.jpg", "سيشن"],
  ["سيشن/05-dl-e69b1335ff86.jpg", "سيشن"],
  ["سيشن/06-dl-35f295d9b70c.jpg", "سيشن"]
];

const artPhotos = [
  ["سيشن/صورتى.jpg", "بورتريه"],
  ["شوارع بسيطه وهادئة/01-dl-a1d386b096d3.jpg", "من شوارع قنا"],
  ["شوارع بسيطه وهادئة/02-dl-eab15f6cd5b3.jpg", "من شوارع قنا"],
  ["شوارع بسيطه وهادئة/03-dl-2430d75b9da7.jpg", "من شوارع قنا"],
  ["شوارع بسيطه وهادئة/04-dl-f41b15ceda97.jpg", "من شوارع قنا"],
  ["شوارع بسيطه وهادئة/05-dl-a76ff8cf501f.jpg", "من شوارع قنا"],
  ["سيشن سينمائي لصديقي/01-dl-de4ece85403b.jpg", "مشاهد سينمائية"],
  ["سيشن سينمائي لصديقي/02-dl-ef088c1f8ba2.jpg", "مشاهد سينمائية"],
  ["سيشن سينمائي لصديقي/03-dl-62805e5df29b.jpg", "مشاهد سينمائية"],
  ["سيشن سينمائي لصديقي/04-dl-89a807048c8d.jpg", "مشاهد سينمائية"],
  ["سيشن سينمائي لصديقي/05-dl-ef796e49ab93.jpg", "مشاهد سينمائية"]
];

const films = [
  ["فيديوهات/كواليس.mp4", "خلف الكادر", "videos-thumbnails/behind-scenes.jpg", "حكاية صغيرة عن اللي بيحصل قبل ما الصورة تتاخد."],
  ["فيديوهات/المشكلة مش في الكاميرا ، الجزء الاول.mp4", "المشكلة مش في الكاميرا", "videos-thumbnails/camera-problem.jpg", "كلام عن العين اللي بتشوف، قبل الكاميرا اللي بتصوّر."],
  ["فيديوهات/فيديو بمؤثر الثلج.mp4", "الجو يزداد بردًا…", "videos-thumbnails/snow-effect.jpg", "تجربة بصرية ومشهد خارج المألوف."],
  ["فيديوهات/٣ مشاكل في التصوير بالليل..mp4", "حين يغيب الضوء", "videos-thumbnails/night-shooting.jpg", "محاولات وحلول للتصوير في الضوء الصعب."],
  ["فيديوهات/المرماح أحد أبرز الموروثات الشعبية في صعيد مصر، يرتبط بالخيل والفروسية ويُقام في عدد من المناسبات والموالد..mp4", "فروسية الجنوب", "videos-thumbnails/horse-heritage.jpg", "مشهد من الموروث الشعبي في جنوب مصر."]
];

const gallery = document.querySelector("[data-gallery]");
const galleryTabs = [...document.querySelectorAll("[data-gallery-tab]")];
const galleryCount = document.querySelector("[data-gallery-count]");
const filmFeature = document.querySelector("[data-film-feature]");
const filmList = document.querySelector("[data-film-list]");

function makeGalleryItem([src, label], index) {
  const link = document.createElement("a");
  link.className = "gallery-card";
  link.href = src;
  link.dataset.pswpWidth = "1600";
  link.dataset.pswpHeight = "1200";
  link.setAttribute("aria-label", `عرض صورة كاملة: ${label}`);
  link.innerHTML = `<img src="${src}" alt="${label} — تصوير بكر المغربي" loading="${index < 4 ? "eager" : "lazy"}" decoding="async"><span>${label}</span>`;
  const image = link.querySelector("img");
  image.addEventListener("load", () => {
    link.dataset.pswpWidth = image.naturalWidth;
    link.dataset.pswpHeight = image.naturalHeight;
  }, { once: true });
  link.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const rect = link.getBoundingClientRect();
    link.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    link.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  });
  return link;
}

function renderGallery(category = "wedding") {
  const items = category === "wedding" ? weddingPhotos : artPhotos;
  gallery.replaceChildren(...items.map(makeGalleryItem));
  gallery.setAttribute("aria-labelledby", `${category}-tab`);
  galleryCount.textContent = `${String(items.length).padStart(2, "0")} صورة`;
  galleryTabs.forEach((tab) => {
    const active = tab.dataset.galleryTab === category;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.gsap.fromTo(gallery.children, { autoAlpha: 0, y: 14 }, {
      autoAlpha: 1, y: 0, duration: .46, stagger: .025, ease: "power2.out", clearProps: "all"
    });
  }
}

function initGalleryTabs() {
  galleryTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => renderGallery(tab.dataset.galleryTab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? galleryTabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + galleryTabs.length) % galleryTabs.length;
      galleryTabs[next].focus();
      renderGallery(galleryTabs[next].dataset.galleryTab);
    });
  });
  renderGallery("wedding");
}

function renderFeatureFilm(film, index = 0) {
  const [src, title, poster, description] = film;
  filmFeature.innerHTML = `<div class="film-feature-media"><video controls preload="metadata" poster="${poster}" playsinline><source src="${src}" type="video/mp4"></video></div><div class="film-feature-copy"><div class="film-feature-index"><span>${String(index + 1).padStart(2, "0")}</span><i></i><span>SHORT FILM</span></div><p class="overline">من دفتر الحكايات</p><h3>${title}</h3><p>${description}</p></div>`;
  filmList.querySelectorAll(".film-choice").forEach((item) => item.classList.toggle("is-active", Number(item.dataset.filmIndex) === index));
}

function initFilms() {
  films.forEach(([src, title, poster], index) => {
    if (index === 0) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "film-choice";
    button.dataset.filmIndex = String(index);
    button.innerHTML = `<img src="${poster}" alt="" loading="lazy" decoding="async"><span>${title}</span><b aria-hidden="true">↗</b>`;
    button.addEventListener("click", () => {
      renderFeatureFilm(films[index], index);
      const video = filmFeature.querySelector("video");
      video.play().catch(() => {});
    });
    filmList.appendChild(button);
  });
  renderFeatureFilm(films[0]);
}

async function initPhotoSwipe() {
  try {
    const { default: PhotoSwipeLightbox } = await import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.js");
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-grid",
      children: "a.gallery-card",
      pswpModule: () => import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.js"),
      showHideAnimationType: "zoom",
      bgOpacity: .97
    });
    lightbox.init();
  } catch (error) {
    console.warn("PhotoSwipe is unavailable; gallery images remain linked directly.", error);
  }
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initSmoothScroll() {
  if (!window.Lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const lenis = new window.Lenis({ autoRaf: !window.gsap, anchors: true, smoothWheel: true, syncTouch: false });
  if (window.gsap) {
    window.gsap.ticker.add((time) => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  }
  window.siteLenis = lenis;
}

function initPageMotion() {
  if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.gsap.fromTo(".hero-kicker, .hero h1, .hero-bottomline", { autoAlpha: 0, y: 22 }, {
    autoAlpha: 1, y: 0, duration: .9, stagger: .13, ease: "power3.out", delay: .18
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      window.gsap.fromTo(entry.target, { autoAlpha: 0, y: 20 }, {
        autoAlpha: 1, y: 0, duration: .8, ease: "power2.out", clearProps: "all"
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll(".section-intro, .interlude-copy, .film-feature, .about-copy, .contact-main").forEach((item) => observer.observe(item));
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 42);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

initGalleryTabs();
initFilms();
initPhotoSwipe();
initMobileMenu();
initSmoothScroll();
initPageMotion();
initHeader();
