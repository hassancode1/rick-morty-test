import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HomePage from "../home-page";

vi.mock("react-router", () => ({
  useNavigate: () => vi.fn(),
}));

describe("HomePage", () => {
  it("renders title and CTA", () => {
    render(<HomePage />);
    expect(screen.getByText("Rick And Morty")).toBeInTheDocument();
    expect(screen.getAllByText("Get Started")[0]).toBeInTheDocument();
  });
});
