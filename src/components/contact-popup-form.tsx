"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number").optional(),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactPopupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would handle the form submission here
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  }
  
  return (
    <div className="p-6">
      {/* Title moved to SheetTitle in parent component */}

      {isSubmitted ? (
        <Alert className="bg-green-900/50 border-green-600 text-white">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Thank you!</AlertTitle>
          <AlertDescription>
            Your message has been sent successfully. We&apos;ll get back
            to you within 24 hours.
          </AlertDescription>
        </Alert>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
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
            <Button type="submit" variant="secondary" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}