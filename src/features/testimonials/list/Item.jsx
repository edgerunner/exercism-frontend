import { Avatar, TrackIcon, TimeAgo } from "../../../components";
import "./Item.css";

export default function Item({
  id,
  track,
  exercise,
  mentor,
  content,
  created_at,
}) {
  return (
    <article className="Testimonial" id={`testimonial-${id}`}>
      <a
        href={`https://exercism.org/profiles/${mentor.handle}/testimonials?uuid=${id}`}
      >
        <TrackIcon src={track.icon_url} size="small" />
        <Avatar src={mentor.avatar_url} handle={mentor.handle} />
        <header>
          <h5>{mentor.handle}</h5>
          <h6>
            on {exercise.title} in {track.title}
          </h6>
        </header>
        <p>{content}</p>
        <TimeAgo date={new Date(created_at)} />
      </a>
    </article>
  );
}
