"use client";

import {
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card";
import { particlesConfig } from "@/config/particles-config";
import {
  CheckCircledIcon,
  CircleIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import type { Container } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const steps = [
  {
    title: "Our Vision",
    description:
      "Built on trust, delivery excellence, innovation, and commitment to deliver impactful cybersecurity experiences powered by qualitative research and deep domain expertise.",
    icon: UploadIcon,
  },
  {
    title: "Our Mission",
    description: "Navigate each case through risk discovery, threat intelligence, and transparency to enable stronger cybersecurity resilience and digital safety in today's cyberworld.",
    icon: CircleIcon,
  },
  {
    title: "7:13 Method",
    description:
      "Our structured approach harnesses 7 layers of security and its 13 principles, delivered by top industry leaders with strength, agility, and technical expertise.",
    icon: CheckCircledIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
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

export function AboutUs() {
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "howItWorksParticles",
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
      id="about-us"
      className="relative min-h-screen overflow-hidden"
    >
      <div id="howItWorksParticles" className="absolute inset-0 -z-10" />

      <div className="container z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#0cf1fc] to-[#4882ba]">
              About Us
            </h2>
            {/* <div className="absolute -inset-x-20 -inset-y-10 opacity-30 blur-2xl -z-10 bg-gradient-to-r from-primary to-primary/20 rounded-full" /> */}
          </div>
          <p className="mt-4 text-xl text-muted-foreground">
            Navigating complex cybersecurity challenges with expertise and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                <TiltCard className="h-full rounded-2xl">
                  <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200 relative overflow-hidden border-transparent hover:border-primary/20">
                    <CardHeader className="relative z-10">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-8 ring-primary/5">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold leading-tight mb-3">
                        {step.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-background opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /> */}
      </div>
    </section>
  );
}
