import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Globe, Compass as Wordpress, GraduationCap } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Editorial Design",
    description:
      "Compelling layouts for magazines, books, and publications that engage readers and enhance storytelling.",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal user experience.",
  },
  {
    icon: Wordpress,
    title: "WordPress Development",
    description: "Custom WordPress solutions that are easy to manage and scale with your business needs.",
  },
  {
    icon: GraduationCap,
    title: "Instructional Design",
    description: "Educational materials and e-learning experiences that make complex concepts accessible.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive design and development services to help your business stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
