import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Mission",
              description:
                "Web Developer with a solid foundation in HTML, CSS, and JavaScript, dedicated to producing modern, intuitive, and visually appealing web experiences. A natural problem solver with an eye for design and a passion for user experience.",
            },
            {
              icon: GraduationCap,
              title: "Education",
              description:
                "Bachelor's Degree in Software Engineering at United States International University-Africa (USIU-A). Mastercard Foundation Scholar. Expected graduation: December 2026.",
            },
            {
              icon: Users,
              title: "Strengths",
              description:
                "Self-motivated, highly organized, and collaborative. Skilled in teamwork, problem-solving, time management, project management, mentorship, and leadership.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl bg-muted p-1"
            >
              <div className="bg-background rounded-[11px] p-6 h-full">
                <item.icon size={24} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
