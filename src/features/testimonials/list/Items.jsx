import Item from "./Item";
import "./Items.css";
import { Loading } from "/src/components";

export default function Items({ testimonials, loading }) {
  return (
    <div className="Testimonials Loading-scope">
      {testimonials.map((testimonial) => (
        <a
          key={testimonial.id}
          href={`https://exercism.org/profiles/${testimonial.mentor.handle}/testimonials?uuid=${testimonial.id}`}
        >
          <Item {...testimonial} />
        </a>
      ))}
      {loading && <Loading />}
    </div>
  );
}
