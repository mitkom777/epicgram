import type { Dictionary } from "./bg";

const fr: Dictionary = {
  meta: {
    title: "Epicgram — L'Histoire, prend vie à l'écran",
    description:
      "Epicgram transforme les histoires les plus captivantes du passé en courts-métrages — batailles, mystères, empires et ceux qui ont changé le monde.",
  },
  nav: {
    how: "Comment ça marche",
    categories: "Catégories",
    films: "Films",
    testimonials: "Avis",
    pricing: "Tarifs",
    cta: "Regarder gratuitement",
  },
  hero: {
    badge: "Courts-métrages · l'Histoire prend vie",
    titleLine1: "L'Histoire,",
    titleLine2: "prend vie à l'écran",
    subtitle:
      "Epicgram transforme les histoires les plus captivantes du passé en courts-métrages — batailles, mystères, empires et ceux qui ont changé le monde. Tout au même endroit.",
    rating: "4,8 ★ · plus de 10 000 téléchargements",
    note: "Gratuit avec pubs · Premium sans pubs",
    featuredTag: "À la une",
    featuredTitle: "La chute de Constantinople",
    featuredDuration: "9 min",
  },
  stores: {
    available: "Disponible sur iOS et Android",
    appStore: { line1: "Télécharger sur", line2: "App Store" },
    googlePlay: { line1: "Disponible sur", line2: "Google Play" },
  },
  categories: {
    titlePre: "Des histoires que vous ",
    titleAccent: "ne pourrez plus lâcher",
    subtitle: "Chaque catégorie est un portail vers un autre monde du passé.",
    comingSoon: "Plus de catégories bientôt",
    items: [
      {
        title: "Batailles épiques",
        desc: "Entrez sur le champ de bataille — des Thermopyles à Stalingrad, raconté plan par plan.",
      },
      {
        title: "Mystères criminels",
        desc: "Affaires non résolues, crimes audacieux et histoires que la police n'a jamais closes.",
      },
      {
        title: "Casses du siècle",
        desc: "Les vols les plus audacieux, escrocs et faussaires qui ont dupé le monde entier.",
      },
      {
        title: "L'essor des entreprises",
        desc: "Comment naît un empire — du garage à la marque mondiale, et les drames du parcours.",
      },
      {
        title: "Les grands échecs",
        desc: "Comment s'effondrent les géants — Nokia, Kodak, Enron et les leçons de leur chute.",
      },
      {
        title: "Civilisations perdues",
        desc: "Pompéi, les Mayas, l'Atlantide — une grandeur engloutie par le temps.",
      },
      {
        title: "Figures légendaires",
        desc: "Génies, rebelles et souverains dont les décisions ont changé le cours de l'Histoire.",
      },
      {
        title: "Espions & opérations secrètes",
        desc: "La Guerre froide, les agents doubles et les missions absentes des manuels.",
      },
      {
        title: "Grandes expéditions",
        desc: "Colomb, Magellan, l'Antarctique — des voyages au-delà du monde connu.",
      },
      {
        title: "Désastres & catastrophes",
        desc: "Titanic, Tchernobyl, le Hindenburg — les instants où tout a basculé.",
      },
    ],
  },
  how: {
    eyebrow: "Comment ça marche",
    title: "Trois étapes pour voyager dans le temps",
    steps: [
      {
        title: "Choisissez une histoire",
        desc: "Parcourez une bibliothèque de récits captivants — classés par thème et par époque.",
      },
      {
        title: "Regardez le film",
        desc: "Chaque histoire prend vie en un court-métrage cinématographique avec narration et atmosphère.",
      },
      {
        title: "Plongez dans le passé",
        desc: "5 à 10 minutes par jour. Apprenez, savourez et voyez l'Histoire comme jamais.",
      },
    ],
  },
  films: {
    title: "Films à la une",
    subtitle: "Courts, cinématographiques et basés sur des faits réels.",
    viewAll: "Voir toute la bibliothèque →",
    items: [
      { tag: "Bataille épique", title: "Les derniers 300 aux Thermopyles", meta: "8 min · 480 av. J.-C." },
      { tag: "Mystère criminel", title: "Le casse du siècle à Anvers", meta: "6 min · 2003" },
      { tag: "Histoire d'entreprise", title: "Comment Nokia a perdu l'avenir", meta: "7 min · 2007" },
    ],
  },
  testimonials: {
    titlePre: "Les spectateurs sont déjà ",
    titleAccent: "accros",
    items: [
      {
        quote:
          "C'est comme regarder une mini-série chaque soir. J'apprends plus d'Histoire en 8 minutes qu'en une heure de lecture.",
        name: "Martin K.",
        role: "Utilisateur précoce",
      },
      {
        quote:
          "Le style visuel est incroyable. Les histoires criminelles sont carrément addictives.",
        name: "Elena D.",
        role: "Passionnée d'Histoire",
      },
      {
        quote:
          "Parfait pour mes élèves — enfin une Histoire qui capte leur attention.",
        name: "M. Todorov",
        role: "Professeur d'Histoire",
      },
    ],
  },
  pricing: {
    eyebrow: "Forfaits",
    title: "Regardez gratuitement ou sans pubs",
    subtitle: "Commencez gratuitement. Passez à Premium quand vous voulez.",
    plans: [
      {
        name: "Gratuit",
        price: "$0",
        period: "",
        badge: "",
        tagline: "Toute l'Histoire, avec de courtes pubs entre les épisodes.",
        cta: "Télécharger gratuitement",
        features: [
          "Accès à toutes les séries",
          "De nouveaux épisodes chaque semaine",
          "Pubs entre les épisodes",
          "Regardez sur téléphone et tablette",
        ],
      },
      {
        name: "Premium Mensuel",
        price: "$9.99",
        period: "/ mois",
        badge: "",
        tagline: "Une expérience propre et sans interruption, avec des bonus.",
        cta: "Passer Premium",
        features: [
          "Tout le Gratuit",
          "Aucune pub",
          "Téléchargements hors ligne",
          "Accès anticipé aux nouvelles séries",
          "Qualité HD",
        ],
      },
      {
        name: "Premium Annuel",
        price: "$59.99",
        period: "/ an",
        badge: "Économisez 50%",
        tagline: "Comme Premium, pour moins de 5 $ par mois.",
        cta: "Choisir l'annuel",
        features: [
          "Tout le Premium",
          "Seulement ~5 $ par mois",
          "Économisez plus de 59 $ par an",
          "Aucune pub",
          "Support prioritaire",
        ],
      },
    ],
    note: "Annulable à tout moment. Sans frais cachés.",
  },
  cta: {
    titlePre: "Prêt à ",
    titleAccent: "voyager dans le temps ?",
    subtitle:
      "Téléchargez Epicgram gratuitement et regardez votre première série dès aujourd'hui.",
    note: "Gratuit avec pubs · Premium sans pubs",
  },
  footer: {
    how: "Comment ça marche",
    films: "Films",
    contact: "Contact",
  },
};

export default fr;
