// ==========================
// Mobile Menu Toggle
// ==========================
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ==========================
// Modal Elements
// ==========================
const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const tech = document.getElementById("modalTech");

const carouselImage = document.getElementById("carouselImage");
const closeBtn = document.getElementById("closeBtn");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const projects = {
  brackets: {
    title: "Between Brackets",
    description:
      "Between Brackets is a tech writing platform where users can explore curated articles, while a hidden admin dashboard powers content creation and management. Built with Node.js, Express, EJS, and PostgreSQL, it also integrates the Unsplash API for seamless image discovery inside the editor.",
    tools: ["Node.js", "Express.js", "EJS", "PostgreSQL", "JavaScript"],
    images: [
      "./assets/project-img/between-brackets/between-brackets-1.png",
      "./assets/project-img/between-brackets/between-brackets-2.png",
      "./assets/project-img/between-brackets/between-brackets-3.png",
      "./assets/project-img/between-brackets/between-brackets-4.png",
    ],
  },

  gourmet: {
    title: "Gourmet Shuffle",
    description:
      "Gourmet Shuffle is a dynamic meal discovery app powered by TheMealDB API. On load, it instantly generates a random recipe complete with ingredients and step-by-step instructions. Users can explore meals by category, cuisine, or ingredient, or search directly for specific dishes. A floating shuffle button adds an interactive twist, letting users instantly discover new meals.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "TheMealDB API",
      "Node.js",
      "Express.js",
      "EJS",
    ],
    images: [
      "./assets/project-img/gourmet-shuffle/gourmet-shuffle-1.png",
      "./assets/project-img/gourmet-shuffle/gourmet-shuffle-2.png",
      "./assets/project-img/gourmet-shuffle/gourmet-shuffle-3.png",
    ],
  },

  project3: {
    title: "CoinMetrics",
    description:
      "A real-time crypto analytics dashboard powered by the CoinGecko API, featuring live price tracking, sortable market data, and detailed coin pages with interactive Recharts visualizations, 24h performance metrics, and auto-refreshing data every 30 seconds.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "CoinGecko API",
      "React",
      "Recharts.js",
    ],
    images: [
      "./assets/project-img/coinmetrics/coinmetrics-1.png",
      "./assets/project-img/coinmetrics/coinmetrics-2.png",
    ],
  },
};

let currentImages = [];
let currentIndex = 0;

function openProject(key) {
  const project = projects[key];

  if (!project) {
    console.error("Project not found:", key);
    return;
  }

  title.textContent = project.title;
  desc.textContent = project.description;

  tech.innerHTML = "";
  project.tools.forEach((tool) => {
    const span = document.createElement("span");
    span.textContent = tool;
    tech.appendChild(span);
  });

  currentImages = project.images || [];
  currentIndex = 0;

  if (currentImages.length > 0) {
    carouselImage.src = currentImages[0];
  } else {
    carouselImage.src = "";
  }
  document.body.style.overflow = "hidden";
  modal.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  if (currentImages.length === 0) return;

  currentIndex = (currentIndex + 1) % currentImages.length;
  carouselImage.src = currentImages[currentIndex];
});

prevBtn.addEventListener("click", () => {
  if (currentImages.length === 0) return;

  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  carouselImage.src = currentImages[currentIndex];
});

// closeBtn.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.classList.add("hidden");
//   }
// });
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    openProject(key);
  });
});
