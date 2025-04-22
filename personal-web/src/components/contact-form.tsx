"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";

import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Call the send function and handle the response
      const response = await send(values);
      if (response.success) {
        toast.success("Your message has been successfully sent!");
        form.reset();
      }
    } catch (error) {
      console.log(error)
      toast.error("There was an error sending your message. Please try again.");
    }
  }

  return (
    <>
      {/* ToastContainer to show the toast notifications */}
      <div>
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below and I will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder="Type in your message here"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="ml-auto bg-blue-500">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      {/* Toastify Container */}
      <ToastContainer/>
    </>
  );
}
