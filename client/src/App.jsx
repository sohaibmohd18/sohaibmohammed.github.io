import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        {/* If you add Skills later, place it here with id="skills" */}
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}