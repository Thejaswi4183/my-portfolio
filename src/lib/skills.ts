export type SkillCategory = {
  key: string;
  title: string;
  items: string[];
};

export const skillsByCategory: SkillCategory[] = [
  {
    key: "foundations",
    title: "Foundations",
    items: ["Data Structures and Algorithms"],
  },
  {
    key: "languages",
    title: "Programming Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    key: "frontend",
    title: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    key: "backend",
    title: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Java EE (JSP, Servlets, JDBC)",
      "PHP",
    ],
  },
  {
    key: "databases",
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    key: "devops",
    title: "Deployment & DevOps",
    items: ["Docker", "Hugging Face Spaces", "REST APIs", "API Deployment"],
  },
  {
    key: "data_ai",
    title: "AI & Analytics",
    items: [
      "AI & Machine Learning",
      "Deep Learning",
      "Computer Vision (ResNet50)",
      "NLP (LSTM)",
      "Multimodal Models",
      "TensorFlow/Keras",
    ],
  },
  {
    key: "tools",
    title: "Tools & IDEs",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "IntelliJ IDEA",
      "Postman",
    ],
  },
  {
    key: "other",
    title: "Other",
    items: ["Mobile App Development", "Adobe Premiere Pro"],
  },
  {
    key: "os",
    title: "Operating Systems",
    items: ["Linux"],
  },
];
