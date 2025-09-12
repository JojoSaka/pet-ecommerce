"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { productFormSchema } from "@/lib/utils";
import { createProduct } from "@/lib/actions/product";
import CustomInput from "./Custom/CustomInput";
import CustomSelect from "./Custom/CustomSelect";
import CustomTextarea from "./Custom/CustomTextArea";

const ProductForm = () => {
  const formSchema = productFormSchema();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      quantity: "",
      category: "DOG",
      description: "",
      image: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);

    try {
      setIsLoading(true);
      const response = await createProduct(data);

      if (response.success) {
        toast("Product has been added", {
          style: {
            background: "#A0522D",
            color: "#fff",
          },
          className:
            "rounded-lg shadow-md font-medium text-xl border-none outline-none",
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen mx-5 my-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="pt-40">
            <div className="max-w-[1024px] mx-auto">
              <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-4 pt-5">
                <div className="w-full">
                  <CustomInput
                    control={form.control}
                    name={"name"}
                    label={"Name of Product"}
                    placeholder={"Name"}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    control={form.control}
                    name={"price"}
                    label={"Price of Product"}
                    placeholder={"Price"}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-4 pt-10">
                <div className="w-full">
                  <CustomInput
                    control={form.control}
                    name={"quantity"}
                    label={"Product Quantity"}
                    placeholder={"Quantity should be set to 0"}
                  />
                </div>
                <div className="w-full">
                  <CustomSelect
                    control={form.control}
                    name={"category"}
                    label={"Product Category"}
                    placeholder={"Cateogory"}
                    options={["DOG", "CAT", "BIRD", "FISH", "ACCESSORIES"]}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-4 pt-10">
                <div className="w-full">
                  <CustomTextarea
                    control={form.control}
                    name={"description"}
                    label={"Description of Product"}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-4 pt-10 mt-40">
                <div className="w-full">
                  <CustomInput
                    control={form.control}
                    name={"image"}
                    label={"Upload your image file"}
                    placeholder={""}
                  />
                </div>
              </div>
            </div>

            <div className="mt-40 flex justify-center">
              <Button
                type="submit"
                className="px-10 py-5 border-[0.5px] border-gray-700 rounded-2xl bg-[#A0522D] hover:bg-[#A0522D]/90 cursor-pointer"
              >
                {isLoading ? (
                  <span className="font-bold text-white text-md">
                    Submitting
                  </span>
                ) : (
                  <span className="font-bold text-white text-md">
                    Submit
                  </span>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
