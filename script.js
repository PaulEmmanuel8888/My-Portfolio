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
      "A full-stack blog application built with Node.js, Express, EJS, and PostgreSQL. Includes admin authentication, CRUD posts, and image handling.",
    tools: ["Node.js", "Express", "EJS", "PostgreSQL", "JavaScript"],
    images: ["./assets/project-1.png", "./assets/project-2.png"],
  },

  gourmet: {
    title: "Gourmet Shuffle",
    description:
      "A food discovery app powered by TheMealDB API. Users get random meal ideas with detailed recipes and instructions.",
    tools: ["HTML", "CSS", "JavaScript", "TheMealDB API"],
    images: ["./assets/project-2.png"],
  },

  project3: {
    title: "Project Three",
    description: "A sample project placeholder for portfolio demonstration.",
    tools: ["HTML", "CSS", "JavaScript"],
    images: ["./assets/project-3.png"],
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
