const shots = [
  ["الآرتايه/01-dl-7b3248ad4aea.jpg", "الآرتايه"],
  ["الآرتايه/02-dl-1bf95f7ef6fe.jpg", "الآرتايه"],
  ["الآرتايه/03-dl-664d77c13331.jpg", "الآرتايه"],
  ["الآرتايه/04-dl-c1fa453acc4a.jpg", "الآرتايه"],
  ["الآرتايه/05-dl-1d4897e267b5.jpg", "الآرتايه"],
  ["سيشن العروسين/02-dl-bf57a06ce420.jpg", "سيشن العروسين"],
  ["سيشن العروسين/03-dl-e092ab720128.jpg", "سيشن العروسين"],
  ["سيشن العروسين/04-dl-916a28359525.jpg", "سيشن العروسين"],
  ["سيشن العروسين/05-dl-1a02d6c9cad4.jpg", "سيشن العروسين"],
  ["سيشن العروسين/06-dl-469cd11a907f.jpg", "سيشن العروسين"],
  ["الآرتايه/01-dl-7b3248ad4aea.jpg", "الآرتايه"],
  ["الآرتايه/02-dl-1bf95f7ef6fe.jpg", "الآرتايه"],
  ["الآرتايه/03-dl-664d77c13331.jpg", "الآرتايه"],
  ["الآرتايه/04-dl-c1fa453acc4a.jpg", "الآرتايه"],
  ["الآرتايه/05-dl-1d4897e267b5.jpg", "الآرتايه"],
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
  ["فرح/05-dl-d2eee10a2bfd.jpg", "فرح"]
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
const marquee = document.querySelector("[data-marquee]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox.querySelector("img");
const lightboxText = lightbox.querySelector("p");
const closeLightbox = lightbox.querySelector(".lightbox-close");

function openLightbox(src, label) {
  lightboxImage.src = src;
  lightboxImage.alt = label;
  lightboxText.textContent = "لقطة من أعمال Bakr Magrabi";
  lightbox.hidden = false;
}

function makeSceneShot(shot) {
  const [src, label] = shot;
  const button = document.createElement("button");
  button.className = "scene-shot";
  button.type = "button";
  button.innerHTML = `<img data-src="${src}" alt="لقطة من أعمال Bakr Magrabi" loading="lazy" decoding="async">`;
  button.addEventListener("click", () => openLightbox(src, label));
  return button;
}

function renderStory() {
  story.innerHTML = "";
  const groups = [
    { id: "art", title: "Art", kicker: "Art Photography", shots: [
      ...shots.filter(([, label]) => label === "بورتريه" || label === "شوارع بسيطة وهادئة"),
      ...["01-dl-de4ece85403b.jpg", "02-dl-ef088c1f8ba2.jpg", "03-dl-62805e5df29b.jpg", "04-dl-89a807048c8d.jpg", "05-dl-ef796e49ab93.jpg"].map((name) => [`سيشن سينمائي لصديقي/${name}`, "سيشن سينمائي"])
    ] },
    { id: "wedding", title: "Wedding", kicker: "Wedding Photography", shots: shots.filter(([, label]) => /عروسين|فرح|الآرتايه/.test(label)) }
  ];

  let sceneIndex = 0;
  groups.forEach((group) => {
    const heading = document.createElement("div");
    heading.className = "gallery-section-title";
    heading.id = `${group.id}-gallery`;
    heading.innerHTML = `<p class="eyebrow dark">${group.kicker}</p><h2>${group.title}</h2>`;
    story.appendChild(heading);

    for (let index = 0; index < group.shots.length; index += 6) {
    const chunk = group.shots.slice(index, index + 6);
    const title = sceneTitles[sceneIndex % sceneTitles.length];
    const kicker = sceneKickers[sceneIndex % sceneKickers.length];
    const scene = document.createElement("section");
    scene.className = "story-scene";
    scene.innerHTML = `<div class="scene-copy"><span>${kicker}</span><h3>${title}</h3></div><div class="scene-collage"></div>`;
    const collage = scene.querySelector(".scene-collage");
    chunk.forEach((shot) => collage.appendChild(makeSceneShot(shot)));
    story.appendChild(scene);

    if (group.id !== "art" && sceneIndex < videos.length) story.appendChild(makeVideoScene(videos[sceneIndex], sceneIndex));
    sceneIndex += 1;
    }
  });
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
  renderStory();
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

closeLightbox.addEventListener("click", () => {
  lightbox.hidden = true;
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") lightbox.hidden = true;
});

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 80);
});

renderMarquee();
enableDeferredVideos();
window.addEventListener("load", scheduleBelowFoldStory, { once: true });
