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
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    key: "frontend",
    title: "Frontend",
    items: ["ReactJS", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    key: "backend",
    title: "Backend & Web",
    items: ["NodeJS", "ExpressJS", "Java EE (JSP, Servlets, JDBC)", "PHP"],
  },
  {
    key: "databases",
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    key: "ai",
    title: "AI & Analytics",
    items: ["Machine Learning", "Data Analysis"], 
  },
  {
    key: "tools",
    title: "Tools & IDEs",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "IntelliJ IDEA"],
  },
  {
    key: "os",
    title: "Operating Systems",
    items: ["Linux"],
  },
  {
    key: "other",
    title: "Other",
    items: ["Mobile Application Development", "Adobe Premiere Pro"],
  },
];
