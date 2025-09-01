"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  DollarSign,
  Menu,
  ShieldCheck,
  Users,
  X,
  Zap
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items for cybersecurity services
  const services = [
    {
      title: "Risk Management",
      description: "Cyber Security Risk Management Framework",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      href: "#services",
    },
    {
      title: "Security Audits",
      description: "Compliance Audits & Penetration Testing",
      icon: <Users className="h-5 w-5 text-primary" />,
      href: "#services",
    },
    {
      title: "SOC Services",
      description: "Security Operations Center Setup",
      icon: <Zap className="h-5 w-5 text-primary" />,
      href: "#services",
    },
    {
      title: "Managed Security",
      description: "Virtual CISO & Managed SOC Operations",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      href: "#services",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur transition-all duration-300",
        isScrolled ? "bg-background/95 border-b shadow-sm" : "bg-background/60"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo with Favicon */}
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <div className="h-8 w-8 flex items-center justify-center">
            <Image
              src="/favicon.ico"
              height={50}
              width={50}
              alt="Logo"
              className="h-full w-full"
            />
          </div>
          <span className="text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            713 Cybersecurity
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 pl-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Why Choose Us Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#why-choose-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Why Choose Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#about-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              {service.icon}
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Core Team Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#core-team"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Core Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Contact Us Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 flex items-center justify-center">
                      <Image
                        width={50}
                        height={50}
                        src="/favicon.ico"
                        alt="Logo"
                        className="h-full w-full"
                      />
                    </div>
                    <span className="font-bold text-xl">713 Cybersecurity</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-auto py-6 space-y-6">
                  {/* Mobile Services */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground px-4">
                      Services
                    </h4>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.icon}
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Static Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground px-4">
                      Navigation
                    </h4>
                    <div className="space-y-1">
                      <Link
                        href="#why-choose-us"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Why Choose Us
                      </Link>
                      <Link
                        href="#about-us"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        href="#core-team"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Core Team
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
