import { motion } from "framer-motion";
import { Code2, Github, BookOpen, Brain, Terminal } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hello! I'm Yasmin, a dedicated Software Engineering student at Isik University in Turkey, 
              expected to graduate in 2029. My journey in tech started with a profound curiosity 
              about how things work behind the scenes, leading me to dive deep into the world of programming.
            </p>
            <p>
              I thrive on tackling complex problems and translating logic into clean, efficient code. 
              My primary focus has been mastering Java and Object-Oriented Programming principles, 
              which form the backbone of my technical approach. I believe that writing code isn't just 
              about making things function; it's about crafting systems that are scalable, readable, 
              and maintainable.
            </p>
            <p>
              Beyond coursework, I actively engage in personal projects to bridge the gap between theory 
              and practice. Whether it's building a banking system simulation or an IoT-inspired thermostat, 
              I am constantly pushing my boundaries. I am a firm believer in lifelong learning and am always 
              eager to explore new technologies and frameworks.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-2">
              {["Quick Learner", "Team Player", "Detail-Oriented", "Open Source Enthusiast", "Logical Thinker"].map(badge => (
                <Badge key={badge} variant="secondary" className="bg-secondary text-secondary-foreground px-3 py-1 font-mono">
                  {badge}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="relative group mx-auto lg:mx-0 w-64 h-64">
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors duration-500 box-glow translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-card rounded-full border border-border flex items-center justify-center overflow-hidden z-10">
                <span className="text-6xl font-bold font-mono text-primary group-hover:scale-110 transition-transform duration-500">
                  YA
                </span>
                {/* Optional: if there was a real image, it would go here */}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <Terminal className="text-primary h-6 w-6" />
                  <span className="font-bold text-2xl text-foreground">2+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Coding</span>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <Github className="text-primary h-6 w-6" />
                  <span className="font-bold text-2xl text-foreground">5+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
