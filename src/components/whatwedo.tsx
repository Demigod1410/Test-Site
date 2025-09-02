"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { particlesConfig } from "@/config/particles-config";
import {
    CheckCircledIcon,
    EyeOpenIcon,
    GearIcon,
    LockClosedIcon,
    MagnifyingGlassIcon,
    PersonIcon,
    StarIcon,
} from "@radix-ui/react-icons";
import { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const businessChallenges = [
  {
    title: "Security controls alignment with SOC monitoring",
    icon: LockClosedIcon,
    benefits: [
      "Achieve seamless alignment of security controls on the security tools.",
      "You can bring your own security policy controls & we will enable you to achieve the alignment with security tooling."
    ]
  },
  {
    title: "SOC Security Controls Mapping",
    icon: MagnifyingGlassIcon,
    benefits: [
      "Our risk assessment & classification ensures an accurate scope of risks are covered across the enterprise-wide IT infrastructure & applications.",
      "This will enable appropriate controls being mapped for security tool configuration & monitoring."
    ]
  },
  {
    title: "SOC risk-based Security monitoring & remediation",
    icon: EyeOpenIcon,
    benefits: [
      "We design custom rules, dashboards on security tool for achieving effectiveness in security monitoring & timely remediation of risks.",
      "Our SOC as a service ensures top security analysts monitor your IT environment in real-time, analyze & report the top risks that are required for mitigation."
    ]
  },
  {
    title: "SOC Solution mapping & deployment lifecycle",
    icon: GearIcon,
    benefits: [
      "Our SOC as a service takes responsibility to handle the complex task of security tools configuration & implementation.",
      "We have a standardized & timely adopted practice to ensure required security controls are configured the optimal way across your enterprise-wide scope of IT environment."
    ]
  },
  {
    title: "Security Tooling Evaluation & Licensing",
    icon: StarIcon,
    benefits: [
      "Through our top security tool OEM partners, your burden of evaluating & licensing a security tool is eased.",
      "We also encourage your discretion in adopting security tools & adopt Bring Your Own tool (BYOT), through which, you can bring your own tool & we will ensure successful SOC as a service deployment."
    ]
  },
  {
    title: "Security Incident Mgmt",
    icon: LockClosedIcon,
    benefits: [
      "Our SOC analysts own the skills & responsibilities to handle the corrective & preventive actions during a concurrence of a security incident.",
      "We also extend our consulting services in drawing the best security incident mgmt. policy & operating procedure."
    ]
  },
  {
    title: "Ensure Compliance of regulatory laws",
    icon: CheckCircledIcon,
    benefits: [
      "Our consulting practice will enable you to take right decisions in ensuring regulatory compliance such as GDPR, FFIEC, HIPAA are complied.",
      "We also adopt consulting the definition of compliance policies & managing the operating effectiveness of these policies with an objective that audit readiness is achieved."
    ]
  },
  {
    title: "Security tools automation & response (SOAR)",
    icon: PersonIcon,
    benefits: [
      "Our SOC as a service also aims at providing security orchestration for automation & response required to the high-risk classified assets of the organization, thereby enabling the quickest means for prevention of threat & responding to mitigate the threat in an automated manner."
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

export function WhatWeDo() {
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "whatWeDoParticles",
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
      id="what-we-do"
      className="relative min-h-screen overflow-hidden"
    >
      <div id="whatWeDoParticles" className="absolute inset-0 -z-10" />

      <div className="container max-w-[1600px] relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              What We Do
            </h2>
            <div className="absolute -inset-x-20 -inset-y-10 opacity-30 blur-2xl -z-10 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
          </div>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive SOC Solutions & Security Operations Excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {businessChallenges.map((challenge) => (
              <motion.div
                key={challenge.title}
                variants={itemVariants}
                className="relative"
              >
                <TiltCard className="h-full">
                  <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200 relative overflow-hidden border-transparent hover:border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                          <challenge.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-lg font-semibold leading-tight text-card-foreground break-words">
                            {challenge.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-primary">Key Business Benefits:</h4>
                        <ul className="space-y-2">
                          {challenge.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
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
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-background opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}
