# Leaderboard Exercise - useMemo

## Problem

This exercise demonstrates the importance of `useMemo` for expensive calculations in React with a **very obvious** performance impact, especially during **continuous interactions** like dragging a slider.

## Scenario

A gaming dashboard that displays player statistics and leaderboards. The app needs to:
- Filter 500 players by level
- Calculate **very expensive** derived stats for each player (simulating complex analytics like ELO ratings, skill scores, performance trends)
- Sort players by different metrics
- Provide smooth UI interactions

## ⚠️ Bad Example Issues

The bad example recalculates **VERY expensive** operations (100,000 iterations per player × 500 players) on **every render**, including when:
- **Dragging the Min Level slider** 🎚️ - causes **extreme lag and stuttering**
- Toggling the theme (dark mode) 🌙
- Changing view mode (compact/expanded)
- Changing sort order
- ANY state change!

**Expected behavior:** The slider will be **extremely laggy and stuttering** when you drag it! Each movement triggers expensive recalculation of all players. This is intentional to make the problem extremely obvious.

## ✅ Solution

Use `useMemo` with smart memoization strategy:
1. **Pre-calculate stats ONCE on mount** (empty dependencies `[]`)
2. **Filter pre-calculated data** (only depends on minLevel)
3. **Sort pre-calculated data** (only depends on sortBy)

**Result:** 
- Slider drags smoothly! ⚡
- All UI interactions are instant!
- Only initial load takes time (acceptable)

## How to Test

1. **Run the bad-example**: Drag the Min Level slider
   - Notice **extreme stuttering and lag** 
   - The slider feels broken and unresponsive
   - Check console - calculations running on every pixel of movement
   - Try toggling theme/compact view - also laggy

2. **Run the solution**: Drag the same slider
   - **Butter smooth dragging!** ⚡
   - Instant response to all controls
   - Check console - stats calculated ONCE on mount
   - Filtering/sorting is instant (working with pre-calculated data)

## Key Takeaways

- `useMemo` prevents unnecessary recalculations
- **Pre-calculate expensive data once** when possible
- Use empty dependencies `[]` for one-time calculations on mount
- Filter/sort pre-calculated data for instant interactions
- Continuous interactions (sliders) expose performance issues dramatically
- Smart memoization strategy: calculate → memoize → filter/sort memoized data
