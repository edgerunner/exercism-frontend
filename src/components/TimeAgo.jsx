import { useState, useEffect } from "react";

export default function TimeAgo({ date }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const ago =
    diff < 0
      ? "in the future"
      : years > 1
      ? `${years} years ago`
      : years === 1
      ? "a year ago"
      : months > 1
      ? `${months} months ago`
      : months === 1
      ? "a month ago"
      : days > 1
      ? `${days} days ago`
      : days === 1
      ? "a day ago"
      : hours > 1
      ? `${hours} hours ago`
      : hours === 1
      ? "an hour ago"
      : minutes > 1
      ? `${minutes} minutes ago`
      : minutes === 1
      ? "a minute ago"
      : "just now";

  return <time time={date.toISOString()}>{ago}</time>;
}
