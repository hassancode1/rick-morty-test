import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterCard from "../components/CharacterCard";

import type { Character, ApiResponse } from "../types/character";

const CharacterPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchCharacters = async (search: string) => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        page: "1",
        ...(search && { name: search }),
      });

      const response = await fetch(
        `https://rickandmortyapi.com/api/character?${params}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }

      const data: ApiResponse = await response.json();
      setCharacters(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCharacters(searchTerm);
  };

  const handleCharacterClick = (character: Character) => {
    console.log("Character clicked:", character);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header showGetStarted={false} onGetStartedClick={() => navigate("/")} />

      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-[#1E1E1E] mb-6">
              Characters
            </h1>
            <p className="text-lg text-[#757575] ">Search</p>

            <form onSubmit={handleSearch} className="mb-2  w-[240px]">
              <div className="flex gap-4 ">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search characters..."
                  className="flex-1 px-4 py-2 border border-[#767676] rounded-md outline-none "
                />
              </div>
            </form>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="text-lg text-[#757575]">
                Loading characters...
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center py-12">
              <div className="text-lg text-red-500">Error: {error}</div>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {characters.map((character) => (
                  <CharacterCard
                    key={character.id}
                    character={character}
                    onClick={handleCharacterClick}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CharacterPage;
