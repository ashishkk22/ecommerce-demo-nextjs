import React, { ComponentProps } from "react";
import { AllOrNothing } from "@/types/common";
import { cn } from "@/utils";

// type for configuring whether to show an empty option and its label
export type EmptyProps = AllOrNothing<{
  showEmptyOption: boolean;
  emptyOptionLabel: string;
}>;

// type for handling error state and error message
export type ErrorProps = AllOrNothing<{
  error: boolean;
  errorMessage: string;
}>;

//combined type
export type SelectProps<T extends string | number> = ComponentProps<"select"> & {
  title?: string;
  options: T[];
} & EmptyProps &
  ErrorProps;

const Select = <T extends string | number>(props: SelectProps<T>) => {
  const {
    title,
    options,
    showEmptyOption = true,
    emptyOptionLabel = "select an Option",
    error,
    errorMessage,
    ...selectProps
  } = props;

  return (
    <div className={cn("flex flex-col gap-2", props.className)}>
      {title && (
        <label className="text-base font-medium flex items-center gap-1">
          {title}
          {selectProps.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        className={cn(
          "p-2 text-base border rounded-md",
          error
            ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300",
        )}
        {...selectProps}
      >
        {showEmptyOption && <option value="">{emptyOptionLabel}</option>}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="text-red-500 text-sm mt-1">{errorMessage}</div>}
    </div>
  );
};

export default React.memo(Select);
