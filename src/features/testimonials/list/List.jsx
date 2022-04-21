import Item from "./Item";
import "./List.css";

export default function List({ testimonials }) {
  return (
    <section className="Testimonials">
      {testimonials.map((testimonial) => (
        <Item key={testimonial.id} {...testimonial} />
      ))}
    </section>
  );
}
