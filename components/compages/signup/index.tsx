"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { login_page } from "@/lib/router";
import { SignupSchema } from "@/validate/schema";

export const SignupComponent = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Intellifix"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="items-top flex space-x-2 mb-10">
          <Checkbox id="terms" className="mt-1" />
          <div className="grid gap-2 leading-none">
            <label
              htmlFor="terms"
              className="text-sm leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yes, I understand and agree to the SpringWorks&nbsp;
              <Link
                className="font-medium underline hover:text-blue-700"
                href={login_page}
              >
                Terms of Service
              </Link>
              , including the&nbsp;
              <Link
                className="font-medium underline hover:text-blue-700"
                href={login_page}
              >
                User Agreement & Privacy Policy
              </Link>
              .
            </label>
          </div>
        </div>
        <Button className="w-full h-12" type="submit">
          Register
        </Button>
      </form>
    </Form>
  );
};
