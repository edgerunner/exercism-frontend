import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import "./List.css";

export default function List({
  testimonials,
  onPageChange,
  onTrackChange,
  currentPage,
  pageCount,
  tracks,
  selectedTrack,
}) {
  const headerProps = { onTrackChange, tracks, selectedTrack };
  const footerProps = { onPageChange, current: currentPage, count: pageCount };
  return (
    <section className="Testimonials">
      <Header {...headerProps} />
      <Items testimonials={testimonials} />
      <Footer {...footerProps} />
    </section>
  );
}
