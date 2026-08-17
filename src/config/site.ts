export const site = {
  name: "Balló Benedek",
  nick: "devbeni",
  role: "Fullstack Developer",
  location: "Budapest, Magyarország",
  avatar: "/pfp.png",
  url: "https://devbeni.lol",
  intro:
    "Full-stack fejlesztő Budapestről. Webalkalmazásokat, API-kat és mobil appokat építek — leginkább TypeScripttel, Rusttal és Darttal. Szeretem, ha egy termék nemcsak működik, hanem jól is esik használni.",
} as const;

export type Social = {
  key: string;
  label: string;
  value: string;
  href: string;
  copy?: string;
};

export const socials: Social[] = [
  {
    key: "email",
    label: "Email",
    value: "xbenitmx2020@gmail.com",
    href: "mailto:xbenitmx2020@gmail.com",
    copy: "xbenitmx2020@gmail.com",
  },
  {
    key: "discord",
    label: "Discord",
    value: "devbeni",
    href: "https://discord.com/users/801162422580019220",
    copy: "devbeni",
  },
  {
    key: "github",
    label: "GitHub",
    value: "B3ni15",
    href: "https://github.com/B3ni15",
  },
  {
    key: "instagram",
    label: "Instagram",
    value: "@b3ni.ballo",
    href: "https://www.instagram.com/b3ni.ballo/",
  },
  {
    key: "x",
    label: "X",
    value: "@b3ni_15",
    href: "https://x.com/b3ni_15",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Syncre",
    tagline: "Biztonságos chat alkalmazás",
    description:
      "Cross-platform mobil kommunikációs app React Native + Expo alapokon, a biztonságos üzenetváltásra fókuszálva.",
    tags: ["React Native", "Expo", "TypeScript"],
    href: "https://github.com/Syncre-App/Mobile",
    accent: "from-[#5E78FF] to-[#8A5CFF]",
    featured: true,
  },
  {
    name: "kreta-api-new",
    tagline: "Kréta API wrapper",
    description:
      "Modern, tisztán dokumentált wrapper a magyar Kréta rendszerhez — az iskolai adatok programozható eléréséhez.",
    tags: ["JavaScript", "API", "Node"],
    href: "https://github.com/B3ni15/kreta-api-new",
    accent: "from-[#22D3EE] to-[#3B82F6]",
    featured: true,
  },
  {
    name: "refilc-live-server",
    tagline: "Realtime backend Rustban",
    description:
      "Nagy áteresztőképességű live szerver a reFilc ökoszisztémához, Rustban írva a sebességért és a stabilitásért.",
    tags: ["Rust", "WebSocket", "Realtime"],
    href: "https://github.com/B3ni15/refilc-live-server",
    accent: "from-[#F97316] to-[#EF4444]",
    featured: true,
  },
  {
    name: "NetherCloud",
    tagline: "Game szerver platform",
    description:
      "Minecraft-szerverek indítására és kezelésére készült felhő-panel, TypeScript backenddel és webes felülettel.",
    tags: ["TypeScript", "Node", "Infra"],
    href: "https://github.com/B3ni15/NetherCloud",
    accent: "from-[#A78BFA] to-[#6366F1]",
  },
  {
    name: "app-legacy",
    tagline: "reFilc, továbbfejlesztve",
    description:
      "A reFilc alkalmazás optimalizált, letisztultabb változata Flutterben — több ezer diák napi eszköze.",
    tags: ["Dart", "Flutter", "Mobile"],
    href: "https://github.com/QwIT-Development/app-legacy",
    accent: "from-[#34D399] to-[#10B981]",
  },
  {
    name: "SpotifyBot",
    tagline: "Zenei automatizálás",
    description:
      "Rust alapú bot a Spotify API köré építve — lejátszási listák és statisztikák automatizálásához.",
    tags: ["Rust", "Spotify API"],
    href: "https://github.com/B3ni15/SpotifyBot",
    accent: "from-[#F472B6] to-[#DB2777]",
  },
];

export const stack: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Rust", "Python", "PostgreSQL", "WebSocket"],
  },
  {
    group: "Mobil & egyéb",
    items: ["React Native", "Flutter / Dart", "Swift", "Docker", "Git"],
  },
];

export const facts: { value: string; label: string }[] = [
  { value: "45+", label: "publikus repó" },
  { value: "6+", label: "év kódolás" },
  { value: "8", label: "nyelv és futtatókörnyezet" },
];
