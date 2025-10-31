"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Building, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(6, {
      message: "Please enter a valid phone number.",
    })
    .optional(),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function FooterContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Use Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2a4308eb-53dd-4e8b-bbcf-9e0fd52db8ff",
          name: values.name,
          email: values.email,
          phone: values.phone || "Not provided",
          company: values.company || "Not provided",
          message: values.message,
          subject: "New Contact Form Submission from 713 Cybersecurity Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section id="contact" className="dark relative h-fit overflow-hidden bg-background backdrop-blur-3xl text-foreground w-full">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:60px_60px] -z-10" />
      <div className="relative z-10 px-8 pt-16 w-full max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0cf1fc] to-[#4882ba]">713 Cyber Security</h2>
              <p className="text-slate-400 max-w-md">
                Providing comprehensive cybersecurity solutions. We&apos;re
                dedicated to helping businesses achieve stronger cybersecurity
                resilience with our cutting-edge expertise and methodological
                approach.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-slate-300">
                    varun.mallapur@713cybersec.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="text-slate-300">+91 9902000979</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building size={18} className="text-primary" />
                  <span className="text-slate-300">
                    Address: Seven Thirteen IT Services Pvt ltd.
                    Chitrapur, Shirali, Uttara Kannada, Karnataka - 581354.

                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>{" "}
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com/"
                  className="bg-card/80 backdrop-blur-sm hover:bg-secondary/80 transition-colors p-2 rounded-full border border-primary/10"
                >
                  <TwitterLogoIcon width={20} height={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="bg-card/80 backdrop-blur-sm hover:bg-secondary/80 transition-colors p-2 rounded-full border border-primary/10"
                >
                  <InstagramLogoIcon width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Form Section */}
          <div className="lg:col-span-2 bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-primary/10 shadow-lg">
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#4882ba]">
              Send us a message
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-card/80 backdrop-blur-sm border-primary/10 focus-visible:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="you@company.com"
                            type="email"
                            {...field}
                            className="bg-card/80 backdrop-blur-sm border-primary/10 focus-visible:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your phone number"
                            type="tel"
                            {...field}
                            className="bg-card/80 backdrop-blur-sm border-primary/10 focus-visible:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company"
                            {...field}
                            className="bg-card/80 backdrop-blur-sm border-primary/10 focus-visible:ring-secondary"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your needs..."
                          className="min-h-[100px] bg-card/80 backdrop-blur-sm border-primary/10 focus-visible:ring-secondary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <footer className="w-full bg-background/80 backdrop-blur-xl mt-auto border-t border-primary/10">
          <div className="w-full max-w-[2000px] mx-auto px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
              <p>
                &copy; 2025 713 Cyber Security Services Pvt Ltd. All rights
                reserved.
              </p>
              <p>www.713cybersec.com</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
