import List from "./list";
import { Pill } from "/src/components";
import { useMemo } from "react";
import { useMachine } from "@xstate/react";
import machine from "./MyTestimonials.machine.js";
import "./MyTestimonials.css";

export default function MyTestimonials(props) {
  const [state] = useMachine(machine);
  console.log(state);

  const totalCount = useMemo(
    () =>
      state.context.testimonials?.tracks.reduce(
        (sum, track) => sum + track.count,
        0
      ),
    [state]
  );

  return (
    <main className="MyTestimonials page">
      <header>
        <h1>Testimonials I&apos;ve left</h1>
        <Pill value={totalCount} />
      </header>
      <List {...props} />
    </main>
  );
}
