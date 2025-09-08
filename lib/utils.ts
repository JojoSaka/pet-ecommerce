import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const productFormSchema = () =>
  z.object({
    // sign up
    name: z.string().min(3),
    quantity: z.string().max(3),
    price: z.string().max(20),
    category: z.enum([
      "DOG",
      "CAT",
      "BIRD",
      "FISH",
      "ACCESSORIES"
    ]),
    description: z
      .string()
      .min(10, "Description is too short")
      .max(1000, "Description is too long"),
    image: z.string().nonempty("Organization image file upload is required"),
  });

  export const formSchema = productFormSchema();