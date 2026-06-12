import type { Dictionary } from "./bg";

const es: Dictionary = {
  meta: {
    title: "Epicgram — La historia, cobrando vida en pantalla",
    description:
      "Epicgram convierte las historias más fascinantes del pasado en cortometrajes — batallas, misterios, imperios y las personas que cambiaron el mundo.",
  },
  nav: {
    how: "Cómo funciona",
    categories: "Categorías",
    films: "Películas",
    testimonials: "Opiniones",
    pricing: "Precios",
    cta: "Ver gratis",
  },
  hero: {
    badge: "Cortometrajes · la historia cobra vida",
    titleLine1: "La historia,",
    titleLine2: "cobrando vida en pantalla",
    subtitle:
      "Epicgram convierte las historias más fascinantes del pasado en cortometrajes — batallas, misterios, imperios y las personas que cambiaron el mundo. Todo en un solo lugar.",
    rating: "4.8 ★ · más de 10.000 descargas",
    note: "Gratis con anuncios · Premium sin anuncios",
    featuredTag: "Destacado",
    featuredTitle: "La caída de Constantinopla",
    featuredDuration: "9 min",
  },
  stores: {
    available: "Disponible en iOS y Android",
    appStore: { line1: "Descárgalo en", line2: "App Store" },
    googlePlay: { line1: "Disponible en", line2: "Google Play" },
  },
  categories: {
    titlePre: "Historias que ",
    titleAccent: "no podrás dejar de ver",
    subtitle: "Cada categoría es un portal a un mundo diferente del pasado.",
    comingSoon: "Próximamente más categorías",
    items: [
      {
        title: "Batallas épicas",
        desc: "Adéntrate en el campo de batalla — de las Termópilas a Stalingrado, contado plano a plano.",
      },
      {
        title: "Misterios criminales",
        desc: "Casos sin resolver, crímenes audaces e historias que la policía nunca cerró.",
      },
      {
        title: "Atracos del siglo",
        desc: "Los robos más atrevidos, estafas y falsificadores que engañaron al mundo entero.",
      },
      {
        title: "El auge de las empresas",
        desc: "Cómo nace un imperio — del garaje a una marca global, y el drama del camino.",
      },
      {
        title: "Los grandes fracasos",
        desc: "Cómo caen los gigantes — Nokia, Kodak, Enron y las lecciones de su caída.",
      },
      {
        title: "Civilizaciones perdidas",
        desc: "Pompeya, los mayas, la Atlántida — grandeza devorada por el tiempo.",
      },
      {
        title: "Figuras legendarias",
        desc: "Genios, rebeldes y gobernantes cuyas decisiones cambiaron el curso de la historia.",
      },
      {
        title: "Espías y operaciones secretas",
        desc: "La Guerra Fría, agentes dobles y misiones ocultas en los libros de texto.",
      },
      {
        title: "Grandes expediciones",
        desc: "Colón, Magallanes, la Antártida — viajes más allá del mundo conocido.",
      },
      {
        title: "Desastres y catástrofes",
        desc: "Titanic, Chernóbil, el Hindenburg — los momentos en que todo cambió.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos para un viaje en el tiempo",
    steps: [
      {
        title: "Elige una historia",
        desc: "Explora una biblioteca de relatos fascinantes — organizados por tema y época.",
      },
      {
        title: "Mira la película",
        desc: "Cada historia cobra vida como un cortometraje cinematográfico con narración y ambiente.",
      },
      {
        title: "Sumérgete en el pasado",
        desc: "5–10 minutos al día. Aprende, disfruta y ve la historia como nunca antes.",
      },
    ],
  },
  films: {
    title: "Películas destacadas",
    subtitle: "Cortas, cinematográficas y basadas en hechos reales.",
    viewAll: "Ver toda la biblioteca →",
    items: [
      { tag: "Batalla épica", title: "Los últimos 300 en las Termópilas", meta: "8 min · 480 a. C." },
      { tag: "Misterio criminal", title: "El atraco del siglo en Amberes", meta: "6 min · 2003" },
      { tag: "Historia de negocios", title: "Cómo Nokia perdió el futuro", meta: "7 min · 2007" },
    ],
  },
  testimonials: {
    titlePre: "Los espectadores ya están ",
    titleAccent: "enganchados",
    items: [
      {
        quote:
          "Es como ver una miniserie cada noche. Aprendo más historia en 8 minutos que en una hora de lectura.",
        name: "Martín K.",
        role: "Usuario temprano",
      },
      {
        quote:
          "El estilo visual es increíble. Las historias de crímenes son sumamente adictivas.",
        name: "Elena D.",
        role: "Aficionada a la historia",
      },
      {
        quote:
          "Perfecto para mis alumnos — por fin historia que mantiene su atención.",
        name: "Sr. Todorov",
        role: "Profesor de historia",
      },
    ],
  },
  pricing: {
    eyebrow: "Planes",
    title: "Mira gratis o sin anuncios",
    subtitle: "Empieza gratis. Pasa a Premium cuando quieras.",
    plans: [
      {
        name: "Gratis",
        price: "$0",
        period: "",
        badge: "",
        tagline: "Toda la historia, con breves anuncios entre episodios.",
        cta: "Descargar gratis",
        features: [
          "Acceso a todas las series",
          "Nuevos episodios cada semana",
          "Anuncios entre episodios",
          "Mira en teléfono y tableta",
        ],
      },
      {
        name: "Premium Mensual",
        price: "$9.99",
        period: "/ mes",
        badge: "",
        tagline: "Una experiencia limpia y sin interrupciones, con extras.",
        cta: "Hazte Premium",
        features: [
          "Todo lo de Gratis",
          "Sin anuncios",
          "Descargas sin conexión",
          "Acceso anticipado a nuevas series",
          "Calidad HD",
        ],
      },
      {
        name: "Premium Anual",
        price: "$59.99",
        period: "/ año",
        badge: "Ahorra 50%",
        tagline: "Igual que Premium, por menos de $5 al mes.",
        cta: "Elegir plan anual",
        features: [
          "Todo lo de Premium",
          "Solo ~$5 al mes",
          "Ahorra más de $59 al año",
          "Sin anuncios",
          "Soporte prioritario",
        ],
      },
    ],
    note: "Cancela cuando quieras. Sin cargos ocultos.",
  },
  cta: {
    titlePre: "¿Listo para ",
    titleAccent: "viajar en el tiempo?",
    subtitle:
      "Descarga Epicgram gratis y empieza a ver tu primera serie hoy mismo.",
    note: "Gratis con anuncios · Premium sin anuncios",
  },
  footer: {
    how: "Cómo funciona",
    films: "Películas",
    contact: "Contacto",
  },
};

export default es;
