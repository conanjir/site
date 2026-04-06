export type MediaTone =
  | "silt"
  | "misato"
  | "motion"
  | "retail"
  | "fragment"
  | "neutral";

export type MediaSurface = "tone" | "page" | "paper" | "ink";
export type MediaFit = "cover" | "contain";
export type MediaDisplay = "full" | "wide" | "medium" | "narrow";
export type MediaAlign = "left" | "center" | "right";

export type MediaAsset = {
  kind: "image" | "video";
  src: string;
  width: number;
  height: number;
  fit?: MediaFit;
  display?: MediaDisplay;
  align?: MediaAlign;
  surface?: MediaSurface;
  objectPosition?: string;
};

type ProjectMediaEntry = {
  tone: MediaTone;
  label: string;
  caption?: string;
  media: MediaAsset;
};

export type MediaBlock =
  | (ProjectMediaEntry & {
      type: "full";
      height?: "tall" | "medium" | "compact";
    })
  | {
      type: "pair";
      items: ProjectMediaEntry[];
    }
  | (ProjectMediaEntry & {
      type: "detail" | "diagram" | "video";
    });

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
  intro: string;
  application: string;
  blocks: MediaBlock[];
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
    ...options
  };
}

const siltMedia = {
  hero: video("/videos/silt-mainvideo.mp4", 1920, 1080, {
    fit: "cover",
    display: "full",
    surface: "ink"
  }),
  splash: image("/images/silt/silt_splash.png", 4299, 5622, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  billboard: image("/images/silt/silt_billboard.png", 7879, 5365, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  web: image("/images/silt/silt_web.png", 1920, 1080, {
    fit: "contain",
    display: "wide",
    surface: "page"
  }),
  socials: image("/images/silt/silt_socials.png", 1553, 959, {
    fit: "contain",
    display: "wide",
    surface: "page"
  }),
  poster: image("/images/silt/silt_poster.png", 7321, 4770, {
    fit: "contain",
    display: "wide",
    surface: "page"
  }),
  ticket: image("/images/silt/silt_ticket.png", 1920, 1080, {
    fit: "contain",
    display: "wide",
    surface: "page"
  })
};

const myMedia = {
  logo: image("/images/my/my_logo.jpg", 5897, 5897, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  ab1: image("/images/my/my_ab1.jpg", 2561, 3201, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  ab2: image("/images/my/my_ab2.jpg", 2561, 3201, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  ab3: image("/images/my/my_ab3.jpg", 2561, 3201, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  ab4: image("/images/my/my_ab4.jpg", 3601, 4801, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  bb1: image("/images/my/my_bb1.jpg", 3601, 4801, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  bb2: image("/images/my/my_bb2.jpg", 3601, 4801, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  bb3: image("/images/my/my_bb3.jpg", 3600, 4801, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  bb4: image("/images/my/my_bb4.jpg", 3601, 4801, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  bb5: image("/images/my/my_bb5.jpg", 3601, 4801, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  businesscard: image("/images/my/my_businesscard.jpg", 4000, 3000, {
    fit: "contain",
    display: "wide",
    surface: "page"
  }),
  label1: image("/images/my/my_label1.jpg", 586, 780, {
    fit: "contain",
    display: "full",
    surface: "page"
  }),
  label2: image("/images/my/my_label2.jpg", 585, 439, {
    fit: "contain",
    display: "wide",
    surface: "page"
  })
};

const foamMedia = {
  frame1: image("/images/foam/foam_1.png", 3456, 1944, {
    fit: "cover",
    display: "full",
    surface: "ink"
  }),
  frame2: image("/images/foam/foam_2.png", 3456, 1944, {
    fit: "contain",
    display: "full",
    surface: "ink"
  }),
  frame3: image("/images/foam/foam_3.png", 3456, 1944, {
    fit: "contain",
    display: "full",
    surface: "ink"
  }),
  frame4: image("/images/foam/foam_4.png", 3456, 1944, {
    fit: "contain",
    display: "wide",
    surface: "ink"
  }),
  frame5: image("/images/foam/foam_5.png", 3456, 1944, {
    fit: "contain",
    display: "full",
    surface: "ink"
  }),
  frame6: image("/images/foam/foam_6.png", 3456, 1944, {
    fit: "contain",
    display: "full",
    surface: "ink"
  })
};

const constellationsMedia = {
  hero: image("/images/constellations/constellations_event.jpeg", 3859, 5028, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  aframe: image("/images/constellations/constellations_aframe.jpeg", 3859, 5028, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  dj: image("/images/constellations/constellations_dj.jpeg", 3859, 5028, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  misato: image("/images/constellations/constellations_misatoyukimoto.jpeg", 3859, 5028, {
    fit: "contain",
    display: "narrow",
    surface: "page"
  }),
  video: video("/videos/constellations.mp4", 1080, 1920, {
    fit: "contain",
    display: "medium",
    surface: "ink"
  })
};

export const siteSettings = {
  name: "Conan Richards",
  statement:
    "Designer working across digital, spatial and visual systems, with a focus on fashion and cultural environments.",
  infoText:
    "The practice centres on systems that organise how information, image, and space are experienced. Projects operate across interfaces, moving image, and spatial contexts, forming cohesive environments and visual languages that extend across formats and contexts.",
  email: "studio@conanrichards.com",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Are.na", href: "#" },
    { label: "LinkedIn", href: "#" }
  ]
};

export const projects: Project[] = [
  {
    slug: "silt",
    title: "SILT",
    discipline: "Exhibition Concept",
    description:
      "An exhibition concept built as a continuous identity across moving image, interface, print and environmental scale.",
    year: "2026",
    type: "Exhibition identity",
    tags: ["Spatial", "Identity", "Sound"],
    summary:
      "A sensory exhibition system carried across moving image, spatial graphics and supporting campaign matter.",
    heroTone: "silt",
    heroLabel: "Main film",
    heroMedia: siltMedia.hero,
    intro:
      "SILT organises image, signage, motion and wayfinding into a single paced environment. The emphasis is on continuity under shifting viewing distances and across physical, digital and atmospheric formats.",
    application:
      "The sequence moves between the main film, large-scale environmental views and supporting campaign pieces so the system reads as one atmosphere rather than a set of isolated outputs.",
    blocks: [
      {
        type: "full",
        tone: "silt",
        label: "Identity splash",
        media: siltMedia.splash,
        height: "tall"
      },
      {
        type: "full",
        tone: "silt",
        label: "Billboard",
        media: siltMedia.billboard,
        height: "medium"
      },
      {
        type: "pair",
        items: [
          {
            tone: "silt",
            label: "Website",
            media: siltMedia.web
          },
          {
            tone: "silt",
            label: "Socials",
            media: siltMedia.socials
          }
        ]
      },
      {
        type: "full",
        tone: "silt",
        label: "Poster",
        media: siltMedia.poster,
        height: "medium"
      },
      {
        type: "detail",
        tone: "silt",
        label: "Ticket",
        media: siltMedia.ticket
      }
    ]
  },
  {
    slug: "misato-yukimoto",
    title: "Misato Yukimoto",
    discipline: "Brand Identity",
    description:
      "A rebrand built through typographic restraint, quiet spacing and deliberate application across image and packaging.",
    year: "2025",
    type: "Brand system",
    tags: ["Fashion", "Typography", "Retail"],
    summary:
      "A fashion identity defined by reduced typography, calm spacing and consistent material treatment.",
    heroTone: "misato",
    heroLabel: "Portrait 01",
    heroMedia: myMedia.ab1,
    intro:
      "The rebrand is built through reduction. Typography, spacing and image framing do the work, with variation handled through scale, rhythm and material contrast rather than graphic excess.",
    application:
      "The project is shown through campaign imagery, printed matter and garment labels, keeping the same spacing discipline across digital and physical touchpoints.",
    blocks: [
      {
        type: "full",
        tone: "misato",
        label: "Campaign portrait",
        media: myMedia.ab1,
        height: "tall"
      },
      {
        type: "pair",
        items: [
          {
            tone: "misato",
            label: "Portrait 02",
            media: myMedia.ab2
          },
          {
            tone: "misato",
            label: "Portrait 03",
            media: myMedia.ab3
          }
        ]
      },
      {
        type: "pair",
        items: [
          {
            tone: "misato",
            label: "Portrait 04",
            media: myMedia.ab4
          },
          {
            tone: "misato",
            label: "Business card",
            media: myMedia.businesscard
          }
        ]
      },
      {
        type: "pair",
        items: [
          {
            tone: "misato",
            label: "Lookbook 01",
            media: myMedia.bb1
          },
          {
            tone: "misato",
            label: "Lookbook 02",
            media: myMedia.bb2
          }
        ]
      },
      {
        type: "pair",
        items: [
          {
            tone: "misato",
            label: "Lookbook 03",
            media: myMedia.bb3
          },
          {
            tone: "misato",
            label: "Lookbook 04",
            media: myMedia.bb4
          }
        ]
      },
      {
        type: "pair",
        items: [
          {
            tone: "misato",
            label: "Lookbook 05",
            media: myMedia.bb5
          },
          {
            tone: "misato",
            label: "Woven label",
            media: myMedia.label1
          }
        ]
      },
      {
        type: "detail",
        tone: "misato",
        label: "Care label",
        media: myMedia.label2
      }
    ]
  },
  {
    slug: "foam",
    title: "foam",
    discipline: "Short Film",
    description:
      "A one-minute short film shaped through restrained pacing, low light and intimate atmospheric detail.",
    year: "2025",
    type: "Short film",
    tags: ["Film", "Atmosphere", "Rhythm"],
    summary:
      "A one-minute short film focused on close framing, suspended pacing and a soft tonal register.",
    heroTone: "motion",
    heroLabel: "Frame 01",
    heroMedia: foamMedia.frame1,
    intro:
      "foam is a one-minute short film built through held frames, soft transitions and a close attention to texture. The pacing stays spare so shifts in focus, light and distance carry the emotional weight.",
    application:
      "The project is presented through still frames rather than explanation-heavy diagrams, keeping the sequence close to the film's own sense of drift and suspension.",
    blocks: [
      {
        type: "pair",
        items: [
          {
            tone: "motion",
            label: "Frame 02",
            media: foamMedia.frame2
          },
          {
            tone: "motion",
            label: "Frame 03",
            media: foamMedia.frame3
          }
        ]
      },
      {
        type: "full",
        tone: "motion",
        label: "Frame 04",
        media: foamMedia.frame4,
        height: "medium"
      },
      {
        type: "pair",
        items: [
          {
            tone: "motion",
            label: "Frame 05",
            media: foamMedia.frame5
          },
          {
            tone: "motion",
            label: "Frame 06",
            media: foamMedia.frame6
          }
        ]
      }
    ]
  },
  {
    slug: "constellations",
    title: "constellations",
    discipline: "Campaign Event",
    description:
      "A campaign event framed through signage, crowd movement, live performance and the images left behind afterward.",
    year: "2024",
    type: "Campaign event",
    tags: ["Event", "Fashion", "Culture"],
    summary:
      "An event project balancing invitation, atmosphere and audience-facing documentation.",
    heroTone: "retail",
    heroLabel: "Event floor",
    heroMedia: constellationsMedia.hero,
    intro:
      "constellations was designed as a campaign event where identity needed to hold across arrival, performance and the informal circulation of guest imagery. The work reads through atmosphere as much as through fixed branding.",
    application:
      "The sequence moves between audience views, event signage and a vertical film fragment so the project stays grounded in how the event was actually encountered.",
    blocks: [
      {
        type: "video",
        tone: "retail",
        label: "Event film",
        media: constellationsMedia.video
      },
      {
        type: "pair",
        items: [
          {
            tone: "retail",
            label: "A-frame",
            media: constellationsMedia.aframe
          },
          {
            tone: "retail",
            label: "DJ set",
            media: constellationsMedia.dj
          }
        ]
      },
      {
        type: "full",
        tone: "retail",
        label: "Guest portrait",
        media: constellationsMedia.misato,
        height: "tall"
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
