import { useState } from "react";
import "./App.css";

type Player = {
    id: string;
    username: string;
    team: "A" | "B";
    level: number;
    kills: number;
    deaths: number;
    assists: number;
    wins: number;
    losses: number;
    matchesPlayed: number;
};

// Generate mock player data
const generatePlayers = (count: number): Player[] => {
    const players: Player[] = [];
    const teams: ("A" | "B")[] = ["A", "B"];

    for (let i = 0; i < count; i++) {
        players.push({
            id: `player-${i}`,
            username: `Player${i}`,
            team: teams[i % 2],
            level: Math.floor(Math.random() * 100) + 1,
            kills: Math.floor(Math.random() * 1000),
            deaths: Math.floor(Math.random() * 800),
            assists: Math.floor(Math.random() * 500),
            wins: Math.floor(Math.random() * 200),
            losses: Math.floor(Math.random() * 150),
            matchesPlayed: Math.floor(Math.random() * 300) + 50,
        });
    }

    return players;
};

const PLAYERS = generatePlayers(500);

// VERY EXPENSIVE calculation - simulates complex analytics (ELO rating, skill scores, etc.)
const calculateStats = (player: Player) => {
    // Simulate VERY expensive calculation
    // This simulates complex game analytics like:
    // - ELO rating calculations
    // - Performance trend analysis
    // - Skill score computations
    // - Match history processing
    let dummy = 0;
    for (let i = 0; i < 100000; i++) {
        dummy += Math.sqrt(i) * Math.sin(i / 1000) + Math.cos(i / 500);
    }

    return {
        ...player,
        kd: player.deaths === 0 ? player.kills.toFixed(2) : (player.kills / player.deaths).toFixed(2),
        winRate: ((player.wins / player.matchesPlayed) * 100).toFixed(1),
    };
};

export default function App() {
    const [minLevel, setMinLevel] = useState(0);
    const [sortBy, setSortBy] = useState<"kills" | "deaths" | "kd" | "winRate">("kills");

    // UI state (should NOT trigger expensive recalculations)
    const [darkMode, setDarkMode] = useState(false);
    const [compactView, setCompactView] = useState(false);

    console.log("🔴 BAD: Component rendering...");

    // BAD: This runs on EVERY render, including when dragging the slider!
    const startTime = performance.now();
    const playersWithStats = PLAYERS.map(calculateStats); // Expensive calculation on EVERY render!
    const calculationTime = performance.now() - startTime;

    console.log(`🔴 BAD: Calculated stats for ${playersWithStats.length} players in ${calculationTime.toFixed(0)}ms`);

    // BAD: Filtering also runs on every render
    const filteredPlayers = playersWithStats.filter((player) => player.level >= minLevel);

    // BAD: Sorting also runs on every render
    const sortedPlayers = [...filteredPlayers].sort((a, b) => {
        if (sortBy === "kills") return b.kills - a.kills;
        if (sortBy === "deaths") return b.deaths - a.deaths;
        if (sortBy === "kd") return parseFloat(b.kd) - parseFloat(a.kd);
        if (sortBy === "winRate") return parseFloat(b.winRate) - parseFloat(a.winRate);
        return 0;
    });

    return (
        <div className={`leaderboard-container ${darkMode ? "dark" : ""}`}>
            <h1>🎮 Game Leaderboard</h1>
            <div className="performance-warning">
                <p>⚠️ <strong>BAD EXAMPLE - No Memoization</strong></p>
                <p>⏱️ Last calculation: <strong>{calculationTime.toFixed(0)}ms</strong></p>
                <p>Try dragging the level slider - watch it lag and stutter! 🐌</p>
            </div>

            <div className="controls">
                <label>
                    Min Level: {minLevel}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={minLevel}
                        onChange={(e) => setMinLevel(Number(e.target.value))}
                    />
                </label>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
                    <option value="kills">Sort by Kills</option>
                    <option value="deaths">Sort by Deaths</option>
                    <option value="kd">Sort by K/D</option>
                    <option value="winRate">Sort by Win Rate</option>
                </select>

                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️" : "🌙"} Toggle Theme
                </button>
                <button onClick={() => setCompactView(!compactView)}>
                    {compactView ? "Expanded" : "Compact"} View
                </button>
            </div>

            <div className="player-list">
                <h2>Players ({sortedPlayers.length})</h2>
                <table className={compactView ? "compact" : ""}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Team</th>
                            <th>Level</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                            <th>K/D</th>
                            <th>Win Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPlayers.slice(0, 50).map((player) => (
                            <tr key={player.id}>
                                <td>{player.username}</td>
                                <td className={`team-${player.team}`}>Team {player.team}</td>
                                <td>{player.level}</td>
                                <td>{player.kills}</td>
                                <td>{player.deaths}</td>
                                <td>{player.assists}</td>
                                <td>{player.kd}</td>
                                <td>{player.winRate}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
