import React, { useState } from "react";

const JoinConnection = () => {
  const [connections, setConnections] = useState([
    {
      id: 1,
      turfName: "Greenfield",
      time: "6:00 PM",
      requiredPlayers: 5,
      joinedPlayers: 2,
    },
    {
      id: 2,
      turfName: "Sunrise Turf",
      time: "7:30 PM",
      requiredPlayers: 4,
      joinedPlayers: 4,
    },
  ]);

  const handleJoin = (id) => {
    setConnections((prevConnections) =>
      prevConnections.map((conn) =>
        conn.id === id && conn.joinedPlayers < conn.requiredPlayers
          ? { ...conn, joinedPlayers: conn.joinedPlayers + 1 }
          : conn
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🤝 Join a Connection</h2>
      {connections.length === 0 ? (
        <p>No open connections available.</p>
      ) : (
        connections.map((conn) => (
          <div
            key={conn.id}
            className="bg-white border p-4 rounded shadow-md mb-4"
          >
            <h3 className="text-lg font-semibold">{conn.turfName}</h3>
            <p>⏰ Time: {conn.time}</p>
            <p>
              🙋‍♂️ Players Joined: {conn.joinedPlayers}/{conn.requiredPlayers}
            </p>
            <button
              className={`mt-2 px-4 py-1 rounded ${
                conn.joinedPlayers >= conn.requiredPlayers
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              } text-white`}
              disabled={conn.joinedPlayers >= conn.requiredPlayers}
              onClick={() => handleJoin(conn.id)}
            >
              {conn.joinedPlayers >= conn.requiredPlayers ? "Full" : "Join Now"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default JoinConnection;
