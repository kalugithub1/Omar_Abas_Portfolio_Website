import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import swiftstayImg from "@/assets/swiftstay.png";
import foodbankImg from "@/assets/foodbank.png";
import atvImg from "@/assets/atv.png";
import portfolioImg from "@/assets/portfolio.png";
import todolistImg from "@/assets/todolist.png";
import calculatorImg from "@/assets/calculator.png";

const projects = [
  {
    title: "SwiftStay",
    description:
      "A full-stack accommodation booking platform with user authentication, dynamic data retrieval through RESTful APIs, and Stripe payment integration for secure transactions.",
    image: swiftstayImg,
    tags: ["React", "Node.js", "MongoDB", "Stripe", "REST API"],
    liveUrl: "https://swiftstay-frontend.vercel.app/",
    githubUrl: "https://github.com/kalugithub1",
    featured: true,
  },
  {
    title: "FoodBank",
    description:
      "A full-stack food delivery web application with user authentication, dynamic menu management, order tracking, and Stripe-powered payment processing.",
    image: foodbankImg,
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    liveUrl: null,
    githubUrl: "https://github.com/kalugithub1/Food-Delivery-web-app/",
    featured: true,
  },
  {
    title: "African Transformative Voice",
    description:
      "A responsive website for a refugee-led organization, showcasing their programs, vision, mission, and services with enhanced accessibility.",
    image: atvImg,
    tags: ["React", "Node.js", "JavaScript"],
    liveUrl: "https://africantransformativevoice.netlify.app/",
    githubUrl: null,
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and experience. Built with a clean, responsive design for an engaging browsing experience.",
    image: portfolioImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://omarabas.netlify.app/",
    githubUrl: null,
    featured: false,
  },
  {
    title: "Todo List App",
    description:
      "A dynamic to-do list application allowing users to add, edit, and delete tasks while practicing DOM manipulation.",
    image: todolistImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://omarabastodolist.netlify.app/",
    githubUrl: null,
    featured: false,
  },
  {
    title: "Online Calculator",
    description:
      "A fully functional online calculator built to enhance problem-solving skills and improve UI design experience.",
    image: calculatorImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

const transition = { type: "spring", duration: 0.5, bounce: 0 };

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Selected work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group rounded-xl bg-muted p-1 overflow-hidden ${
                project.featured && i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="bg-background rounded-[11px] overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
