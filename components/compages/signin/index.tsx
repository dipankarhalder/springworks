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
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { forgot_page } from "@/lib/router";
import { SigninSchema } from "@/validate/schema";

export const SigninComponent = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SigninSchema>) => {
    if (data) {
      console.log(data);
    } else {
      toast({
        variant: "destructive",
        title: "Opps! Something went wrong.",
        description: "The email or password you entered is incorrect.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-2">
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
        <div className="flex justify-end text-sm mb-6">
          <p>
            <Link
              href={forgot_page}
              className="font-medium text-xs underline hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
        <Button className="w-full h-12" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};
