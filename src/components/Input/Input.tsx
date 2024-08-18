import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { iconStyle, inputStyle, inputWrapperStyle } from "./Input.styles";

type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyle> & {
    /**
     * The name attribute of the input element.
     */
    name: string;
    /**
     * The label to be displayed for the input.
     */
    label?: string;
    /**
     * The helper text displayed below the input.
     */
    helperText?: string;
    /**
     * If true, the input will be styled as an error.
     */
    error?: boolean;
    /**
     * The error message to be displayed when `error` is true.
     */
    errorMessage?: string;
    /**
     * If true, the input will be marked as required.
     */
    required?: boolean;
    /**
     * Any additional content, such as icons, to be displayed inside the input wrapper.
     */
    children?: ReactNode;
  };

/**
 * The `Input` component is a versatile form control component with support for labels,
 * helper texts, and error messages. It can be customized with icons and other elements.
 */
export const Input = ({
  children,
  name,
  label,
  helperText,
  error = false,
  errorMessage = "Invalid input",
  required = false,
  ...props
}: InputProps) => {
  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      {label && (
        <label htmlFor={name} className="text-sm text-gray-600">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="flex flex-col gap-1 relative">
        <div className={cn(inputWrapperStyle({ error }))}>
          {children && <span className={cn(iconStyle())}>{children}</span>}
          <input id={name} name={name} {...props} className={cn(inputStyle())} required={required} />
        </div>
        {error && <span className="text-sm text-red-600">{errorMessage}</span>}
        {helperText && !error && <span className="text-sm text-gray-500">{helperText}</span>}
      </div>
    </div>
  );
};
