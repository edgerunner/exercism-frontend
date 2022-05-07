import { createMachine, assign } from "xstate";

export default /** @xstate-layout N4IgpgJg5mDOIC5QFkCeACALnTBLAtgPYB2uAhgDawB0AMoWRLsVAMQQljXMBuhA1lwBmYTAGMAFgFowPMACdUmCcyiJQAB0KxceEupAAPRAFYATABoQqRABYAnADZq9248cmAzAAYzADj9HN0cAXxCrNCwcAhJyKmoAJTBGVGoASQgKMFYAYQkyFjAseTIxfnRYMCyxPWIDLR1ag2MEW1s-agB2AEYzMxNvV36TVysbBBNOzpczTzNuhdtPe26gsIiMbFg8IlJKGiSU9MzsvIKYdEJ5CAVVeu1dXH0kIzt2rt7+wdth0es7ezeFwmSZtRy+EzddqddYgSJbHaxfaJZIQVL0RiqdicbjEPiCagicTSBExPZUe6NJ51F4tbreRzdajdTr2Tq+bz0-oBMamEzOH6Avzs7yDTyOPxhcIgYiEG7wF7w6K7OI0DFMFiUx7PUAtH68hCAlxC+xmdqeTq2KawpXbMmqlFHDJZLVNWmITw+ag+TpzNxs-qdA0mPyeahmxzizz0lneZY2zbKpHxQ5ougMDVqF4NbU03WIdxM7qBWb+Aae7r2YNzahLOMeTp+SHCmHS22I8kHVHjTQPN35hA+Zw+v2OAOTA22FkuIJN+bFzqOTpmBNRO0q-au6nNRDFg3FqUhIA */
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
              "Change ordering": {
                actions: "updateOrder",
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
