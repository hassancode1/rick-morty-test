import { render, screen } from "@testing-library/react";
import CharacterCard from "../CharacterCard";
import { describe, it, expect } from "vitest";

const character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive" as const,
  species: "Human",
  type: "",
  gender: "Male" as const,
  origin: { name: "Earth (C-137)", url: "" },
  location: { name: "Citadel of Ricks", url: "" },
  image: "https://example.com/rick.png",
  episode: [],
  url: "",
  created: "",
};

describe("CharacterCard", () => {
  it("renders character name, species and origin", () => {
    render(<CharacterCard character={character} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("Earth (C-137)")).toBeInTheDocument();
  });
});
