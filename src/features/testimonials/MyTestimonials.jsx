import List from "./list";
import { Pill } from "/src/components";
import "./MyTestimonials.css";

export default function MyTestimonials(props) {
  return (
    <main className="MyTestimonials page">
      <header>
        <h1>Testimonials I've left</h1>
        <Pill value={63} />
        {/* dummy value to be replaced */}
      </header>
      <List {...props} />
    </main>
  );
}
