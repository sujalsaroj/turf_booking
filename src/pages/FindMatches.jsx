// src/pages/FindMatches.jsx
import React from "react";
import matchesData from "../data/matchesData";
import MatchCard from "../components/MatchCard";

const FindMatches = () => {
  return (
    <div className="py-10 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Find Matches</h1>
      <div className="grid gap-6 justify-center">
        {matchesData.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default FindMatches;
