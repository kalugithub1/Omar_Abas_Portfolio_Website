import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "IT Intern",
    organization: "United States International University Africa",
    period: "January 2025 – April 2025",
    points: [
      "Enrolled new computers into USIU-Africa's domain for secure access to shared resources.",
      "Managed user accounts and permissions via Active Directory to enhance cybersecurity.",
      "Provided password reset and technical support to staff and students.",
      "Troubleshot network, Wi-Fi, and LAN issues across campus.",
    ],
  },
  {
    type: "education",
    title: "BSc Software Engineering",
    organization: "United States International University Africa",
    period: "Expected 2025",
    points: [
      "Fourth-year student with a GPA of 3.719 / 4.0.",
      "Relevant coursework: Object-Oriented Programming, Web Development, Data Structures, Software Engineering Principles.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Where I've worked & studied
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Professional experience and education that shaped my journey as a software engineer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -3 }}
                className="group relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="rounded-xl bg-muted p-[1px] hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-shadow duration-300">
                  <div className="bg-background rounded-[11px] p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        {exp.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                          <span className="text-xs font-mono text-primary">{exp.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{exp.organization}</p>
                        <ul className="space-y-2">
                          {exp.points.map((point, pi) => (
                            <li key={pi} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1 shrink-0">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
