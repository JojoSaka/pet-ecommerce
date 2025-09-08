import { formSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";


interface CustomTextareaProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  rows?: number;
}

const CustomTextarea = ({
  control,
  name,
  label,
  placeholder,
  rows = 5,
}: CustomTextareaProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5 rounded-2xl border-gray-400 h-12 placeholder:text-gray-200 w-full">
          <FormLabel>{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <textarea
                rows={rows}
                placeholder={placeholder || ""}
                className="h-[100px] border-[0.5px] border-gray-900  rounded-2xl hover:bg-[#f8f6f3] placeholder:text-gray-500 p-2"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomTextarea;
