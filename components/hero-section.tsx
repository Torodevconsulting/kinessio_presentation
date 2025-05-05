import Image from "next/image"
import ScrollArrow from "./scroll-arrow"
import type React from "react"

interface HeroSectionProps {
  nextSectionRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({ nextSectionRef }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/kinesso_personal_cover.png)",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "top right",
        }}
      />
      <div className="absolute inset-0 bg-secondary/40 z-0" />
      <div className="relative z-10 text-secondary-foreground text-center w-full max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Image
            src="/Kinesso_Logo_White.png"
            alt="Builtt Logo"
            width={240}
            height={240}
            className="mx-auto mb-12"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold mb-8 text-center">CRO Specialist Presentation</h1>
        <div className="text-center">
          <p className="mb-2">Name: Isaac Toro</p>
          <p className="mb-2">Kinesso Headquarters Barcelona, Spain</p>
          <p className="mb-2">Date: 09/05/2025</p>
        </div>
      </div>
      <ScrollArrow targetRef={nextSectionRef} />
    </section>
  )
}

export default HeroSection
