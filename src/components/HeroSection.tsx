import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import profileImg from "@/assets/omar-profile.png";

const transition = { type: "spring" as const, duration: 0.5, bounce: 0 };

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[80svh] flex items-center section-padding pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <p className="text-sm font-mono text-muted-foreground mb-4">Full-Stack Developer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Building scalable
              <br />
              <span className="text-primary">full-stack</span>
              <br />
              applications.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
              Full-stack developer focused on React ecosystems. Specialized in integrating complex payment flows and robust database architectures.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                <Mail size={16} />
                Let's build something
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors active:scale-[0.98]"
              >
                View Projects
              </a>
              <a
                href="https://omarabas.netlify.app/Omar_Abas_Omar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors active:scale-[0.98]"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/kalugithub1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/omar-abas-omar-08283624a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kaluabas12@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-3xl bg-primary/10 rotate-6" />
              <img
                src={profileImg}
                alt="Omar Abas Omar - Full Stack Developer"
                className="relative w-full h-full object-cover rounded-3xl shadow-lg"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden md:flex justify-center mt-16"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
