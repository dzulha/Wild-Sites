"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Modern Magazine Layout",
    category: "Editorial Design",
    description: "Contemporary magazine design with bold typography and engaging visual hierarchy.",
    image: "/modern-magazine-layout-design.jpg",
    tags: ["Print Design", "Typography", "Layout"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Design & Development",
    description: "Full-stack e-commerce solution with modern UI and seamless user experience.",
    image: "/modern-ecommerce-website.png",
    tags: ["React", "E-commerce", "UI/UX"],
  },
  {
    id: 3,
    title: "Corporate WordPress Site",
    category: "WordPress Development",
    description: "Custom WordPress theme with advanced functionality and content management.",
    image: "/corporate-wordpress-website-design.jpg",
    tags: ["WordPress", "CMS", "Custom Theme"],
  },
  {
    id: 4,
    title: "Online Learning Platform",
    category: "Instructional Design",
    description: "Interactive e-learning platform with engaging course materials and assessments.",
    image: "/online-learning-platform.png",
    tags: ["E-learning", "Interactive", "Education"],
  },
  {
    id: 5,
    title: "Brand Identity System",
    category: "Editorial Design",
    description: "Complete brand identity including logo, guidelines, and marketing materials.",
    image: "/brand-identity-design-system.png",
    tags: ["Branding", "Identity", "Guidelines"],
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "Web Design & Development",
    description: "Analytics dashboard with data visualization and real-time updates.",
    image: "/saas-dashboard-interface-design.jpg",
    tags: ["Dashboard", "Analytics", "SaaS"],
  },
]

const categories = [
  "All",
  "Editorial Design",
  "Web Design & Development",
  "WordPress Development",
  "Instructional Design",
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our recent projects and see how we've helped clients achieve their goals
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
