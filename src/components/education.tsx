import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Education() {
  return (
    <section id="education" data-testid="education-section" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-primary">04.</span> Education
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card border-l-4 border-l-primary border-y-border border-r-border box-glow-hover transition-all">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Bachelor of Software Engineering</h3>
                    <p className="text-xl text-primary font-mono mt-1">Isik University</p>
                  </div>
                  <Badge variant="default" className="w-fit bg-primary text-primary-foreground font-mono">
                    In Progress
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground font-mono text-sm mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2025 — 2029 (Expected)
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Istanbul, Turkey
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p>
                    Pursuing a comprehensive curriculum focused on software design, algorithms, 
                    data structures, and modern engineering practices. Building a strong theoretical 
                    foundation paired with hands-on practical implementation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
