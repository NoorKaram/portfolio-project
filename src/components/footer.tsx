export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border text-center">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground font-mono text-sm">
          &copy; {new Date().getFullYear()} Yasmin Al-Nasheri. All rights reserved.
        </p>
        <p className="text-muted-foreground/50 font-mono text-xs mt-2">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
