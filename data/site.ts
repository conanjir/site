export type MediaTone =
  | "silt"
  | "misato"
  | "motion"
  | "retail"
  | "fragment"
  | "neutral";

export type MediaSurface = "tone" | "page" | "ink";
export type MediaFit = "cover" | "contain";
export type MediaDisplay = "full" | "wide" | "medium" | "narrow";

export type MediaAsset = {
  kind: "image" | "video" | "embed";
  src: string;
  width: number;
  height: number;
  fit?: MediaFit;
  display?: MediaDisplay;
  surface?: MediaSurface;
  objectPosition?: string;
};

export type ProjectMedia = {
  label: string;
  media: MediaAsset;
};

export type Project = {
  slug: string;
  title: string;
  discipline: string;
  description: string;
  year: string;
  type: string;
  tags: string[];
  summary: string;
  heroTone: MediaTone;
  heroLabel: string;
  heroMedia: MediaAsset;
  carouselIntro?: ProjectMedia;
  intro: string;
  application: string;
  media: ProjectMedia[];
};

export type Fragment = {
  slug: string;
  title: string;
  medium: string;
  year: string;
  tone: MediaTone;
  aspect: "portrait" | "square" | "landscape" | "tall";
};

function image(
  src: string,
  width: number,
  height: number,
  options: Omit<MediaAsset, "kind" | "src" | "width" | "height"> = {}
): MediaAsset {
  return {
    kind: "image",
    src,
    width,
    height,
    fit: "contain",
    surface: "page",
    ...options
  };
}

function video(
  src: string,
  width: number,
  height: number,
  options: Omit<MediaAsset, "kind" | "src" | "width" | "height"> = {}
): MediaAsset {
  return {
    kind: "video",
    src,
    width,
    height,
    fit: "contain",
    surface: "ink",
    ...options
  };
}

function embed(
  src: string,
  width: number,
  height: number,
  options: Omit<MediaAsset, "kind" | "src" | "width" | "height"> = {}
): MediaAsset {
  return {
    kind: "embed",
    src,
    width,
    height,
    fit: "contain",
    surface: "ink",
    ...options
  };
}

const siltMedia = {
  hero: video("/videos/silt-mainvideo.mp4#t=20", 1920, 1080, {
    fit: "cover",
    display: "full"
  }),
  splash: image("/images/silt/silt_splash.png", 1920, 1080, {
    display: "full"
  }),
  billboard: image("/images/silt/silt_billboard.png", 7879, 5365, {
    display: "medium"
  }),
  web: image("/images/silt/silt_web.png", 1355, 1042, {
    display: "medium"
  }),
  socials: image("/images/silt/silt_socials.png", 1553, 959, {
    display: "medium"
  }),
  poster: image("/images/silt/silt_poster.png", 7321, 4770, {
    display: "medium"
  }),
  ticket: image("/images/silt/silt_ticket.png", 1920, 1080, {
    display: "medium"
  }),
  publication: image("/images/silt/silt_publication.png", 1920, 1080, {
    display: "medium"
  }),
  particles: image("/images/silt/silt_particles.png", 4299, 3086, {
    display: "medium"
  })
};

const myMedia = {
  logo: image("/images/my/my_logo.png", 22859, 3266, {
    display: "full"
  }),
  ab1: image("/images/my/my_ab1.jpg", 2560, 3200, {
    display: "full"
  }),
  ab2: image("/images/my/my_ab2.jpg", 2560, 3200, {
    display: "full"
  }),
  ab3: image("/images/my/my_ab3.jpg", 2560, 3200, {
    display: "full"
  }),
  ab4: image("/images/my/my_ab4.jpg", 3601, 4801, {
    display: "full"
  }),
  bb1: image("/images/my/my_bb1.jpg", 3601, 4801, {
    display: "full"
  }),
  bb2: image("/images/my/my_bb2.jpg", 3601, 4801, {
    display: "full"
  }),
  bb3: image("/images/my/my_bb3.jpg", 3600, 4801, {
    display: "full"
  }),
  bb4: image("/images/my/my_bb4.jpg", 3601, 4801, {
    display: "full"
  }),
  bb5: image("/images/my/my_bb5.jpg", 3601, 4801, {
    display: "full"
  }),
  poster: image("/images/my/my_popup.png", 3150, 3938, {
    display: "full"
  }),
  guidelines1: image("/images/my/my_guidelines1.png", 4271, 3335, {
    display: "full"
  }),
  guidelines2: image("/images/my/my_guidelines2.png", 4271, 3335, {
    display: "full"
  }),
  guidelines3: image("/images/my/my_guidelines3.png", 4271, 3335, {
    display: "full"
  }),
  businesscard: image("/images/my/my_businesscard.jpg", 4000, 3000, {
    display: "wide"
  }),
  label1: image("/images/my/my_label1.jpg", 586, 780, {
    display: "wide"
  }),
  label2: image("/images/my/my_label2.jpg", 585, 439, {
    display: "wide"
  })
};

const foamMedia = {
  film: embed(
    "https://player.vimeo.com/video/1079810161?autopause=0&badge=0&title=0&byline=0&portrait=0&vimeo_logo=0&dnt=1&progress_bar=0&fullscreen=0&pip=0&quality_selector=0&speed=0&watch_full_video=0&chapters=0&cc=0&transcript=0",
    1920,
    1080,
    {
    display: "wide"
    }
  ),
  frame1: image("/images/foam/foam_1.png", 3456, 1944, {
    display: "wide",
    surface: "ink"
  }),
  frame2: image("/images/foam/foam_2.png", 3456, 1944, {
    display: "wide",
    surface: "ink"
  }),
  frame3: image("/images/foam/foam_3.png", 3456, 1944, {
    display: "wide",
    surface: "ink"
  }),
  frame4: image("/images/foam/foam_4.png", 3456, 1944, {
    display: "wide",
    surface: "ink"
  }),
  frame5: image("/images/foam/foam_5.png", 3456, 1944, {
    display: "wide",
    surface: "ink"
  }),
  frame6: image("/images/foam/foam_6.png", 3456, 1944, {
    display: "wide",
    surface: "ink"
  })
};

const constellationsMedia = {
  hero: image("/images/constellations/constellations_event.jpeg", 3859, 5028, {
    display: "narrow"
  }),
  aframe: image("/images/constellations/constellations_aframe.jpeg", 3859, 5028, {
    display: "narrow"
  }),
  dj: image("/images/constellations/constellations_dj.jpeg", 3859, 5028, {
    display: "narrow"
  }),
  misato: image("/images/constellations/constellations_misatoyukimoto.jpeg", 3859, 5028, {
    display: "narrow"
  }),
  video: video("/videos/constellations.mp4", 1080, 1920, {
    display: "medium"
  })
};

const mimeverseMedia = {
  hero: image("/images/mimeverse/mimeverse_wide.jpg", 3454, 1994, {
    fit: "cover",
    display: "full"
  }),
  mobile: image("/images/mimeverse/mimeverse_mobile.jpg", 1179, 2556, {
    display: "narrow"
  }),
  exhibit: image("/images/mimeverse/mimeverse_exhibit.jpeg", 4032, 3024, {
    display: "wide"
  }),
  zoom: image("/images/mimeverse/mimeverse_zoom.jpg", 1402, 930, {
    display: "medium"
  }),
  demos: image("/images/mimeverse/mimeverse_demos.jpg", 1392, 917, {
    display: "medium"
  })
};

export const siteSettings = {
  name: "Conan Richards",
  statement:
    "Designer working across digital, spatial and visual systems, with a focus on fashion and cultural environments.",
  infoText:
    "The practice centres on systems that organise how information, image, and space are experienced. Projects operate across interfaces, moving image, and spatial contexts, forming cohesive environments and visual languages that extend across formats and contexts.",
  email: "conanjrichards@gmail.com",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Are.na", href: "#" },
    { label: "LinkedIn", href: "#" }
  ]
};

export const projects: Project[] = [
  {
    slug: "mimeverse",
    title: "mimeverse",
    discipline: "Interactive Systems & Digital Identity",
    description:
      "A participatory web-based simulation exploring mimesis in digital contexts, where copying shifts from imitation to generative process.",
    year: "2025",
    type: "Interactive simulation",
    tags: ["Systems", "Identity", "Participation"],
    summary:
      "A shared Conway's Game of Life simulation where copying becomes a generative, collective design process.",
    heroTone: "neutral",
    heroLabel: "Shared grid",
    heroMedia: mimeverseMedia.hero,
    intro:
      "A participatory web-based simulation exploring mimesis in digital contexts, where copying shifts from imitation to generative process. Built on Conway’s Game of Life, the project enables users to input formations into a shared, evolving grid, producing a collective system driven by rule-based transformation and emergent behaviour. Each interaction contributes to a living visual ecology, reframing authorship as distributed and procedural rather than individual. The work positions the designer as a system architect, constructing conditions for continuous replication, mutation, and co-creation",
    application:
      "Participants accessed the system via their own devices, typically by scanning a QR code and entering a shared live canvas. From their phones, they could place small formations onto a central grid, choosing position and orientation through a minimal interface. Once placed, these inputs were not static. They immediately became subject to the system’s cellular rules, evolving, colliding with others, stabilising, or dissolving over time. Each user was assigned a distinct colour, allowing their contribution to be briefly identifiable before it was absorbed into the larger system. The experience was both direct and indirect. Users acted intentionally, but outcomes were unpredictable, shaped by the interaction between human input and autonomous simulation. Exhibited at Victorian College of the Arts Final Year Exhibition, 2025.",
    media: [
      {
        label: "Mobile view",
        media: mimeverseMedia.mobile
      },
      {
        label: "Exhibition view",
        media: mimeverseMedia.exhibit
      },
      {
        label: "Grid detail",
        media: mimeverseMedia.zoom
      },
      {
        label: "Interface demos",
        media: mimeverseMedia.demos
      }
    ]
  },
  {
    slug: "silt",
    title: "SILT",
    discipline: "Spatial System & Identity",
    description:
      "A flexible identity system developed for a conceptual festival brief.",
    year: "2025",
    type: "Exhibition identity",
    tags: ["Spatial", "Identity", "Sound"],
    summary:
      "A living identity system shaped by breath, material, rhythm, and adaptive application.",
    heroTone: "silt",
    heroLabel: "Main film",
    heroMedia: siltMedia.hero,
    intro:
      "A flexible identity system developed for a conceptual festival brief. Silt: An Index of Sensory Archives is an interoceptive festival — an immersive environment composed through breath, material, and rhythm.",
    application:
      "The branding system responds to the work it houses: adaptive across applications, atmospheric in register, shaped by the logic of accumulation and erosion rather than fixed form. The identity operates as a living system, shifting with context while holding coherence across spatial, print, and digital formats.",
    media: [
      {
        label: "Identity splash",
        media: siltMedia.splash
      },
      {
        label: "Billboard",
        media: siltMedia.billboard
      },
      {
        label: "Website",
        media: siltMedia.web
      },
      {
        label: "Socials",
        media: siltMedia.socials
      },
      {
        label: "Poster",
        media: siltMedia.poster
      },
      {
        label: "Ticket",
        media: siltMedia.ticket
      },
      {
        label: "Publication",
        media: siltMedia.publication
      },
      {
        label: "Particles",
        media: siltMedia.particles
      }
    ]
  },
  {
    slug: "misato-yukimoto",
    title: "Misato Yukimoto",
    discipline: "Visual Identity & System",
    description:
      "A visual identity developed to realign the label's creative direction — reestablishing coherence without losing the quiet character the brand had built.",
    year: "2024",
    type: "Brand system",
    tags: ["Fashion", "Typography", "Retail"],
    summary:
      "A fashion identity system built around iteration, continuation, and quiet continuity across formats.",
    heroTone: "misato",
    heroLabel: "Portrait 01",
    heroMedia: myMedia.bb2,
    carouselIntro: {
      label: '"misato yukimoto" - Conan Richards',
      media: myMedia.logo
    },
    intro:
      "A visual identity developed to realign the label's creative direction — reestablishing coherence without losing the quiet character the brand had built.",
    application:
      "The three dots at the centre of the mark carry the logic of the whole: iteration, continuation, a pause held in form. Applied across garment labels, print, and campaign contexts, the system holds its character across scales and formats.",
    media: [
      {
        label: "Lookbook 04",
        media: myMedia.bb4
      },
      {
        label: "Lookbook 05",
        media: myMedia.bb5
      },
      {
        label: "Portrait 02",
        media: myMedia.ab2
      },
      {
        label: "Portrait 03",
        media: myMedia.ab3
      },
      {
        label: "Portrait 04",
        media: myMedia.ab4
      },
      {
        label: "Woven label",
        media: myMedia.label1
      },
      {
        label: "Care label",
        media: myMedia.label2
      },
      {
        label: "Business card",
        media: myMedia.businesscard
      },
      {
        label: "Pop-up Poster",
        media: myMedia.poster
      },
      {
        label: "Guidelines 01",
        media: myMedia.guidelines1
      },
      {
        label: "Guidelines 02",
        media: myMedia.guidelines2
      },
      {
        label: "Guidelines 03",
        media: myMedia.guidelines3
      }
    ]
  },
  {
    slug: "foam",
    title: "Foam",
    discipline: "Moving Image & Art Direction",
    description:
      "A short film set within an aging self-service carwash — tracing the deterioration of texture, memory, and touch.",
    year: "2025",
    type: "Moving image",
    tags: ["Film", "Atmosphere", "Rhythm"],
    summary:
      "A short film about cleansing rituals, fluorescent light, and the collapse of preservation into disappearance.",
    heroTone: "motion",
    heroLabel: "Frame 01",
    heroMedia: foamMedia.frame1,
    carouselIntro: {
      label: '"foam" - Conan Richards',
      media: foamMedia.film
    },
    intro:
      "A short film set within an aging self-service carwash — tracing the deterioration of texture, memory, and touch.",
    application:
      "Guided by Tanizaki's reflection on modernity as a cure for darkness, the film visualises the quiet violence of cleansing rituals: foam lingers briefly as a fragile veil before being wiped away by fluorescent light. In this space, preservation becomes indistinguishable from disappearance. Art direction across atmosphere, composition, pacing, and sound.",
    media: [
      {
        label: "Frame 02",
        media: foamMedia.frame2
      },
      {
        label: "Frame 03",
        media: foamMedia.frame3
      },
      {
        label: "Frame 04",
        media: foamMedia.frame4
      },
      {
        label: "Frame 05",
        media: foamMedia.frame5
      },
      {
        label: "Frame 06",
        media: foamMedia.frame6
      }
    ]
  },
  {
    slug: "constellations",
    title: "Constellations",
    discipline: "Event Production & Creative Direction",
    description:
      "A campaign event conceived and directed end-to-end — spanning graphic design, art direction, marketing, and the coordination of photographers, DJs, and creative collaborators.",
    year: "2025",
    type: "Campaign event",
    tags: ["Event", "Fashion", "Culture"],
    summary:
      "An event identity built through atmosphere, movement, and memory as much as fixed branding.",
    heroTone: "retail",
    heroLabel: "Event film",
    heroMedia: constellationsMedia.video,
    intro:
      "A campaign event conceived and directed end-to-end — spanning graphic design, art direction, marketing, and the coordination of photographers, DJs, and creative collaborators.",
    application:
      "Built around the idea that identity at an event lives in atmosphere as much as in fixed branding — in how a space is arrived at, moved through, and remembered afterward.",
    media: [
      {
        label: "Event floor",
        media: constellationsMedia.hero
      },
      {
        label: "A-frame",
        media: constellationsMedia.aframe
      },
      {
        label: "DJ set",
        media: constellationsMedia.dj
      },
      {
        label: "Misato portrait",
        media: constellationsMedia.misato
      }
    ]
  }
];

export const fragments: Fragment[] = [
  { slug: "signal-study", title: "Signal Study", medium: "Loop", year: "2026", tone: "fragment", aspect: "portrait" },
  { slug: "shelf-index", title: "Shelf Index", medium: "Still", year: "2025", tone: "neutral", aspect: "square" },
  { slug: "night-facade", title: "Night Facade", medium: "Frame", year: "2025", tone: "retail", aspect: "tall" },
  { slug: "caption-rhythm", title: "Caption Rhythm", medium: "Type Study", year: "2024", tone: "fragment", aspect: "landscape" },
  { slug: "material-tempo", title: "Material Tempo", medium: "Diagram", year: "2024", tone: "neutral", aspect: "portrait" },
  { slug: "listening-room", title: "Listening Room", medium: "Loop", year: "2023", tone: "motion", aspect: "square" }
];
