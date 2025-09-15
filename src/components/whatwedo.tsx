"use client";

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
import { useEffect } from "react";
import Carousel from './Carousel';

const businessChallenges = [
  {
    title: "Security controls alignment with SOC monitoring",
    description: "Achieve seamless alignment of security controls on the security tools. You can bring your own security policy controls & we will enable you to achieve the alignment with security tooling.",
    id: 1,
    icon: <LockClosedIcon className="h-4 w-4 text-white" />
  },
  {
    title: "SOC Security Controls Mapping",
    description: "Our risk assessment & classification ensures an accurate scope of risks are covered across the enterprise-wide IT infrastructure & applications. This will enable appropriate controls being mapped for security tool configuration & monitoring.",
    id: 2,
    icon: <MagnifyingGlassIcon className="h-4 w-4 text-white" />
  },
  {
    title: "SOC risk-based Security monitoring & remediation",
    description: "We design custom rules, dashboards on security tool for achieving effectiveness in security monitoring & timely remediation of risks. Our SOC as a service ensures top security analysts monitor your IT environment in real-time, analyze & report the top risks that are required for mitigation.",
    id: 3,
    icon: <EyeOpenIcon className="h-4 w-4 text-white" />
  },
  {
    title: "SOC Solution mapping & deployment lifecycle",
    description: "Our SOC as a service takes responsibility to handle the complex task of security tools configuration & implementation. We have a standardized & timely adopted practice to ensure required security controls are configured the optimal way across your enterprise-wide scope of IT environment.",
    id: 4,
    icon: <GearIcon className="h-4 w-4 text-white" />
  },
  {
    title: "Security Tooling Evaluation & Licensing",
    description: "Through our top security tool OEM partners, your burden of evaluating & licensing a security tool is eased. We also encourage your discretion in adopting security tools & adopt Bring Your Own tool (BYOT), through which, you can bring your own tool & we will ensure successful SOC as a service deployment.",
    id: 5,
    icon: <StarIcon className="h-4 w-4 text-white" />
  },
  {
    title: "Security Incident Management",
    description: "Our SOC analysts own the skills & responsibilities to handle the corrective & preventive actions during a concurrence of a security incident. We also extend our consulting services in drawing the best security incident mgmt. policy & operating procedure.",
    id: 6,
    icon: <LockClosedIcon className="h-4 w-4 text-white" />
  },
  {
    title: "Ensure Compliance of regulatory laws",
    description: "Our consulting practice will enable you to take right decisions in ensuring regulatory compliance such as GDPR, FFIEC, HIPAA are complied. We also adopt consulting the definition of compliance policies & managing the operating effectiveness of these policies with an objective that audit readiness is achieved.",
    id: 7,
    icon: <CheckCircledIcon className="h-4 w-4 text-white" />
  },
  {
    title: "Security tools automation & response (SOAR)",
    description: "Our SOC as a service also aims at providing security orchestration for automation & response required to the high-risk classified assets of the organization, thereby enabling the quickest means for prevention of threat & responding to mitigate the threat in an automated manner.",
    id: 8,
    icon: <PersonIcon className="h-4 w-4 text-white" />
  }
];

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
    <motion.section
      id="what-we-do"
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div 
        id="whatWeDoParticles" 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <motion.div 
        className="container max-w-[1600px] relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <div className="relative inline-block">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#0cf1fc] to-[#4882ba]"
            >
              What We Do
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-muted-foreground"
          >
            Comprehensive SOC Solutions & Security Operations Excellence
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <motion.div 
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            style={{ height: '900px', position: 'relative' }}
          >
            <Carousel
              items={businessChallenges}
              baseWidth={700}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
