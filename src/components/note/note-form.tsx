"use client";

import { toast } from "@/components/ui/use-toast";
import { noteSchema } from "@/schemas/note.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

type NoteValues = z.infer<typeof noteSchema>;

const NoteForm = () => {
  const form = useForm<NoteValues>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      note: "",
    },
  });

  const { reset, formState, setFocus } = form;
  const { isSubmitting, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setFocus("note");
    }
  }, [isSubmitSuccessful, reset, setFocus]);

  const onSubmit = async (data: NoteValues): Promise<void> => {
    console.log(" ON SUBMIT...");
    
    try {
      const endpoint = process.env.NEXT_PUBLIC_NOTES_ENDPOINT;
      if (!endpoint) {
        console.log("NO ENDPOINT !");
        
        throw new Error("Endpoint is not defined.");
      }
      console.log("ENPOINT: ", endpoint);
      

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("RESPONSE: ", response);
      

      if (response.ok) {
        toast({ title: "Note sent." });
      } else {
        throw new Error("Try again later...");
      }
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Error sending note",
        description: error.message,
        error: true,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        aria-label="notes form"
      >
        <div className="flex w-full flex-col">
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isSubmitting}
                    className="border-foreground/50 focus:border-foreground rounded-md"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            variant={"link"}
            className="text-foreground/80 hover:text-foreground justify-end"
          >
            <MoveRight size={24} strokeWidth={1.5} />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NoteForm;
