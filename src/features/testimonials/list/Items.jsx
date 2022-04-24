import Item from "./Item";
import "./Items.css";

export default function Items({ testimonials }) {
  return (
    <div className="Testimonials">
      {testimonials.map((testimonial) => (
        <a
          key={testimonial.id}
          href={`https://exercism.org/profiles/${testimonial.mentor.handle}/testimonials?uuid=${testimonial.id}`}
        >
          <Item {...testimonial} />
        </a>
      ))}
    </div>
  );
}
