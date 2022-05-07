import { createMachine, assign } from "xstate";

export default /** @xstate-layout N4IgpgJg5mDOIC5QFkCeACALnTBLAtgPYB2uAhgDawB0AMoWRLsVAMQQljXMBuhA1lwBmYTAGMAFgFowPMACdUmCcyiJQAB0KxceEupAAPRAEYADAHZqADgCcJ2wGZrZ6yYCsj9xYBsAGhBUREcTE2oAJgsAFh8zcJiLDwtfAF8UgLQsHAIScipqACUwRlRqAEkICjBWAGEJMhYwLHkyMX50WDAqsT1iAy0dXoNjBFsXalCLcJDws3cTKLsAoIQTHysouJNw9yjnW3CndzSMjGxYPCJSShoikvLK6rqGmHRCeQgFVX7tXVx9JBGRDuezULzhFxrCxuTZRZamdbUTbhBaOHwQlHuY7pECZc6XXI3QrFCClCpVWr1RroDRkGA-Qb-PqAkbWcI+agHNHWRLhaahEzwhCHcJIhwmNzgxxmRy2bGnLIXHLXfJ3Ul0BhMFjsTjcYh8QTUETiaT45V5eCAgZ-AGgEahTwRbyeHYWcFyoVRCy2ag+WXsnZrSJRL1pHHEQifS0oM7ZK4WjWMb5W35DFmIKLhIW2MycnP2Q5jba7cInXGxpXxolqsmPBk25l2xDWWURHaWCxmWyZmX+QKmbs2azuOyRaIQ+zWMt4uOE1Uk0r0JMsetppsIHxjJHSluLNyzHx9lZRLETTbeMbeEyORbTisElW3BerpnDYGI8GQ9Ywsxw-ujKIxW2Lx3DMHx5lsaI70VB8LRfW0gVWawhQlagzHQmUUViLw7GvMMUiAA */
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
                actions: ["updateSelectedTrack", "resetPage"],
                target: "Loading",
              },
              "Change ordering": {
                actions: ["updateOrder", "resetPage"],
                target: "Loading",
              },
              "Change page": {
                actions: "updatePage",
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
      updateOrder: assign({
        parameters: ({ parameters }, { order }) => ({ ...parameters, order }),
      }),
      updatePage: assign({
        parameters: ({ parameters }, { page }) => ({ ...parameters, page }),
      }),
      resetPage: assign({
        parameters: ({ parameters }) => ({ ...parameters, page: null }),
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
