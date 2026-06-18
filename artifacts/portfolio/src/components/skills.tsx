import { motion } from "framer-motion";
import { FaJava, FaMicrosoft, FaCode } from "react-icons/fa";
import { BrainCircuit } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  {
    name: "Java",
    icon: <FaJava className="w-10 h-10" />,
    level: 90,
    color: "text-orange-500",
    description: "Core language, data structures, algorithms."
  },
  {
    name: "Object-Oriented Programming",
    icon: <FaCode className="w-10 h-10" />,
    level: 85,
    color: "text-blue-400",
    description: "Design patterns, inheritance, polymorphism."
  },
  {
    name: "Problem Solving",
    icon: <BrainCircuit className="w-10 h-10" />,
    level: 80,
    color: "text-purple-500",
    description: "Algorithmic thinking, debugging."
  },
  {
    name: "Microsoft Excel",
    icon: <FaMicrosoft className="w-10 h-10" />,
    level: 75,
    color: "text-green-500",
    description: "Data analysis, functions, reporting."
  }
];

export function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary">02.</span> Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            My toolkit is focused on robust, typed languages and fundamental computer science principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors duration-300 box-glow-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`mb-4 p-3 rounded-lg bg-background w-fit ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold font-mono mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{skill.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
