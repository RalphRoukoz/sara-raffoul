export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  span?: "full" | "half";
  drawing?: boolean;
};

export type Swatch = {
  name: string;
  note: string;
  hex: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  summary: string;
  statement: string;
  cover: string;
  coverAlt: string;
  coverWidth: number;
  coverHeight: number;
  facts: { label: string; value: string }[];
  shots: Shot[];
  swatches?: Swatch[];
  legend?: { fr: string; en: string }[];
};

export const profile = {
  name: "Sarah Raffoul",
  place: "Fanar, Lebanon",
  role: "Interior architecture",
  email: "sarahraffoul5@gmail.com",
  phone: "+961 70 560 261",
  phoneHref: "tel:+96170560261",
};

export const projects: Project[] = [
  {
    slug: "centre-sportif",
    index: "01",
    title: "Centre sportif",
    kind: "Academic · USEK Architecture",
    summary:
      "A sports centre drawn around an existing building, a glazed extension, and a 650 m² outdoor court.",
    statement:
      "The project keeps the loud part of the program on the court and tucks public rooms under the bleachers. A café can open toward the garden. Recovery, physiotherapy, and a quiet zone sit with the planting and a water court. Upper level, a library and the administration look across a void toward the green.",
    cover: "/images/sport/aerial.jpg",
    coverAlt:
      "Aerial view of a low sports centre, with pale roofs, pines, and two rectangular water courts",
    coverWidth: 2000,
    coverHeight: 1181,
    facts: [
      { label: "Court", value: "650 m² outdoor" },
      { label: "Levels", value: "Basement, ground, upper" },
      { label: "Department", value: "Architecture, USEK" },
      { label: "Drawings", value: "Plans, views, massing" },
    ],
    legend: [
      { fr: "Zone calme", en: "Quiet" },
      { fr: "Zone de détente", en: "Rest" },
      { fr: "Jardin", en: "Garden" },
      { fr: "Zone de jeux", en: "Play" },
      { fr: "Zone bruyante", en: "Noisy" },
    ],
    shots: [
      {
        src: "/images/sport/court.jpg",
        alt: "Perspective of an outdoor basketball court facing a glazed façade under bleachers",
        caption: "Court, and the rooms under the stands",
        width: 947,
        height: 532,
        span: "full",
      },
      {
        src: "/images/sport/bleachers.jpg",
        alt: "Coloured perspective of a café opening onto seating beneath a run of bleachers",
        caption: "Café, able to extend outdoors",
        width: 914,
        height: 514,
        span: "half",
      },
      {
        src: "/images/sport/garden.jpg",
        alt: "View between two walls toward pines and shallow water courts",
        caption: "Garden and water courts",
        width: 914,
        height: 514,
        span: "half",
      },
      {
        src: "/images/sport/elevation.jpg",
        alt: "Line elevation of a glass façade with stairs rising to the bleachers",
        caption: "Elevation toward the court",
        width: 761,
        height: 715,
        span: "half",
      },
      {
        src: "/images/sport/massing.jpg",
        alt: "Axonometric of the building mass, glazed boxes, and planted courts",
        caption: "Massing of the existing building and the extension",
        width: 807,
        height: 363,
        span: "half",
      },
      {
        src: "/images/sport/interior.jpg",
        alt: "Interior elevation looking through glazing toward trees and an open hall",
        caption: "Interior, with a view out to planting",
        width: 1179,
        height: 638,
        span: "full",
      },
      {
        src: "/images/sport/site.png",
        alt: "Site plan with parking, a basketball court, bleachers, and planted blue courts",
        caption: "Site plan",
        width: 1376,
        height: 827,
        span: "full",
      },
      {
        src: "/images/sport/landscape.png",
        alt: "Site plan with the ground-floor rooms furnished inside the building",
        caption: "Ground floor set in the landscape",
        width: 1515,
        height: 833,
        span: "full",
      },
      {
        src: "/images/sport/ground.png",
        alt: "Enlarged ground-floor plan labelled reception, gym, cafeteria, lockers, sauna, and physiotherapy",
        caption: "Ground floor, enlarged",
        width: 764,
        height: 798,
        span: "half",
      },
      {
        src: "/images/sport/court-plan.png",
        alt: "Plan of the outdoor court beside a row of furnished interior rooms",
        caption: "Court beside the interior rooms",
        width: 1523,
        height: 835,
        span: "half",
      },
      {
        src: "/images/sport/level.png",
        alt: "Upper-level plan with furnished rooms and a garden beside the building",
        caption: "Upper level",
        width: 1482,
        height: 841,
        span: "full",
      },
    ],
  },
  {
    slug: "living-room",
    index: "02",
    title: "Living room",
    kind: "Interior study · cameras, plan, elevation",
    summary:
      "One room, read as three cameras, then as a plan and an elevation.",
    statement:
      "The long wall is a run of pale panels over a timber band, broken by a dark fluted bay. A low sofa faces a round table on a brass base. Dusty-rose velvet — a chair and a matching ottoman — is the only strong colour. Oak stays on the floor. The second camera stays with the chair. The third looks down, where the rug, the timber, and a side table meet.",
    cover: "/images/living/cam1.jpg",
    coverAlt:
      "Wide view of a living room with a pale sofa, round brass-based table, and dusty-rose velvet chair",
    coverWidth: 1453,
    coverHeight: 1800,
    facts: [
      { label: "Cameras", value: "Wide, detail, overhead" },
      { label: "Drawings", value: "Plan and elevation" },
      { label: "Accent", value: "Dusty-rose velvet" },
      { label: "Light", value: "Globe pendant, linear slots" },
    ],
    swatches: [
      { name: "Velvet", note: "Chair and ottoman", hex: "#a56b6d" },
      { name: "Oak", note: "Floor", hex: "#c4b39a" },
      { name: "Plaster", note: "Wall panels", hex: "#d5d2cc" },
      { name: "Brass", note: "Table base, pendant", hex: "#c4a574" },
      { name: "Charcoal", note: "Fluted bay", hex: "#2c2c2c" },
    ],
    shots: [
      {
        src: "/images/living/cam1.jpg",
        alt: "Wide living room view with sofa, coffee table, velvet chair, and fluted wall",
        caption: "Camera 01 — the long view",
        width: 1453,
        height: 1800,
        span: "full",
      },
      {
        src: "/images/living/cam2.jpg",
        alt: "Close view of a dusty-rose velvet chair with a grey throw and a globe pendant",
        caption: "Camera 02 — the chair",
        width: 1452,
        height: 1800,
        span: "half",
      },
      {
        src: "/images/living/cam3.jpg",
        alt: "Overhead view of a sofa, black side table, oak floor, and grey rug",
        caption: "Camera 03 — from above",
        width: 1146,
        height: 1117,
        span: "half",
      },
      {
        src: "/images/living/plan.jpg",
        alt: "Furniture plan of the living room with sofa, round table, armchair, ottoman, rug, and window",
        caption: "Plan",
        width: 1800,
        height: 1343,
        span: "half",
        drawing: true,
      },
      {
        src: "/images/living/elevation.jpg",
        alt: "Interior elevation of the living room looking toward the sofa and the paneled feature wall",
        caption: "Elevation",
        width: 2000,
        height: 1130,
        span: "half",
        drawing: true,
      },
    ],
  },
  {
    slug: "bedroom",
    index: "03",
    title: "Bedroom",
    kind: "Interior study · view, plan, elevation",
    summary:
      "A quiet room in oak, linen, and olive, drawn as a view, a plan, and an elevation.",
    statement:
      "The bed sits on a textured rug between two low tables. Behind it, a timber headboard wall is cut by an L-shaped light. An open closet runs the right side, lined with folded linen. The window is full height, with a heavy curtain, so the room takes the day without losing the calm of the palette.",
    cover: "/images/bedroom.jpg",
    coverAlt:
      "Bedroom with a linen-upholstered bed, oak wall, open closet, and a large window",
    coverWidth: 1920,
    coverHeight: 1080,
    facts: [
      { label: "Drawings", value: "Plan and elevation" },
      { label: "Bed", value: "Linen, olive cushions" },
      { label: "Storage", value: "Open closet" },
      { label: "Light", value: "Window and linear sconce" },
    ],
    swatches: [
      { name: "Linen", note: "Bed and headboard", hex: "#cbbba6" },
      { name: "Oak", note: "Wall, floor, closet", hex: "#b08968" },
      { name: "Olive", note: "Cushions and bench", hex: "#5c6148" },
      { name: "Plaster", note: "Upper wall", hex: "#e4ddd2" },
      { name: "Bronze", note: "Curtain", hex: "#6b5344" },
    ],
    shots: [
      {
        src: "/images/bedroom.jpg",
        alt: "Full view of the bedroom from the foot of the bed, with window at left and closet at right",
        caption: "The room, from the foot of the bed",
        width: 1920,
        height: 1080,
        span: "full",
      },
      {
        src: "/images/bedroom-plan.jpg",
        alt: "Furniture plan of the bedroom with bed, nightstands, bench, rug, window, and closet",
        caption: "Plan",
        width: 1800,
        height: 1343,
        span: "half",
        drawing: true,
      },
      {
        src: "/images/bedroom-elevation.jpg",
        alt: "Interior elevation of the bedroom looking toward the headboard wall, window, and closet",
        caption: "Elevation",
        width: 2000,
        height: 1130,
        span: "half",
        drawing: true,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
