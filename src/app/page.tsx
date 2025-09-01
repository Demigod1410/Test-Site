import { FooterContactForm as ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/hero-section";
import { AboutUs } from "@/components/about-us";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <WhyChooseUs />
        <AboutUs />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}
