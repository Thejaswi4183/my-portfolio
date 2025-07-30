export type Project = {
  title: string;
  period: string;
  summary: string;
  tech: string[];
  link: string;
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Ancient Artifacts Dating Using Machine Learning",
    period: "11/2024 – 06/2025",
    summary:
      "Multi‑modal model using ResNet50 for image features and LSTM‑based NLP for notes; FastAPI backend, Next.js frontend, Supabase auth & logs.",
    tech: ["ResNet50", "LSTM (NLP)", "FastAPI", "Next.js", "Supabase"],
    link: "https://github.com/Thejaswi4183/Ancient-Artifacts-Dating",
    featured: true
  },
  {
    title: "Snake Game Using Arduino UNO",
    period: "03/2025 – 04/2025",
    summary:
      "Arduino UNO mini‑project with SH1106 1.3\" OLED (I2C) + joystick; breadboard wiring and controls.",
    tech: ["Arduino UNO", "SH1106 OLED", "Joystick", "C/C++"],
    link: "https://github.com/Thejaswi4183/Snake-Game-Using-Arduino-Uno"
  },
  {
    title: "AgroCulture",
    period: "12/2024 – 01/2025",
    summary:
      "Website connecting farmers and buyers with listings and marketplace flow.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "jQuery"],
    link: "https://github.com/Thejaswi4183/AgroCulture"
  },
  {
    title: "Grocery WebApp",
    period: "05/2023 – 06/2023",
    summary:
      "Grocery site with product listings and basic cart.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    link: "https://github.com/Thejaswi4183/Grocery-Website"
  },
  {
    title: "Part Picker",
    period: "12/2022 – 01/2023",
    summary:
      "Browse PC parts online with simple filtering.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    link: "https://github.com/Thejaswi4183/PartPicker"
  },
  {
    title: "Java BlueJ Project",
    period: "08/2018 – 08/2018",
    summary:
      "Simple Java project on BlueJ.",
    tech: ["Java", "BlueJ"],
    link: "https://github.com/Thejaswi4183/Java-BlueJ-Project"
  }
];
