import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Bank Loan Application System",
    description: "A Java-based banking application that manages loan applications, calculates interest rates, and tracks repayment schedules using OOP principles. Features robust error handling and data validation.",
    tags: ["Java", "OOP", "Finance Logic"],
    github: "https://github.com/yasmin-alnasheri/Bank-Loan-Application-System",
  },
  {
    title: "Student Course Registration System",
    description: "A comprehensive course management system allowing students to register, drop, and view courses. Implements complex relationships between Student, Course, and Faculty objects.",
    tags: ["Java", "Data Structures", "System Design"],
    github: "https://github.com/yasmin-alnasheri/Student-Course-Registration-System",
  },
  {
    title: "Library Manager System",
    description: "A library management application for tracking books, members, and borrowing history. Utilizes advanced object-oriented concepts for state management of library assets.",
    tags: ["Java", "OOP", "State Management"],
    github: "https://github.com/yasmin-alnasheri/Library-Manager-System",
  },
  {
    title: "Single User Cinema System",
    description: "A cinema booking simulation managing movies, seating arrays, and ticket reservations. Focuses on matrix operations and logical constraints for seat availability.",
    tags: ["Java", "Arrays", "Logic Algorithms"],
    github: "https://github.com/yasmin-alnasheri/Single-User-Cinema-System",
  },
  {
    title: "Smart Thermostat Simulation",
    description: "An IoT-inspired simulation of a smart thermostat modeling temperature control logic based on environmental inputs and user preferences.",
    tags: ["Java", "Simulation", "Control Logic"],
    github: "https://github.com/yasmin-alnasheri/Smart-Thermostat-Simulation",
  }
];

export function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary">03.</span> Featured Work
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card border-border hover:border-primary transition-all duration-300 group box-glow-hover">
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="font-mono text-xs border-primary/20 text-primary/80 bg-primary/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-mono w-full justify-start" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Source
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
