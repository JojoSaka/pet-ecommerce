import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/utils";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import FileUpload from "./FileUpload";

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5 rounded-2xl border-gray-400 h-12 placeholder:text-gray-200 w-full">
          <FormLabel>{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              {name === "image" ? (
                <FileUpload onFileChange={field.onChange} />
              ) : (
                <Input
                  placeholder={placeholder}
                  className="h-[48px] border-[0.5px] border-gray-900 rounded-2xl hover:bg-[#f8f6f3] placeholder:text-gray-500 focus:outline-none"
                  type={"text"}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;