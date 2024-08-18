import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../Select";
import { describe, expect, it, vi } from "vitest";

describe("Select Component", () => {
  it("renders without crashing", () => {
    render(<Select title="Choose an option" options={["Option 1", "Option 2"]} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Select title="Select a fruit" options={["Apple", "Banana"]} />);

    expect(screen.getByText("Select a fruit")).toBeInTheDocument();
  });

  it("renders options correctly", () => {
    render(<Select title="Select a fruit" options={["Apple", "Banana"]} />);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("shows error message when error is true", () => {
    render(
      <Select
        title="Select a fruit"
        options={["Apple", "Banana"]}
        error={true}
        errorMessage="This field is required"
      />,
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("does not show error message when error is false", () => {
    render(<Select title="Select a fruit" options={["Apple", "Banana"]} />);

    expect(screen.queryByText("This field is required")).toBeNull();
  });

  it("shows empty option when showEmptyOption is true", () => {
    render(
      <Select
        title="Select a fruit"
        options={["Apple", "Banana"]}
        showEmptyOption={true}
        emptyOptionLabel="Please select"
      />,
    );

    expect(screen.getByText("Please select")).toBeInTheDocument();
  });

  it("does not show empty option when showEmptyOption is false", () => {
    render(<Select title="Select a fruit" options={["Apple", "Banana"]} showEmptyOption={false} emptyOptionLabel="" />);

    expect(screen.queryByText("Please select")).toBeNull();
  });

  it("handles select change event", () => {
    const handleChange = vi.fn();
    render(<Select title="Select a fruit" options={["Apple", "Banana"]} onChange={handleChange} />);

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Apple" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
