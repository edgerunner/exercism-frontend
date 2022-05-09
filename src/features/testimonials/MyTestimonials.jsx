import List from "./list";
import { Pill, Loading } from "/src/components";
import useTestimonialsMachine from "./MyTestimonials.machine.js";
import "./MyTestimonials.css";

export default function MyTestimonials() {
  const [state, events] = useTestimonialsMachine();

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
        onPageChange={events.onPageChange}
        tracks={state.context.testimonials.tracks}
        onTrackChange={events.onTrackChange}
        selectedTrack={state.context.parameters.track}
        exercise={state.context.parameters.exercise}
        onExerciseChange={events.onExerciseChange}
        order={state.context.parameters.order}
        onOrderChange={events.onOrderChange}
        loading={state.matches("Ready.Loading")}
      />
    </main>
  );
}
