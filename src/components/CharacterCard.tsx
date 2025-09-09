import React from "react";
import type { Character } from "../types/character";

interface CharacterCardProps {
  character: Character;
  onClick?: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-lg border border-[#D9D9D9] transition-shadow cursor-pointer overflow-hidden"
      onClick={() => onClick?.(character)}
    >
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2 truncate">
          {character.name}
        </h3>

        <div className="space-y-1 text-sm">
          <p className="text-[#757575]">{character.species}</p>
          <p className="text-[#B3B3B3]">{character.origin.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
