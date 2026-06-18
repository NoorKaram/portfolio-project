import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-primary font-mono font-semibold tracking-wider uppercase mb-4">
            05. What's Next?
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mx-auto max-w-2xl mb-12">
            Although I'm currently focused on my studies, my inbox is always open. 
            Whether you have a question, want to collaborate on a project, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <Button size="lg" className="h-14 px-8 text-lg font-mono bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" asChild>
            <a href="mailto:yassmensfwan575@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Say Hello
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/yasmin-alnasheri" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yasmin-al-nasheri-281b8834a" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="tel:+905344389075"
             className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all">
            <Phone className="w-6 h-6" />
            <span className="sr-only">Phone</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
