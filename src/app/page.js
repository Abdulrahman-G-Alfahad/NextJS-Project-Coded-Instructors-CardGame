" use client";
import instructors from "./Data/Instructors";
import ResultTracker from "./Components/ResultTracker";
import Popup from "./Components/Popup";

export default function Home() {
  return (
    <div className="">
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        <ResultTracker instructors={instructors} />
        <Popup />
      </h1>
    </div>
  );
}
