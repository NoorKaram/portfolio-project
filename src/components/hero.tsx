import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import { Button } from "./ui/button";

const TITLES = [
  "Software Engineering Student",
  "Java Developer",
  "Problem Solver",
  "Lifelong Learner"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 mesh-bg overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono font-semibold tracking-wider uppercase mb-4">
              Hello, I am
            </h2>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-glow"
          >
            Yasmin Al-Nasheri.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 md:h-16 mb-6"
          >
            <p className="text-2xl md:text-4xl text-muted-foreground font-mono">
              <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">_</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            Passionate Software Engineering student with a strong foundation in Java, 
            Object-Oriented Programming, and problem solving. Dedicated to continuous 
            learning and building software solutions that solve real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="#projects">
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-mono border-primary/50 text-primary hover:bg-primary/10" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="ghost" className="font-mono text-muted-foreground hover:text-foreground" asChild>
              <a href="https://docs.google.com/document/d/1azbXv1lpRqsdc2btrjBVuK4DOKLhYv6B/edit?usp=sharing&ouid=113070690548143846090&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                My CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
