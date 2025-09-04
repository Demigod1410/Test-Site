"use client";

import {
  Card,
  CardHeader,
  CardContent
} from "@/components/ui/card";
import { particlesConfig } from "@/config/particles-config";
import {
  PersonIcon,
  StarIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import type { Container } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const teamMembers = [
  {
    name: "Mr. Varun Mallapur",
    role: "Chief Information Security Officer",
    experience: "20+ Years Experience",
    description: "Industry leader with over 20 years in information security, former Global Internal Auditor at IBM India. Led research teams establishing security frameworks for IBM Hybrid Cloud, cognitive platforms, Data & AI. Expert in security policy implementation, SOCs setup, internal audits, and cybersecurity management.",
    icon: PersonIcon,
    expertise: ["Security Policy Implementation", "SOC Management", "Risk Management", "Global Security Frameworks"]
  },
  {
    name: "Mr. Praveen P Kadle",
    role: "Chief Financial Officer & Strategic Advisor",
    experience: "20+ Years Leadership",
    description: "Senior leader with over two decades in Finance leadership at Tata Group. Former Founding CFO of IBM-Tata joint venture, CFO of Tata Motors, Founding MD & CEO of Tata Capital, and Chairman of Tata AutoComp Systems. Expert in corporate finance and strategic planning.",
    icon: StarIcon,
    expertise: ["Corporate Finance", "Strategic Planning", "Board Management", "M&A Expertise"]
  },
  {
    name: "Mr. Uday Gurkar",
    role: "Chief Governance & Compliance Officer",
    experience: "28+ Years Experience",
    description: "Seasoned finance and governance professional with 28+ years at multinationals including Crompton Greaves, Castrol, German Remedies. Fellow Member of ICAI (FCA) and Associate Member of ICSI (ACS). Expert in financial accounting, audits, budgeting, and corporate governance.",
    icon: LightningBoltIcon,
    expertise: ["Corporate Governance", "Financial Audits", "Compliance Management", "Risk Assessment"]
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

export function CoreTeam() {
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "coreTeamParticles",
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
      id="core-team"
      className="relative min-h-screen overflow-hidden"
    >
      <div id="coreTeamParticles" className="absolute inset-0 -z-10" />

      <div className="container max-w-7xl relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Core Team
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Industry leaders with decades of expertise driving cybersecurity excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="relative"
              >
                <TiltCard className="h-full w-full rounded-2xl">
                  <Card className="h-full w-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200 relative overflow-hidden border-transparent hover:border-primary/20">
                    <CardHeader className="relative z-10">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-8 ring-primary/5">
                        <member.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold text-sm">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground text-sm font-medium">
                          {member.experience}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Expertise:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
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
