"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Menu,
  X
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
          <div className="h-12 w-12 flex items-center justify-center">
            <Image
              src="/713 Logo.svg"
              height={150}
              width={300}
              alt="Logo"
              className="h-full w-full"
            />
          </div>
          <span className="text-xl bg-gradient-to-r from-[#0cf1fc] to-[#4882ba] bg-clip-text text-transparent">
            713 Cybersecurity
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 pl-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Why Choose Us Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#why-choose-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Why Choose Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#about-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* What We Do Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#what-we-do"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    What We Do
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#services"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Core Team Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#core-team"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Core Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Contact Us Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/20 hover:text-blue-500 focus:bg-blue-500/20 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
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
                    <div className="h-10 w-10 flex items-center justify-center">
                      <Image
                        width={80}
                        height={80}
                        src="/713 Cybersecurity Services Logo.svg"
                        alt="Logo"
                        className="h-full w-full"
                      />
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-[#0cf1fc] to-[#4882ba] bg-clip-text text-transparent">713 Cybersecurity</span>
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
                  {/* Mobile Static Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground px-4">
                      Navigation
                    </h4>
                    <div className="space-y-1">
                      <Link
                        href="#home"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="#why-choose-us"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Why Choose Us
                      </Link>
                      <Link
                        href="#about-us"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        href="#what-we-do"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        What We Do
                      </Link>
                      <Link
                        href="#services"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Services
                      </Link>
                      <Link
                        href="#core-team"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Core Team
                      </Link>
                      <Link
                        href="#contact"
                        className="flex items-center px-4 py-2 text-sm hover:bg-blue-500/20 hover:text-blue-500 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact Us
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
