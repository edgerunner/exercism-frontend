import { createMachine, assign } from "xstate";

export default /** @xstate-layout N4IgpgJg5mDOIC5QFkCeACALnTBLAtgPYB2uAhgDawB0AMoWRLsVAMQQljXMBuhA1lwBmYTAGMAFgFowPMACdUmCcyiJQAB0KxceEupAAPRAEYADAHZqADgCcJ2wGYALHevWATLYCsANgA0IKiIHhbe1M4WHtaOjk5xzr62AL7JgWhYOAQk5FTUAEpgjKjUAJIQFGCsAMISZCxgWPJkYvzosGCVYnrEBlo6PQbGCJFWvt4Tvg4W1s4m1t6BwQihZtTeXr6OsxZbc46p6RjYsHhEpJQ0hcV0DEws7JzcxHyC1CLi0idnOZd92rpcPokEZEL5fM4bI5fHYPHM7LYzCYlqYwhEzONYmYzC5bB5HBZUmkQMRCBA4AYMt9shc8vRGKp-gMgb0QcNnB4UQhEdRbIi7NiNhYTPjnIcQFSsudclcihASuVKkzAcDQMMNh5qA5sZEfASvM4uSYYRFfDMMS4-M48d5xZLTjSZQU5SV6fc1CD+irWWrENa1h4NsbbBYcTjHFznBjTR5Y7HvGZETDbcT7T9abLisrBmy-d5HNRxpNprN5osgogfBFdvZfF4vNC8XbjlLflRsyyhqZrEbrNRsQOojNjeCU6kgA */
createMachine(
  {
    context: {
      parameters: {
        page: null,
        track: null,
        order: "newest_first",
        exercise: "",
      },
      testimonials: null,
      tracks: null,
    },
    initial: "Loading",
    states: {
      Loading: {
        invoke: {
          src: "fetchEverything",
          id: "fetch-everything",
          onDone: [
            {
              actions: "updateTracksAndTestimonials",
              target: "Ready",
            },
          ],
        },
        type: "parallel",
      },
      Ready: {
        initial: "Idle",
        states: {
          Idle: {
            on: {
              "Change track selection": {
                actions: "updateSelectedTrack",
                target: "Loading",
              },
            },
          },
          Loading: {
            invoke: {
              src: "fetchTestimonialsOnly",
              id: "fetch-testimonials",
              onDone: [
                {
                  actions: "updateTestimonials",
                  target: "#My testimonials.Ready",
                },
              ],
            },
          },
        },
      },
    },
    id: "My testimonials",
  },
  {
    services: { fetchTestimonialsOnly, fetchEverything },
    actions: {
      updateTestimonials: assign({
        testimonials: (_, event) => event.data.testimonials,
      }),
      updateTracksAndTestimonials: assign({
        tracks: (_, event) => event.data.tracks,
        testimonials: (_, event) => event.data.testimonials,
      }),
      updateSelectedTrack: assign({
        parameters: ({ parameters }, { track }) => ({ ...parameters, track }),
      }),
    },
  }
);

function fetchTestimonials({ parameters }) {
  const url = new URL("https://exercism.org/api/v2/hiring/testimonials");
  for (const [key, value] of Object.entries(parameters)) {
    if (value) url.searchParams.set(key, value);
  }
  return fetch(url).then((res) => res.json());
}

function fetchTracks() {
  return fetch("https://exercism.org/api/v2/tracks")
    .then((res) => res.json())
    .then(tracksMap);
}

function fetchEverything(context) {
  return Promise.all([fetchTracks(), fetchTestimonials(context)])
    .then(([tracks, testimonials]) => ({ tracks, ...testimonials }))
    .then(populateTrackData);
}

function fetchTestimonialsOnly(context) {
  return fetchTestimonials(context)
    .then((testimonials) => ({ tracks: context.tracks, ...testimonials }))
    .then(populateTrackData);
}

function populateTrackData({ tracks, testimonials }) {
  testimonials.total = 0;
  testimonials.tracks.forEach((track, index) => {
    testimonials.tracks[index] = tracks.get(track);
    testimonials.tracks[index].count = testimonials.track_counts[track] || 0;
    testimonials.total += testimonials.track_counts[track];
  });
  return { tracks, testimonials };
}

function tracksMap(json) {
  return new Map(json.tracks.map((track) => [track.slug, track]));
}
