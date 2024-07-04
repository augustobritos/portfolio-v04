import { z } from "zod";

export const noteSchema = z.object({
  note: z
    .string()
    .min(50, {
      message: "Note is too short. Please enter at least 50 characters.",
    }),
});
