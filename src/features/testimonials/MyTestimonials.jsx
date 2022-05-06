import List from "./list";
import { Pill } from "/src/components";
import { useMachine } from "@xstate/react";
import machine from "./MyTestimonials.machine.js";
import "./MyTestimonials.css";

export default function MyTestimonials(props) {
  const [state] = useMachine(machine);
  console.log(state);

  return (
    <main className="MyTestimonials page">
      <header>
        <h1>Testimonials I&apos;ve left</h1>
        <Pill value={63} />
        {/* dummy value to be replaced */}
      </header>
      <List {...props} />
    </main>
  );
}
