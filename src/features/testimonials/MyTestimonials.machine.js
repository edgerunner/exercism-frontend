import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { useMemo } from "react";

/** @xstate-layout N4IgpgJg5mDOIC5QFkCeACALnTBLAtgPYB2uAhgDawB0AMoWRLsVAMQQljXMBuhA1lwBmYTAGMAFgFowPMACdUmCcyiJQAB0KxceEupAAPRAEYADAHZqADgCcJ2wGZrZ6yYCsj9xYBsAGhBUREcTE2oAJgsAFh8zcJiLDwtfAF8UgLQsHAIScipqACUwRlRqAEkICjBWAGEJMhYwLHkyMX50WDAqsT1iAy0dXoNjBHMLd2oo20jwxzMnM0cLAKDRnysouJMor28oixcLNIyMbFg8IlJKGiKS8srquoaYdEJ5CAVVfu1dXH0kIyIdz2ahecIuEzrNybKIrUzrSZbHY+cHhDzuY4gTJnC65a6FYoQUoVKq1eqNdAaMgwb6DP59AEjCxo6i2CFmEx2dzcjxwhAhML2ExeHy2bwo6zhTHY7KXPI3QnEh5k55NMCGBRiXCdDrFeSSWm-f6gEbWaLUaLzHxeCxs+awwLBUKs0JeKLbbzucIY9JY06yvH5W5EugMJgsdicbjEPiCagicTSHE5K5UQ1DRmmYVRCKQnbWSXWKY+ax8-a2ajW6buFzc6zrNK+4iED7wAEy84p+WhxhfAEDI0Mk2IKLhPm2Mysif2cK2Nkmb2j6X+zty-HBpVVdP04aIayOCvhb2WCz28KLfyO0a2HMFmvTZKjuyc5dZVeBhV3ei9ljb42AhBRWsSY5n3KICwXMwfEvVYom5ahtjMbw2W8bNrFfZM1yDRU-yHAD3ARMEIShRCHVWG9JlCSJ3A5ZwCK8DCA1TNtNB+DNh1GUsr05agzD4swokE9w4MWRIfTSIA */
const machine = createMachine(
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
              "Change exercise search": {
                actions: ["updateExercise", "resetPage"],
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
      updateExercise: assign({
        parameters: ({ parameters }, { exercise }) => ({
          ...parameters,
          exercise,
        }),
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

export default function useTestimonalsMachine() {
  const [state, send] = useMachine(machine);

  const events = useMemo(
    () => ({
      onPageChange: (page) => send("Change page", { page }),
      onTrackChange: (track) => send("Change track selection", { track }),
      onExerciseChange: (exercise) =>
        send("Change exercise search", { exercise }),
      onOrderChange: (order) => send("Change ordering", { order }),
    }),
    [send]
  );

  return [state, events];
}
