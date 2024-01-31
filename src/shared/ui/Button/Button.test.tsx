import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("", () => {
  test("", () => {
    render(<Button theme={ThemeButton.CONTAINED}>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
