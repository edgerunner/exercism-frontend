import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import "./List.css";

export default function List({
  testimonials,
  pageCount,
  currentPage,
  onPageChange,
  tracks,
  selectedTrack,
  onTrackChange,
  search,
  onSearch,
  sort,
  onSort,
}) {
  const headerProps = {
    onTrackChange,
    tracks,
    selectedTrack,
    search,
    onSearch,
    sort,
    onSort,
  };
  const footerProps = { onPageChange, current: currentPage, count: pageCount };
  return (
    <section className="Testimonials">
      <Header {...headerProps} />
      <Items testimonials={testimonials} />
      <Footer {...footerProps} />
    </section>
  );
}
