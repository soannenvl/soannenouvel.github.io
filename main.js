/* =========================
   DONNÉES DES PROJETS
========================= */

const projects = {
  p1: {
    title: "KITESY MARTIN STUDIO",
    date: "2024 – aujourd'hui",
    text: `
      <p>
        Freelance – Monteuse bijoux<br>
        Stage – Assistante de collection<br>
        Kitesy Martin Studio, Paris 11
      </p>

      <p>
        → Confection & production : Assemblage et fabrication de bijoux en série,
        travail des matériaux (métal, perles, cuir), finitions.<br>
        → Tests & prototypage : Expérimentation de formes et techniques pour la Fashion Week Homme 2025.<br>
        → Gestion des commandes & logistique : préparation, expédition, suivi des stocks.<br>
        → Achat de fournitures & inventaire.
      </p>
    `,
    images: [
      "src/img/kms6.jpg",
      "src/img/kms7.jpg",
      "src/img/km7.jpg",
      "src/img/kms8.jpg"
    ]
  },

  p2: {
    title: "SISI JOIA",
    date: "2025",
    text: `
      <p>
        Freelance – Monteuse bijoux<br>
        Sisi Joia, Paris 11
      </p>

      <p>
        → Assemblage et fabrication de bijoux en série.<br>
        → Collier « Le Noué » et déclinaison en ceinture.<br>
        → Boucles d’oreilles « XXX ».
      </p>
    `,
    images: [
      "src/img/sisi1.jpg",
      "src/img/sisi2.jpg",
      "src/img/sisi3.jpg",
      "src/img/sisi4.jpg"
    ]
  },

  p3: {
    title: "KOZTO",
    date: "2024",
    text: `
      <p>
        Stage – Assistante développement atelier & communication<br>
        Kozto, Paris 12
      </p>

      <p>
        La CH_02, conçue pour les logements étudiants du CROUS,
        est fabriquée à partir de bois de réemploi.
        Une chaise robuste, compacte, pensée pour un usage quotidien.
      </p>

      <p>
        Dimensions : 340 × 320 × 610 mm<br>
        Matériaux : contreplaqué 12 mm<br>
        Provenance : caisses de transport d’œuvres d’art (Chenue, Saint-Denis)
      </p>
    `,
    images: [
      "src/img/metropolitaine.jpg",
      "src/img/metropolitaine2.jpg",
      "src/img/metropolitaine3.jpg",
      "src/img/metropolitaine4.jpg"
    ]
  },

  p4: {
    title: "MAROC",
    date: "2023",
    text: `
      <p>
        Canon Prima Zoom Shot<br>
        Pellicule Kodak Gold 200 – 35mm
      </p>
    `,
    images: [
      "src/img/maroc1.jpg",
      "src/img/maroc2.jpg",
      "src/img/maroc3.jpg"
    ]
  },

  p5: {
    title: "LA CORVÉE",
    date: "2024 – aujourd'hui",
    text: `
      <p>
        Bénévolat – Commis de cuisine<br>
        La Corvée, Paris 18
      </p>

      <p> La Corvée est une association loi de 1901 autour d'un tier-lieu solidaire et artistique, pensé à la fois comme un espace culturel de proximité, une structure d'intérêt général à finalité non lucrative et un café-laverie. La Corvée est une bulle : une bulle où se reconstruire, une bulle où s'instruire, une bulle où s'investir, une bulle où se (re)découvrir, avec soi et avec les autres. </p> 
      <p> → Restaurant-laverie solidaire, galerie & traiteur végétarien.<br> 
      → Préparation & mise en place, dressage, envoi des assiettes.<br> 
      → Assistance aux cheffes en résidence : Azusa Wang, Mathilde Devaut, Aminata Fadik.<br> </p>
    `,
    images: [
      "src/img/corvée1.webp",
      "src/img/corvée_azusa (2).jpg",
      "src/img/corvée_soso.jpeg",
      "src/img/corvée_soso_aminata.jpeg",
      "src/img/corvée_soso1.jpeg"
    ]
  }
};

/* =========================
   CONTENU ABOUT
========================= */

const aboutContent = `
  <div class="project-text">
    <p>
      Je m’appelle Soanne, designer en formation,
      attirée par un design qui a du sens et qui fait ressentir des choses.
    </p>

    <p>
      Je m’intéresse à l’artisanat, aux gestes, aux matières,
      aux couleurs et aux goûts.
      J’aime les pratiques où le corps et le temps sont engagés.
    </p>

    <p>
      Les arts culinaires occupent une place centrale dans mes recherches
      et mes envies professionnelles.
    </p>

    <p>
      <strong>Parcours</strong><br><br>
      2021–2024 → BUT MMI, Lannion<br>
      2025–2027 → Master Design & Sciences Sociales, Rennes
    </p>
  </div>
`;

/* =========================
   ÉLÉMENTS DOM
========================= */

const view = document.getElementById("project-view");
const projectButtons = document.querySelectorAll("[data-project]");
const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");

/* =========================
   FONCTIONS
========================= */

// HOME — page blanche
function goHome() {
  view.innerHTML = "";
  view.style.display = "none";
}

// AFFICHER UN PROJET
function showProject(key) {
  const p = projects[key];
  if (!p) return;

  view.innerHTML = `
    <h2>${p.title} <sup>${p.date}</sup></h2>

    <div class="project-text">
      ${p.text}
    </div>

    <div class="project-images">
      ${p.images.map(src => `<img src="${src}" alt="">`).join("")}
    </div>
  `;

  view.style.display = "block";
  view.scrollTop = 0;
}

// AFFICHER ABOUT
function showAbout() {
  view.innerHTML = `
    <h2>À PROPOS</h2>
    ${aboutContent}
  `;

  view.style.display = "block";
  view.scrollTop = 0;
}

/* =========================
   ÉCOUTEURS
========================= */

// projets
projectButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showProject(btn.dataset.project);
  });
});

// home
homeButton.addEventListener("click", goHome);

// about
aboutButton.addEventListener("click", showAbout);
