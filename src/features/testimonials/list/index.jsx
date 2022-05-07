import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import "./index.css";

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
  order,
  onOrderChange,
  loading,
}) {
  const headerProps = {
    onTrackChange,
    tracks,
    selectedTrack,
    search,
    onSearch,
    order,
    onOrderChange,
  };
  const footerProps = { onPageChange, current: currentPage, count: pageCount };
  return (
    <section className="Testimonials">
      <Header {...headerProps} />
      <Items {...{ testimonials, loading }} />
      <Footer {...footerProps} />
    </section>
  );
}
