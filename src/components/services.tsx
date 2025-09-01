"use client";

import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import { particlesConfig } from "@/config/particles-config";
import {
    EyeOpenIcon,
    GearIcon,
    LockClosedIcon,
    MagnifyingGlassIcon,
    PersonIcon
} from "@radix-ui/react-icons";
import type { Container } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const services = [
  {
    category: "Cyber Security Risk Management",
    icon: LockClosedIcon,
    services: [
      "Risk Management Framework Development",
      "Risk Assessment & Remediation Consulting",
      "Management & Technical Team Training"
    ]
  },
  {
    category: "Cyber Security Audits",
    icon: MagnifyingGlassIcon,
    services: [
      "Compliance Audits (ISO27001, PCI DSS, SOC2, GDPR)",
      "Vulnerability Assessment & Penetration Testing",
      "Cloud Security & Application Testing",
      "Supply Chain & Regulatory Compliance"
    ]
  },
  {
    category: "Security Operations Center",
    icon: EyeOpenIcon,
    services: [
      "SOC Setup & Implementation",
      "Solution Mapping & Deployment",
      "Security Automation & Response (SOAR)"
    ]
  },
  {
    category: "Cyber Security Tools Consulting",
    icon: GearIcon,
    services: [
      "Next-Gen Security Management Tools",
      "AI/ML-based Cyber Security Solutions",
      "Security Monitoring & Incident Response",
      "Cyber Defense Platform Integration"
    ]
  },
  {
    category: "Managed Security Services",
    icon: PersonIcon,
    services: [
      "Virtual CISO Services",
      "Managed SOC Operations",
      "Regulatory Compliance Management"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (currentCard) {
      VanillaTilt.init(currentCard, {
        max: 15,
        speed: 400,
        scale: 1.03,
        glare: true,
        "max-glare": 0.3,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        transition: true,
      });
    }
    return () => {
      if (currentCard) {
        // VanillaTilt stores the instance on the DOM element
        (currentCard as { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={className}
      whileHover={{
        translateY: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "servicesParticles",
        options: particlesConfig,
      });
    };
    initParticles();

    return () => {
      container?.destroy();
    };
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden"
    >
      <div id="servicesParticles" className="absolute inset-0 -z-10" />

      <div className="container max-w-[1600px] relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive cybersecurity solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-[1500px]"
        >
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                variants={itemVariants}
                className="relative flex"
              >
                <TiltCard className="h-full w-full rounded-2xl flex-1">
                  <Card className="h-full w-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200 relative overflow-hidden border-transparent hover:border-primary/20 flex flex-col">
                    <CardHeader className="relative z-10 flex-shrink-0">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-6 ring-primary/5">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                        {service.category}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-1">
                      <ul className="space-y-2">
                        {service.services.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-xs leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="absolute top-3 right-3 text-muted-foreground/10 text-4xl font-bold z-0">
                      {index + 1}
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>

      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-background opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /> */}
      </div>
    </section>
  );
}
