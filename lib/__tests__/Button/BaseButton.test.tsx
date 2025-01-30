import { render, screen } from "@testing-library/react";

import { BaseButton } from "../../components";

describe("Rendering", () => {
  it("should render the BaseButton correctlY", () => {
    render(<BaseButton>Hello Button</BaseButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should default to `type=Button`", async () => {
    render(<BaseButton>Hello Button</BaseButton>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("supports the `as` prop (renders as an anchor)", () => {
    render(
      <BaseButton as="a" href="https://example.com">
        Go
      </BaseButton>,
    );
    expect(screen.getByRole("button", { name: "Go" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });
  it("applies custom className", () => {
    render(<BaseButton className="custom-class">Styled</BaseButton>);
    expect(screen.getByRole("button", { name: "Styled" })).toHaveClass(
      "custom-class",
    );
  });
});
