import { createMachine, assign } from "xstate";

export default /** @xstate-layout N4IgpgJg5mDOIC5QFkCeACALnTBLAtgPYB2uAhgDawB0AMoWRLsVAMQQljXMBuhA1lwBmYTAGMAFgFowPMACdUmCcyiJQAB0KxceEupAAPRAFYATABoQqRABYAnADZq9245MB2M-bMmAjAAMAMwAHCYAvuFWaFg4BCTkVNQASmCMqNQAkhAUYKwAwhJkLGBY8mRi-OiwYLliesQGWjoNBsYItrYh1B5+Zn6efo6+bvZBVjYInh4uZkF9Ad625j6R0RjYsHhEpJQ0qelZOXmFxTDohPIQCqpN2rq4+khGdl09fQO9wyaj49Z29gCLhMJkcrg8IT8IRC8wiURAMU22wSexSaQgGWyuQKRRK6A0ZBgdxaj0az3abiBZi6jkcQXcITMtNsE0QYPs1DC9lBQTM0L5PzWCI2cR2iX26Iy9EYqnYnG4xD4gmoInE0iR8V2VGJDyeoHagUcfmofg8TghoPMoNZU1B1Fs3kWnRCAR8MMi8OIhGu8GeiNFKKS0qYLB1rXJdks-wQgJcgPsfXs9khIzMQv9W014rRhyxYDDpLaiCCQSBpa8pYTXk6JhtJhh1GpdKhQx+tjN6ZFmbFqIOGLoDBDamezV1ZP1bKNJpCw1dtgCJl50LrvPtpd5jl6ASh1M7sW7gYl6QLepeCFLznLc1dpupyxttlNLkcNJvARfJb3Gp72pH93DE4IFCNpPkmYHgRBQQeuEQA */
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
