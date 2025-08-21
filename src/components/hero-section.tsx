"use client";
import { particlesConfig } from "@/config/particles-config";
import type { Container } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Initialize particles
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "heroParticles",
        options: {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            color: {
              value: "#808080",
            },
            number: {
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
          },
        },
      });
    };

    initParticles();

    return () => {
      container?.destroy();
    };
  }, []);

  // Stats for the animated counter
  const [stats, setStats] = useState([
    { value: 0, target: 2500, label: "Active Users" },
    { value: 0, target: 15000, label: "Happy Customers" },
    { value: 0, target: 95, label: "Satisfaction Rate", suffix: "%" },
  ]);

  // Animate the stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: Math.min(
            stat.value + Math.ceil(stat.target / 50),
            stat.target
          ),
        }))
      );
    }, 50);

    // Clear interval when all stats reach their target
    if (stats.every((stat) => stat.value === stat.target)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-background to-primary/5 flex items-center justify-center overflow-hidden relative py-16">
      <div id="heroParticles" className="absolute inset-0 -z-0" />
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" /> */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-8 mx-auto">
        <div
          className={`flex flex-col items-center gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

      
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Turn Unused Software into Real Value
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SoftSell is the secure marketplace for businesses to buy and sell
              unused software licenses at incredible prices.
            </p>
          </div>


          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur border border-primary/10 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.value.toLocaleString()}
                  {stat.suffix || ""}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
