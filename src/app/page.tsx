"use client";
import { useEffect } from "react";
import HeroSection from "@/app/components/sections/Hero";
import SkillsSection from "@/app/components/sections/Skills";
import ExperienceSection from "@/app/components/sections/Experience";
import ProjectsSection from "@/app/components/sections/Projects";
import EducationSection from "@/app/components/sections/Education";
import CertsSection from "@/app/components/sections/Certs";
import ContactSection from "@/app/components/sections/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  useEffect(() => {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
