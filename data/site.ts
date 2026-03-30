export type MediaTone =
  | "silt"
  | "misato"
  | "motion"
  | "retail"
  | "fragment"
  | "neutral";

export type MediaBlock =
  | {
      type: "full";
      tone: MediaTone;
      label: string;
      caption?: string;
      height?: "tall" | "medium" | "compact";
    }
  | {
      type: "pair";
      items: { tone: MediaTone; label: string; caption?: string }[];
    }
  | {
      type: "detail";
      tone: MediaTone;
      label: string;
      caption: string;
    }
  | {
      type: "diagram";
      tone: MediaTone;
      label: string;
      caption: string;
    }
  | {
      type: "video";
      tone: MediaTone;
      label: string;
      caption: string;
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

export const siteSettings = {
  name: "Conan Richards",
  statement:
    "Designer working across digital and spatial systems, with a focus on fashion and cultural environments, shaped through motion, sound, and atmosphere.",
  infoText:
    "A portfolio structured as a restrained editorial archive for digital, spatial and sensory systems. The work focuses on pacing, hierarchy, atmosphere and deployment across fashion, retail and cultural settings.",
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
    discipline: "Spatial System",
    description:
      "An identity and exhibition environment shaped as a continuous system across signage, moving image, interface and spatial rhythm.",
    year: "2026",
    type: "Exhibition identity",
    tags: ["Spatial", "Identity", "Sound"],
    summary:
      "A spatial and sensory exhibition system with emphasis on continuity across physical and digital layers.",
    heroTone: "silt",
    heroLabel: "Spatial entry sequence",
    intro:
      "SILT organises image, signage, motion and wayfinding into a single paced environment. The emphasis is on consistency under shifting viewing distances and across physical, digital and atmospheric formats.",
    application:
      "The system is positioned through environmental views, directional graphics, display surfaces and timed media states that maintain the same typographic and tonal discipline.",
    blocks: [
      {
        type: "full",
        tone: "silt",
        label: "Threshold environment",
        caption: "Long-form pacing through entry, title and atmospheric media.",
        height: "tall"
      },
      {
        type: "pair",
        items: [
          {
            tone: "neutral",
            label: "Signage family",
            caption: "Directional typography and material restraint."
          },
          {
            tone: "silt",
            label: "Interface surface",
            caption: "Digital support view for schedule and scene control."
          }
        ]
      },
      {
        type: "diagram",
        tone: "neutral",
        label: "System map",
        caption: "Spatial relationships between entry, exhibition, listening and archive zones."
      },
      {
        type: "full",
        tone: "silt",
        label: "Environmental deployment",
        caption: "Identity applied across projection, print and architectural touchpoints.",
        height: "medium"
      },
      {
        type: "detail",
        tone: "neutral",
        label: "Caption logic",
        caption: "Metadata, tonal hierarchy and light-response testing."
      }
    ]
  },
  {
    slug: "misato-yukimoto",
    title: "Misato Yukimoto",
    discipline: "Identity",
    description:
      "A rebrand based on reduction, spacing, subtle variation and disciplined application across digital and physical contexts.",
    year: "2025",
    type: "Brand system",
    tags: ["Fashion", "Typography", "Retail"],
    summary:
      "A fashion identity defined by typographic order, calm spacing and precise deployment.",
    heroTone: "misato",
    heroLabel: "Lookbook and identity field",
    intro:
      "The rebrand is built through reduction. Typography, spacing and image framing do the work, with variation handled through scale, rhythm and material contrast rather than graphic excess.",
    application:
      "Applications include lookbook layouts, social formats, packaging, retail signage and a restrained ecommerce language that preserves the same spacing discipline.",
    blocks: [
      {
        type: "full",
        tone: "misato",
        label: "Brand field",
        caption: "Primary identity with softened contrast and typographic spacing.",
        height: "medium"
      },
      {
        type: "pair",
        items: [
          {
            tone: "neutral",
            label: "Grid specification",
            caption: "Alignment rules for editorial and retail outputs."
          },
          {
            tone: "misato",
            label: "Digital commerce",
            caption: "Product and campaign layouts built on the same spacing system."
          }
        ]
      },
      {
        type: "full",
        tone: "misato",
        label: "Retail placement",
        caption: "Quiet application across mirror vinyl, tags and material sampling.",
        height: "tall"
      },
      {
        type: "detail",
        tone: "neutral",
        label: "Guideline fragment",
        caption: "Wordmark spacing, image ratio and caption hierarchy."
      }
    ]
  },
  {
    slug: "moving-image-sound",
    title: "Moving Image + Sound",
    discipline: "Motion + Sound",
    description:
      "Art direction for moving image and sound treated as a single pacing system with user-triggered sonic layers.",
    year: "2025",
    type: "Motion + sound system",
    tags: ["Motion", "Audio", "Rhythm"],
    summary:
      "A project centred on atmosphere, rhythm and the relationship between image timing and sonic structure.",
    heroTone: "motion",
    heroLabel: "Sequence still",
    intro:
      "This project presents motion and sound as a shared compositional field. The interface remains still and quiet while the media demonstrates pacing, interval, density and release.",
    application:
      "The system is shown through short loops, frame studies, timing diagrams and interface placements where sound remains deliberate and user-triggered.",
    blocks: [
      {
        type: "video",
        tone: "motion",
        label: "Motion loop",
        caption: "Muted by default. Structured around interval, fade and image hold."
      },
      {
        type: "pair",
        items: [
          {
            tone: "neutral",
            label: "Frame study",
            caption: "Held image, blur transition and pacing notes."
          },
          {
            tone: "motion",
            label: "Sound trigger state",
            caption: "User-controlled sonic layer with minimal control treatment."
          }
        ]
      },
      {
        type: "diagram",
        tone: "neutral",
        label: "Timing diagram",
        caption: "Durational structure across image, typography and sound."
      },
      {
        type: "full",
        tone: "motion",
        label: "Screen environment",
        caption: "Motion deployed within a believable spatial and cultural context.",
        height: "medium"
      }
    ]
  },
  {
    slug: "fashion-retail-context",
    title: "Fashion / Retail Context",
    discipline: "Retail Context",
    description:
      "A public-facing identity system translated across campaign surfaces, audience scale and environmental touchpoints.",
    year: "2024",
    type: "Context system",
    tags: ["Retail", "Spatial", "Culture"],
    summary:
      "A project bridging identity concept and lived deployment across fashion and retail environments.",
    heroTone: "retail",
    heroLabel: "Campaign environment",
    intro:
      "This work is structured around context. Identity is tested against audience movement, storefront conditions, social circulation and physical encounter rather than isolated graphic presentation.",
    application:
      "Views prioritise wider environmental framing, signage, campaign rollouts, interface touchpoints and how the system behaves under public use.",
    blocks: [
      {
        type: "full",
        tone: "retail",
        label: "Storefront condition",
        caption: "Street-facing application with public scale and audience movement.",
        height: "tall"
      },
      {
        type: "pair",
        items: [
          {
            tone: "retail",
            label: "Campaign surface",
            caption: "Identity translated across glass, display and social circulation."
          },
          {
            tone: "neutral",
            label: "Touchpoint detail",
            caption: "Ticketing, event notices and interface placement."
          }
        ]
      },
      {
        type: "full",
        tone: "retail",
        label: "Audience-scale view",
        caption: "Context shown through distance, proportion and dwell time.",
        height: "medium"
      },
      {
        type: "detail",
        tone: "neutral",
        label: "Consistency check",
        caption: "System behaviour across mobile, print and environmental graphics."
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
