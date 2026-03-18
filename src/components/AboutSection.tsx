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
              title: "Professional Summary",
              description: `Software Engineering student at United States International University-Africa (USIU-A) and Mastercard Foundation Scholar with a strong interest in 
full-stack web development. Experienced in building scalable applications 
using React, Node.js, and MongoDB. Passionate about solving real-world 
problems through technology and creating responsive, user-focused digital 
products.`,
            },
            {
              icon: GraduationCap,
              title: "Education",
              description: `Bachelor's Degree in Software Engineering at United States International 
University-Africa (USIU-A), Nairobi. Current GPA: 3.719/4.0. Relevant coursework 
includes: Object-Oriented Programming, Data Structures, Web Development, 
and Software Engineering Principles. Expected graduation: September 2026.`,
            },
            {
              icon: Users,
              title: "Technical Expertise",
              description: `Proficient in JavaScript, HTML, CSS, React, and Python with experience in building 
full-stack web applications using React, Node.js, and MongoDB. Skilled in 
developing RESTful APIs, integrating payment systems such as Stripe, and 
working with modern tools including Git, Github,MongoDB, and Bootstrap.`,
            },
            {
              icon: Users,
              title: "Professional Strengths",
              description: `Strong analytical thinker with a passion for problem-solving and building 
efficient systems. Known for teamwork, leadership, and clear communication 
in collaborative environments. Experienced in managing projects, mentoring 
peers, and delivering practical technology solutions.`,
            },
            {
              icon: Users,
              title: "Currently Learning",
              items: [
                "Next.js",
                "Daraja API (M-Pesa)",
                "Machine Learning fundamentals",
              ],
            },

            {
              icon: Target,
              title: "Currently Developing",
              description: `Building a livestock marketplace platform that connects farmers directly with buyers, eliminating middlemen, reducing exploitation, and widening market reach for livestock keepers across the region.`,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.55, ease: "easeOut" }}
              className="group rounded-xl bg-muted p-[1px] relative overflow-hidden
                transition-shadow duration-300
                hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_0_16px_4px_hsl(var(--primary)/0.15),0_0_40px_8px_hsl(var(--primary)/0.08)]"
            >
              {/* Shimmer sweep */}
              <span
                className="pointer-events-none absolute inset-0 z-10
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-transform duration-700 ease-in-out
                  bg-gradient-to-r from-transparent via-white/10 to-transparent
                  skew-x-[-20deg]"
              />

              <div className="bg-background rounded-[11px] p-6 h-full relative z-0">
                <item.icon size={24} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                {item.items ? (
                  <ul className="space-y-2">
                    {item.items.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
