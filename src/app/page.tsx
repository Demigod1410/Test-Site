import { FooterContactForm as ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/hero-section";
import { AboutUs } from "@/components/about-us";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CoreTeam } from "@/components/core-team";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <WhyChooseUs />
        <AboutUs />
        <Services />
        <CoreTeam />
        <ContactForm />
      </main>
    </>
  );
}
