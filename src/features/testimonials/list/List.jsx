import Items from "./Items";
import Footer from "./Footer";
import "./List.css";

export default function List({ testimonials, onPageChange, current, count }) {
  return (
    <section className="Testimonials">
      <header>🚧 Header under construction 🚧</header>
      <Items testimonials={testimonials} />
      <Footer onPageChange={onPageChange} current={current} count={count} />
    </section>
  );
}
