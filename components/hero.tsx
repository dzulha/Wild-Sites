import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 text-balance">
            Creative Design Solutions
            <span className="block text-accent">That Drive Results</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            We're an independent design and publishing agency specializing in editorial design, web development,
            WordPress solutions, and instructional design that elevates your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
