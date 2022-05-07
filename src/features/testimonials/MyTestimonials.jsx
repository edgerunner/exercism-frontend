import List from "./list";
import { Pill, Loading } from "/src/components";
import { useMachine } from "@xstate/react";
import machine from "./MyTestimonials.machine.js";
import "./MyTestimonials.css";

export default function MyTestimonials() {
  const [state, send] = useMachine(machine);

  if (state.matches("Loading"))
    return (
      <div className="Loading-scope">
        <Loading />
      </div>
    );

  return (
    <main className="MyTestimonials page">
      <header>
        <h1>Testimonials I&apos;ve left</h1>
        <Pill value={state.context.testimonials?.total || "?"} />
      </header>
      <List
        testimonials={state.context.testimonials.results}
        currentPage={state.context.testimonials.pagination.current_page}
        pageCount={state.context.testimonials.pagination.total_pages}
        tracks={state.context.testimonials.tracks}
        onTrackChange={(track) => send("Change track selection", { track })}
        selectedTrack={state.context.parameters.track}
        search={state.context.parameters.exercise}
        sort={state.context.parameters.order}
        loading={state.matches("Ready.Loading")}
      />
    </main>
  );
}
