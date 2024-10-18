" use client";

import instructors from "./Data/Instructors";
import ResultTracker from "./Components/ResultTracker";

export default function Home() {
  console.log("Instructors = ", instructors);
  return (
    <div className="">
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        git-Instructor
        <ResultTracker instructors={instructors} />
      </h1>
    </div>
  );
}
