import SiteNavigation from "/src/features/site-navigation";
import MyTestimonials from "/src/features/testimonials/MyTestimonials";
import { Full } from "/src/features/testimonials/list/index.stories";
import "./index.css";

export default function App() {
  return (
    <main id="App">
      <SiteNavigation />
      <MyTestimonials {...Full.args} />
    </main>
  );
}
