import { AboutUs } from "@/components/about-us";
import { FooterContactForm as ContactForm } from "@/components/contact-form";
import { CoreTeam } from "@/components/core-team";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <CoreTeam />
        <ContactForm />
      </main>
    </>
  );
}
