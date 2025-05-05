"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-10% 0px -90% 0px" },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "about-builtt", title: "Anomalía GA4: Usuarios > Pageviews" },
    { id: "about-project", title: "Unificación Datos Online/Offline" },
    { id: "project-phases", title: "Discrepancia CM vs GA4 (90%)" },
    { id: "consent-mode", title: "Consent Mode sin Integración CMP" },
    { id: "payment-terms", title: "Captura Variables fuera del dataLayer" },
    { id: "additional-services", title: "Medición para Legálitas" },
    { id: "frictionPoints", title: "Puntos de Fricción en Legálitas" },
    { id: "crolegalitas", title: "CRO Legalitas" },
    { id: "comunications", title: "Mejoras Comunicación Legálitas" },
  ]

  return (
    <nav className="sticky top-4 self-start p-4 text-xl">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-sm transition-colors pl-2 border-l-2",
                activeSection === section.id
                  ? "text-[#022029] border-[#022029]"
                  : "text-[#02202999] hover:text-[#022029cc] border-transparent",
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
