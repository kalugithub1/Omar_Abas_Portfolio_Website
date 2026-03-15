import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Database,
  CreditCard,
  GitBranch,
  Globe,
  FileCode,
  Layout,
  Palette,
  Terminal,
  Cloud,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2, level: "Proficient" },
      { name: "HTML5", icon: FileCode, level: "Proficient" },
      { name: "CSS3", icon: Palette, level: "Proficient" },
      { name: "JavaScript (ES6+)", icon: Layout, level: "Proficient" },
      { name: "Responsive Design", icon: Globe, level: "Proficient" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server, level: "Proficient" },
      { name: "Express.js", icon: Terminal, level: "Proficient" },
      { name: "RESTful APIs", icon: Workflow, level: "Proficient" },
      { name: "Python", icon: Code2, level: "Intermediate" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: Database, level: "Proficient" },
      { name: "Stripe", icon: CreditCard, level: "Proficient" },
      { name: "Git & GitHub", icon: GitBranch, level: "Proficient" },
      { name: "Netlify / Vercel", icon: Cloud, level: "Proficient" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Technical toolkit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-xl bg-muted p-1"
            >
              <div className="bg-background rounded-[11px] p-6 h-full">
                <h3 className="text-sm font-mono text-primary mb-5">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                      className="skill-badge"
                    >
                      <skill.icon size={14} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
