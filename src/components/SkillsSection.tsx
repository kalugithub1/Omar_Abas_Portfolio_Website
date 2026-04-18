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
  Cpu,
  Smartphone,
  Users,
  Brain,
  MessageSquare,
  Trophy,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript (ES6+)", icon: Layout },
      { name: "Bootstrap", icon: Globe },
      { name: "Responsive Design", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Terminal },
      { name: "RESTful APIs", icon: Workflow },
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Cpu },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "Data Modeling", icon: Database },
      { name: "Structured Data Handling", icon: Database },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Netlify", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Stripe", icon: CreditCard },
      { name: "VS Code", icon: Code2 },
      { name: "Android Studio", icon: Smartphone },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: Brain },
      { name: "Analytical Thinking", icon: Brain },
      { name: "Communication", icon: MessageSquare },
      { name: "Teamwork", icon: Users },
      { name: "Leadership", icon: Trophy },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Technical Toolkit
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Technologies and tools I use to design, develop, and deploy scalable
            web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              /* Each card now has a solid border-border */
              className="group rounded-2xl bg-transparent border border-border p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -5 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: gi * 0.1 + si * 0.05,
                    }}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    {/* Icons use your logo-inspired green/blue through the 'primary' color */}
                    <skill.icon size={18} className="text-primary/80" />
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
