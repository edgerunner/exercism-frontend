import Item from "./Item";
import "./List.css";

export default function List({ testimonials }) {
  return (
    <section className="Testimonials">
      {testimonials.map((testimonial) => (
        <a
          key={testimonial.id}
          href={`https://exercism.org/profiles/${testimonial.mentor.handle}/testimonials?uuid=${testimonial.id}`}
        >
          <Item {...testimonial} />
        </a>
      ))}
    </section>
  );
}
