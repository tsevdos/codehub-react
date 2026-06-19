import { StrictMode, useState } from "react";
import type { ComponentType } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import DerivedStateTodoAppBadExample from "../exercises/02-derived-state/todoApp/bad-example/App";
import DerivedStateTodoAppSolution from "../exercises/02-derived-state/todoApp/solution/App";
import DerivedStateProfileFormBadExample from "../exercises/02-derived-state/profileForm/bad-example/App";
import DerivedStateProfileFormSolution from "../exercises/02-derived-state/profileForm/solution/App";
import DerivedStateExercise from "../exercises/02-derived-state/exercise/App";
import DerivedStateLeaderboardBadExample from "../exercises/02-derived-state/leaderboard/bad-example/App";
import DerivedStateLeaderboardSolution from "../exercises/02-derived-state/leaderboard/solution/App";
import AssignmentBStarter from "../exercises/05-assignment-b/starter/App";
import LiftingStateBadExample from "../exercises/04-lifting-state-up/bad-example/App";
import ChatBadExample from "../exercises/04-lifting-state-up/chat-application/bad-example/App";
import TemperatureBadExample from "../exercises/04-lifting-state-up/temperature-converter/bad-example/App";
import LayoutBadExample from "../exercises/06-context-api/app-layout/bad-example/App";
import LayoutSolution from "../exercises/06-context-api/app-layout/solution/App";

type ExerciseKey =
  | "01-todo-app—bad-example"
  | "02-todo-app—solution"
  | "03-profile-form—bad-example"
  | "04-profile-form-solution"
  | "05-form-exercise"
  | "06-leaderboard-bad-example"
  | "07-leaderboard-solution"
  | "04-bad"
  | "04-chat-bad"
  | "04-temp-bad"
  | "05-starter"
  | "06-layout—bad-example"
  | "07-layout-solution";

type ExerciseItem = {
  key: ExerciseKey;
  title: string;
  bugNote: string;
  Component: ComponentType;
};

type Topic = {
  key: string;
  title: string;
  items: ExerciseItem[];
};

type Selection = {
  topic: Topic;
  exercise: ExerciseItem;
};

const TOPICS: Topic[] = [
  {
    key: "derived-state",
    title: "Derived State",
    items: [
      {
        key: "01-todo-app—bad-example",
        title: "Todo app — bad example",
        bugNote: "The application is working as expected, but with many unnecessary re-renders, state updates and poor code quality.",
        Component: DerivedStateTodoAppBadExample,
      },
      {
        key: "02-todo-app—solution",
        title: "Todo app — solution",
        bugNote: "The application is working as expected, with derived state and improved performance.",
        Component: DerivedStateTodoAppSolution,
      },
      {
        key: "03-profile-form—bad-example",
        title: "Profile form — bad example",
        bugNote: "The application is working as expected but with poor code quality, unnecessary state updates and complicated UI.",
        Component: DerivedStateProfileFormBadExample,
      },
      {
        key: "04-profile-form-solution",
        title: "Profile form — solution",
        bugNote: "The application is working as expected with improved code quality, optimized state management, and simplified UI.",
        Component: DerivedStateProfileFormSolution,
      },
      {
        key: "05-form-exercise",
        title: "Form — exercise",
        bugNote: "Apply what you've learned about derived state to this form.",
        Component: DerivedStateExercise,
      },
      {
        key: "06-leaderboard-bad-example",
        title: "Leaderboard — bad example",
        bugNote: "The leaderboard almost un-responsive for several secionds when you interact with any of it's filters or other UI elements.",
        Component: DerivedStateLeaderboardBadExample,
      },
      {
        key: "07-leaderboard-solution",
        title: "Leaderboard — solution",
        bugNote: "The leaderboard almost un-responsive for several secionds when you interact with any of it's filters or other UI elements.",
        Component: DerivedStateLeaderboardSolution,
      },
    ],
  },
  {
    key: "lifting-state-up",
    title: "Lifting State Up",
    items: [
      {
        key: "04-bad",
        title: "Cart — bad example",
        bugNote: "Each sibling owns its own cart slice — they can't see each other's items.",
        Component: LiftingStateBadExample,
      },
      {
        key: "04-chat-bad",
        title: "Chat — bad example",
        bugNote: "Message list and input are in separate siblings — sending a message does nothing visible.",
        Component: ChatBadExample,
      },
      {
        key: "04-temp-bad",
        title: "Temperature — bad example",
        bugNote: "Celsius and Fahrenheit inputs own their own state and drift apart immediately.",
        Component: TemperatureBadExample,
      },
      {
        key: "05-starter",
        title: "Assignment",
        bugNote: "The task board has the same sibling-state problem — fix it by lifting state up.",
        Component: AssignmentBStarter,
      },
    ],
  },
  {
    key: "context-api",
    title: "Context API",
    items: [
      {
        key: "06-layout—bad-example",
        title: "Layout — bad example",
        bugNote: "The application is working as expected, but we can clearly see the prop drilling problem we have with all the children components.",
        Component: LayoutBadExample,
      },
      {
        key: "07-layout-solution",
        title: "Layout — solution",
        bugNote: "The application is working as expected and with the use of Context API it doesn't have the prop drilling problem.",
        Component: LayoutSolution,
      },
    ],
  },
];

const DEFAULT_EXERCISE: ExerciseKey = "01-todo-app—bad-example";

function findSelection(key: ExerciseKey): Selection {
  for (const topic of TOPICS) {
    const exercise = topic.items.find((item) => item.key === key);
    if (exercise) return { topic, exercise };
  }
  throw new Error(`Unknown exercise: ${key}`);
}

function WorkshopBrowser() {
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseKey>(DEFAULT_EXERCISE);
  const [openTopics, setOpenTopics] = useState<Set<string>>(
    () => new Set([findSelection(DEFAULT_EXERCISE).topic.key])
  );

  const selection = findSelection(selectedExercise);
  const CurrentExercise = selection.exercise.Component;

  function toggleTopic(key: string) {
    setOpenTopics((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function handleSelectExercise(key: ExerciseKey) {
    setSelectedExercise(key);
    const sel = findSelection(key);
    setOpenTopics((prev) =>
      prev.has(sel.topic.key) ? prev : new Set([...prev, sel.topic.key])
    );
  }

  return (
    <div className="browser-shell">
      <aside className="exercise-sidebar">
        <div className="sidebar-intro">
          <h1>React State Ownership</h1>
        </div>

        <div className="topic-list">
          {TOPICS.map((topic) => {
            const isOpen = openTopics.has(topic.key);
            return (
              <section key={topic.key} className="topic-card">
                <button
                  className="topic-card-toggle"
                  onClick={() => toggleTopic(topic.key)}
                  type="button"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <div className="topic-card-toggle-text">
                    <p className="topic-label">Topic</p>
                    <h2>{topic.title}</h2>
                  </div>
                  <span className={`chevron${isOpen ? " is-open" : ""}`} aria-hidden="true">
                    ›
                  </span>
                </button>

                {isOpen && (
                  <div className="topic-item-list">
                    {topic.items.map((exercise) => (
                      <button
                        key={exercise.key}
                        className={
                          exercise.key === selectedExercise
                            ? "exercise-button is-active"
                            : "exercise-button"
                        }
                        onClick={() => handleSelectExercise(exercise.key)}
                        type="button"
                      >
                        <strong>{exercise.title}</strong>
                      </button>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </aside>

      <main className="exercise-preview">
        <div className="preview-header">
          <p className="preview-eyebrow">{selection.topic.title}</p>
          <h2>{selection.exercise.title}</h2>
          <p className="preview-bug-note">{selection.exercise.bugNote}</p>
        </div>

        <CurrentExercise />
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <WorkshopBrowser />
  </StrictMode>,
);
