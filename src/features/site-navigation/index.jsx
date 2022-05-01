import "./index.css";

export default function SiteNavigation() {
  return (
    <nav id="SiteNavigation">
      <a href="#" id="logo-home">
        Exercism
      </a>
      <a href="#" id="nav-dashboard" className="current">
        Dashboard
      </a>
      <a href="#" id="nav-tracks">
        Tracks
      </a>
      <a href="#" id="nav-mentoring">
        Mentoring
      </a>
      <a href="#" id="nav-contribute">
        Contribute
      </a>
      <a href="#" id="badge-comments" className="new" title="Comments">
        &nbsp;
      </a>
      <a href="#" id="badge-updates" title="Updates">
        &nbsp;
      </a>
      <a href="#" id="notifications" data-new="2" title="Notifications">
        &nbsp;
      </a>
      <a href="#" id="reputation" className="new" title="Reputation">
        300K
      </a>
      <button id="nav-menu" title="Navigation menu">
        &nbsp;
      </button>
    </nav>
  );
}
