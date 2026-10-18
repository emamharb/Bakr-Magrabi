const shots = [
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
  ["سيشن فرح 3/02-dl-43b8be4c677f.jpg", "سيشن فرح 3"],
  ["سيشن فرح 3/03-dl-b0c9f4267284.jpg", "سيشن فرح 3"],
  ["سيشن فرح 3/04-dl-a8ca38077721.jpg", "سيشن فرح 3"],
  ["سيشن فرح 3/05-dl-0890f3932a0f.jpg", "سيشن فرح 3"],
  ["سيشن فرح 3/06-dl-7769fb840cb9.jpg", "سيشن فرح 3"],
  ["سيشن فرح/01-dl-cff1fbbcf632.jpg", "سيشن فرح"],
  ["سيشن فرح/02-dl-af2277e41adb.jpg", "سيشن فرح"],
  ["سيشن فرح/03-dl-545d0cae4ea8.jpg", "سيشن فرح"],
  ["سيشن فرح/04-dl-f1635c1a21d6.jpg", "سيشن فرح"],
  ["سيشن فرح/05-dl-eb6ad1bbba61.jpg", "سيشن فرح"],
  ["فرح 2/01-dl-472d08e379b3.jpg", "فرح 2"],
  ["فرح 2/02-dl-652a354b746a.jpg", "فرح 2"],
  ["فرح 2/03-dl-09bcbd768c54.jpg", "فرح 2"],
  ["فرح 2/04-dl-c46d50a91caf.jpg", "فرح 2"],
  ["فرح 2/05-dl-aa9687930cd9.jpg", "فرح 2"],
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
  ["سيشن/06-dl-35f295d9b70c.jpg", "سيشن"],
  ["سيشن/صورتى.jpg", "بورتريه"],
  ["شوارع بسيطه وهادئة/01-dl-a1d386b096d3.jpg", "شوارع بسيطة وهادئة"],
  ["شوارع بسيطه وهادئة/02-dl-eab15f6cd5b3.jpg", "شوارع بسيطة وهادئة"],
  ["شوارع بسيطه وهادئة/03-dl-2430d75b9da7.jpg", "شوارع بسيطة وهادئة"],
  ["شوارع بسيطه وهادئة/04-dl-f41b15ceda97.jpg", "شوارع بسيطة وهادئة"],
  ["شوارع بسيطه وهادئة/05-dl-a76ff8cf501f.jpg", "شوارع بسيطة وهادئة"]
];

const videos = [
  ["فيديوهات/كواليس.mp4", "خلف الكادر", "videos-thumbnails/behind-scenes.jpg"],
  ["فيديوهات/فيديو بمؤثر الثلج.mp4", "الجو يزداد بردًا…", "videos-thumbnails/snow-effect.jpg"],
  ["فيديوهات/٣ مشاكل في التصوير بالليل..mp4", "حين يغيب الضوء", "videos-thumbnails/night-shooting.jpg"],
  ["فيديوهات/المرماح أحد أبرز الموروثات الشعبية في صعيد مصر، يرتبط بالخيل والفروسية ويُقام في عدد من المناسبات والموالد..mp4", "فروسية الجنوب", "videos-thumbnails/horse-heritage.jpg"]
];

const sceneTitles = [
  "لحظة",
  "ضوء",
  "حضور",
  "تفاصيل",
  "إيقاع",
  "كادر",
  "ملامح",
  "حكاية",
  "قرب",
  "ذاكرة",
  "ختام"
];

const sceneKickers = [
  "Portfolio",
  "Visuals",
  "Frames",
  "Moments"
];

const story = document.querySelector("[data-story]");
const galleryTabs = [...document.querySelectorAll("[data-gallery-tab]")];
const marquee = document.querySelector("[data-marquee]");

function makeSceneShot(shot) {
  const [src, label] = shot;
  const link = document.createElement("a");
  link.className = "gallery-card";
  link.href = src;
  link.dataset.pswpWidth = "1600";
  link.dataset.pswpHeight = "1200";
  link.setAttribute("aria-label", `عرض صورة كاملة من ${label}`);
  link.innerHTML = `<img src="${src}" alt="${label} - Bakr Magrabi" loading="lazy" decoding="async">`;
  const image = link.querySelector("img");
  image.addEventListener("load", () => {
    link.dataset.pswpWidth = image.naturalWidth;
    link.dataset.pswpHeight = image.naturalHeight;
  }, { once: true });
  link.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = link.getBoundingClientRect();
    link.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    link.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  });
  return link;
}

const artShots = [
  ...shots.filter(([, label]) => label === "بورتريه" || label === "شوارع بسيطة وهادئة"),
  ...["01-dl-de4ece85403b.jpg", "02-dl-ef088c1f8ba2.jpg", "03-dl-62805e5df29b.jpg", "04-dl-89a807048c8d.jpg", "05-dl-ef796e49ab93.jpg"].map((name) => [`سيشن سينمائي لصديقي/${name}`, "سيشن سينمائي"])
];
const weddingShots = shots.filter(([src, label]) => /عروسين|فرح|الآرتايه/.test(label) || (src.startsWith("سيشن/") && label === "سيشن"));

function renderGallery(category = "wedding") {
  const isWedding = category === "wedding";
  const selected = isWedding ? weddingShots : artShots;
  story.replaceChildren(...selected.map(makeSceneShot));
  story.setAttribute("aria-labelledby", `${category}-tab`);
  galleryTabs.forEach((tab) => {
    const active = tab.dataset.galleryTab === category;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.gsap.fromTo(story.children, { autoAlpha: 0, y: 18 }, {
      autoAlpha: 1,
      y: 0,
      duration: .55,
      stagger: .045,
      ease: "power2.out",
      clearProps: "all"
    });
  }
}

async function enablePhotoSwipe() {
  try {
    const { default: PhotoSwipeLightbox } = await import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.js");
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-grid",
      children: "a.gallery-card",
      pswpModule: () => import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.js"),
      showHideAnimationType: "zoom",
      bgOpacity: .96
    });
    lightbox.init();
  } catch (error) {
    console.warn("Photo viewer unavailable; image links remain available.", error);
  }
}

function animateHero() {
  if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.gsap.fromTo(".hero-content > *", { autoAlpha: 0, y: 24 }, {
    autoAlpha: 1,
    y: 0,
    duration: .8,
    stagger: .1,
    ease: "power2.out",
    delay: .15
  });
}

function enableSmoothScroll() {
  if (!window.Lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lenis = new window.Lenis({
    autoRaf: !window.gsap,
    anchors: true,
    smoothWheel: true,
    syncTouch: false
  });

  if (window.gsap) {
    window.gsap.ticker.add((time) => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  }
  window.siteLenis = lenis;
}

function enableGalleryTabs() {
  galleryTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => renderGallery(tab.dataset.galleryTab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? galleryTabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + galleryTabs.length) % galleryTabs.length;
      galleryTabs[nextIndex].focus();
      renderGallery(galleryTabs[nextIndex].dataset.galleryTab);
    });
  });
  renderGallery("wedding");
}

function makeVideoScene(video, index) {
  const [src, label, poster] = video;
  const scene = document.createElement("section");
  scene.className = "video-scene";
  scene.innerHTML = `<div class="video-info"><span>Video</span><h3>${label}</h3></div><div class="video-frame"><video controls preload="none" poster="${poster}"><source data-src="${src}" type="video/mp4"></video></div>`;
  return scene;
}

function watchStoryMotion() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { threshold: 0.25 });

  document.querySelectorAll(".story-scene, .video-scene").forEach((scene) => {
    observer.observe(scene);
  });
}

function lazyLoadMedia() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const image = entry.target;
      image.src = image.dataset.src;
      image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
      image.removeAttribute("data-src");
      observer.unobserve(image);
    });
  }, { rootMargin: "650px 0px" });

  document.querySelectorAll("img[data-src]").forEach((image) => imageObserver.observe(image));
}

function loadDeferredVideo(video) {
  const source = video.querySelector("source[data-src]");
  if (!source) return;
  source.src = source.dataset.src;
  source.removeAttribute("data-src");
  video.load();
}

function enableDeferredVideos() {
  document.querySelectorAll("video source[data-src]").forEach((source) => {
    const video = source.closest("video");
    video.addEventListener("pointerdown", () => loadDeferredVideo(video), { once: true });
    video.addEventListener("focus", () => loadDeferredVideo(video), { once: true });
  });
}

function initCenteredVideoPlay() {
  document.querySelectorAll("[data-lazy-video]").forEach((frame) => {
    const video = frame.querySelector("video");
    const button = frame.querySelector("[data-video-play]");
    if (!video || !button) return;
    const start = () => {
      loadDeferredVideo(video);
      video.play().catch(() => button.focus());
    };
    button.addEventListener("click", start);
    video.addEventListener("play", () => frame.classList.add("is-playing"));
    video.addEventListener("pause", () => frame.classList.remove("is-playing"));
    video.addEventListener("ended", () => frame.classList.remove("is-playing"));
  });
}

function initFilmChooser() {
  const list = document.querySelector("[data-film-choices]");
  const player = document.querySelector("[data-film-player] video");
  const title = document.querySelector("[data-film-title]");
  if (!list || !player || !title) return;
  const source = player.querySelector("source");
  videos.forEach(([src, label, poster], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `film-choice${index === 0 ? " is-active" : ""}`;
    button.setAttribute("aria-pressed", String(index === 0));
    button.innerHTML = `<img src="${poster}" alt="" loading="lazy"><span>${label}</span><b aria-hidden="true">${String(index + 1).padStart(2, "0")}</b>`;
    button.addEventListener("click", () => {
      if (button.classList.contains("is-active")) return;
      list.querySelectorAll(".film-choice").forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      title.textContent = label;
      player.poster = poster;
      source.src = src;
      source.removeAttribute("data-src");
      player.load();
      player.play().catch(() => {});
    });
    list.appendChild(button);
  });
}

function renderMarquee() {
  const sample = [...shots.slice(0, 22), ...shots.slice(0, 22)];
  sample.forEach(([src, label], index) => {
    const image = document.createElement("img");
    image.alt = "لقطة من أعمال Bakr Magrabi";
    image.decoding = "async";
    if (index < 8) {
      image.src = src;
      image.loading = "eager";
      image.fetchPriority = "high";
    } else {
      image.dataset.src = src;
      image.loading = "lazy";
    }
    marquee.appendChild(image);
  });
}

function startBelowFoldStory() {
  enableGalleryTabs();
  enableDeferredVideos();
  watchStoryMotion();
  lazyLoadMedia();
}

function scheduleBelowFoldStory() {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(startBelowFoldStory, { timeout: 1200 });
    return;
  }

  setTimeout(startBelowFoldStory, 450);
}

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 80);
});

renderMarquee();
initFilmChooser();
enableDeferredVideos();
initCenteredVideoPlay();
enablePhotoSwipe();
animateHero();
enableSmoothScroll();
window.addEventListener("load", scheduleBelowFoldStory, { once: true });
