"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

export default function CourseCreatePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const handelSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("api/course", values);
      // sending him to course edit page
      router.push(`teacher/courses/${response.data.id}`);
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-full flex md:items-center md:justify-center p-6">
      <div>
        <h1>Name Your Course</h1>
        <p className="text-sm">
          What would you like to name your course ? Don&apos;t worry you can
          change it letter.{" "}
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handelSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Block Chain from zero to hero'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you will teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button disabled={isSubmitting || !isValid}>Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
