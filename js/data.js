/*
 * ============================================================
 * CONTENIDO DEL SITIO - editar solo este archivo
 * ============================================================
 * Cuando el cliente entregue su material, reemplaza los valores
 * marcados con "TODO" y las imagenes de /assets/images.
 * Todo el sitio (index.html) se dibuja a partir de este objeto,
 * no hace falta tocar el HTML para actualizar textos o proyectos.
 * ============================================================
 */

const SITE_DATA = {

  company: {
    name: "Contorno Arquitectura",
    shortName: "Contorno",
    // Iniciales para el isotipo del header/footer
    monogram: "CA",
    tagline: "Diseñamos espacios que perduran.",
    heroSubtext:
      "Estudio de arquitectura enfocado en proyectos residenciales, comerciales e interiorismo, con una mirada clara y atemporal.",
    heroImage: "assets/images/hero-fachada.jpg",
    aboutEyebrow: "El estudio",
    aboutTitle: "Arquitectura pensada desde el detalle hasta el conjunto.",
    aboutText:
      "Somos un equipo de arquitectos e interioristas que acompaña cada proyecto desde el primer boceto hasta la entrega final. Creemos en espacios sobrios, funcionales y construidos para durar, adaptados al clima, al uso y a quienes los habitan. TODO: reemplazar con la descripción real del estudio que envíe el cliente.",
    aboutImage: "assets/images/about-estudio.jpg",
  },

  stats: [
    { value: "15+", label: "años de trayectoria" },
    { value: "120+", label: "proyectos entregados" },
    { value: "8", label: "ciudades" },
    { value: "40+", label: "premios y menciones" },
  ],

  services: [
    {
      title: "Arquitectura residencial",
      description:
        "Casas y desarrollos habitacionales diseñados a la medida del terreno y de quienes los habitan.",
    },
    {
      title: "Arquitectura comercial",
      description:
        "Oficinas, retail y espacios de trabajo pensados para la marca y el flujo de las personas.",
    },
    {
      title: "Interiorismo",
      description:
        "Definición de materiales, mobiliario e iluminación para dar continuidad al proyecto arquitectónico.",
    },
    {
      title: "Planeación urbana",
      description:
        "Masterplans y desarrollos de mayor escala, con foco en movilidad y espacio público.",
    },
  ],

  // Categorías usadas para filtrar la galería. El primer valor
  // siempre se usa como el filtro "ver todos".
  categories: ["Todos", "Residencial", "Comercial", "Interiorismo", "Urbanismo"],

  // "size" controla la proporción de la tarjeta en la grilla:
  // "tall" (vertical), "wide" (horizontal) o "" (cuadrada, por defecto).
  projects: [
    {
      id: 1,
      title: "Casa Nogal",
      category: "Residencial",
      location: "Valle de Bravo, México",
      year: 2023,
      image: "assets/images/proyecto-casa-nogal.jpg",
      size: "tall",
    },
    {
      id: 4,
      title: "Casa Basalto",
      category: "Residencial",
      location: "Tepoztlán, México",
      year: 2021,
      image: "assets/images/proyecto-casa-basalto.jpg",
      size: "tall",
    },
    {
      id: 5,
      title: "Plaza Encino",
      category: "Urbanismo",
      location: "Querétaro, México",
      year: 2022,
      image: "assets/images/proyecto-plaza-encino.jpg",
      size: "tall",
    },
    {
      id: 8,
      title: "Corredor Alameda",
      category: "Urbanismo",
      location: "Ciudad de México, México",
      year: 2023,
      image: "assets/images/proyecto-corredor-alameda.jpg",
      size: "tall",
    },
    {
      id: 2,
      title: "Oficinas Distrito Sur",
      category: "Comercial",
      location: "Monterrey, México",
      year: 2022,
      image: "assets/images/proyecto-oficinas-distrito-sur.jpg",
      size: "wide",
    },
    {
      id: 7,
      title: "Estudio Perla",
      category: "Interiorismo",
      location: "Puebla, México",
      year: 2021,
      image: "assets/images/proyecto-estudio-perla.jpg",
      size: "wide",
    },
    {
      id: 3,
      title: "Departamento Lira",
      category: "Interiorismo",
      location: "Ciudad de México, México",
      year: 2023,
      image: "assets/images/proyecto-departamento-lira.jpg",
      size: "",
    },
    {
      id: 6,
      title: "Showroom Arena",
      category: "Comercial",
      location: "Guadalajara, México",
      year: 2020,
      image: "assets/images/proyecto-showroom-arena.jpg",
      size: "",
    },
  ],

  featuredProject: {
    eyebrow: "Proyecto destacado",
    title: "Casa Nogal",
    description:
      "Una casa de un solo nivel organizada alrededor de un patio central de nogales existentes, con muros de tabique aparente y grandes vanos hacia el jardín.",
    location: "Valle de Bravo, México",
    year: 2023,
    image: "assets/images/featured-casa-nogal.jpg",
  },

  contact: {
    // TODO: reemplazar todos los valores de esta sección con los datos reales del cliente
    phoneDisplay: "+52 55 0000 0000",
    phoneHref: "+525500000000",
    email: "contacto@contornoarquitectura.com",
    instagramHandle: "@contorno.arquitectura",
    instagramUrl: "https://instagram.com/contorno.arquitectura",
    address: "Ciudad de México, México",
    ctaText:
      "¿Tienes un proyecto en mente? Escríbenos y cuéntanos en qué estás pensando.",
  },

  nav: [
    { label: "Estudio", href: "#estudio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],

  footer: {
    copyrightName: "Contorno Arquitectura",
  },
};
