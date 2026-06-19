import { useState, useMemo } from "react";
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

    console.log("🟢 GOOD: Component rendering...");

    // GOOD: Pre-calculate stats ONCE on mount using useMemo with empty dependencies
    const { playersWithStats, calculationTime } = useMemo(() => {
        console.log("🟢 GOOD: Pre-calculating stats for all players (one-time operation)...");
        const startTime = performance.now();
        const players = PLAYERS.map(calculateStats); // Expensive calculation on each player!
        const time = performance.now() - startTime;
        console.log(`🟢 GOOD: Pre-calculated stats for ${players.length} players in ${time.toFixed(0)}ms`);
        return { playersWithStats: players, calculationTime: time };
    }, []); // Empty deps = calculate once on mount

    // GOOD: Filter pre-calculated data - instant!
    const filteredPlayers = useMemo(() => {
        console.log("🟢 GOOD: Filtering players (fast - working with pre-calculated data)...");
        return playersWithStats.filter((player) => player.level >= minLevel);
    }, [playersWithStats, minLevel]);

    // GOOD: Sort pre-calculated filtered data - instant!
    const sortedPlayers = useMemo(() => {
        console.log("🟢 GOOD: Sorting players (fast)...");
        return [...filteredPlayers].sort((a, b) => {
            if (sortBy === "kills") return b.kills - a.kills;
            if (sortBy === "deaths") return b.deaths - a.deaths;
            if (sortBy === "kd") return parseFloat(b.kd) - parseFloat(a.kd);
            if (sortBy === "winRate") return parseFloat(b.winRate) - parseFloat(a.winRate);
            return 0;
        });
    }, [filteredPlayers, sortBy]);

    return (
        <div className={`leaderboard-container ${darkMode ? "dark" : ""}`}>
            <h1>🎮 Game Leaderboard</h1>
            <div className="performance-success">
                <p>✅ <strong>GOOD EXAMPLE - With Memoization</strong></p>
                <p>⏱️ Initial calculation: <strong>{calculationTime.toFixed(0)}ms</strong></p>
                <p>Try dragging the level slider or toggling theme - smooth and instant! ⚡</p>
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
