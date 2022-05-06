import { createMachine, assign } from "xstate";

export default /** @xstate-layout N4IgpgJg5mDOIC5QFkCeACALnTBLAtgPYB2uAhgDawB0AMoWRLsVAMQQljXMBuhA1lwBmYTAGMAFgFowPMACdUmCcyiJQAB0KxceEupAAPRFIBMATmoB2AKwXzADisAGBw5vPbAFgA0IVIhWAIwAbNTmpiEAzA4hNuYeXl4Avsl+aFg4BCTkVNQASmCMqHS4sJjUAJLEEKIK+Mxk2KwGWjp6xAbGCHZhISFW5iFepl5WpqOmfgEI7jbhUa4eHiGRwanpGNjl2aSUNIXF1AAiTWQFRRCorAAKZPJk+HXy6JJkLJCt2rq4+khGiC80XCESCtiCXhijls00QNgcQXCXkczkWNmiUSsVg2IAy2zwRD2eUOVxOZzoDCYLHYnG4xD4gmoInE0nxu1y8H+bR+f1A3SCS2opgcSSC8OcwqsIthPQcpmoSUckzFNiiNhsqTSIGIhFqnJQWyyhI5FMYqi+7V+nX+3SkQQFQqSqqGnmc5ilIRlI0R8Icas8dliQVMURxeKNOX2FyOtDKFWqtWw8gaxCaYAtPOtfMQUS8iNMNmD5nMUSCUVWyxlJbCDhLAuFfvMeY1WvDO2NUZJJVj5WoAGVVBQwFINGQYOgKHGMx0ujnS9QBQ5PBZIc4grWZYMHOF7WqrCNHFFy2HDe3I8TLt249RkABXCh4EdjsATqdc74zm1z+aLqyYptuAWBYyrEVjhBKIZruibi2CemRnkSByXqUvYAKL4BomAYJO5TTlas4IFKliROqjgDG4a5BFW5bULWpYSm4URNmKcFsh2F4xm+mgfvhX4IIsYGLsuTaLOu5ibgW4SmM4HguCWbpMaxEaIdGpKnJg5xdnhvIAvx85CeMIlrhu-hwgkCoxG6ErossoatqeBLnkhRzqec9Bmiw2lZrpcTyuY9ojH+a55mKMropYTZxCE7iYsKdhKQhJpdmSGleQRAkLq4wmrmJXpDOE6rBHKzgyV4NhlQljkqVp76Wjp3TClEmVLoZOUmTMIxNUMXgIn+lnBs4KT2fBVUcmlfF2rmjplUxISuu6sQyrm27xPu4KqhMQItqkQA */
createMachine(
  {
    context: {
      parameters: {
        page: null,
        track: null,
        order: "newest_first",
        exercise: null,
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
        type: "parallel",
        states: {
          List: {
            initial: "Indeterminate",
            states: {
              Indeterminate: {
                always: [
                  {
                    cond: "List is empty",
                    target: "Empty list",
                  },
                  {
                    cond: "Only one page",
                    target: "Single-page list",
                  },
                  {
                    target: "Multi-page list",
                  },
                ],
              },
              "Single-page list": {},
              "Multi-page list": {},
              "Empty list": {},
            },
          },
          Data: {
            initial: "Ready",
            states: {
              Ready: {
                on: {
                  "Parameter changed": {
                    actions: "Update parameters",
                    target: "Loading",
                  },
                },
              },
              Loading: {
                invoke: {
                  src: "fetchTestimonials",
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
      },
    },
    id: "My testimonials",
  },
  {
    services: { fetchTestimonials, fetchEverything },
    actions: {
      updateTestimonials: assign({ testimonials: (_, event) => event.data }),
      updateTracksAndTestimonials: assign({
        tracks: (_, event) => event.data.tracks,
        testimonials: (_, event) => event.data.testimonials,
      }),
    },
    guards: {
      "List is empty": ({ testimonials }) => testimonials.results.length === 0,
      "Only one page": ({ testimonials }) =>
        testimonials.pagination.total_pages === 1,
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

function populateTrackData({ tracks, testimonials }) {
  testimonials.tracks.forEach((track, index) => {
    testimonials.tracks[index] = tracks.get(track);
    testimonials.tracks[index].count = testimonials.track_counts[track] || 0;
  });
  return { tracks, testimonials };
}

function tracksMap(json) {
  return new Map(json.tracks.map((track) => [track.slug, track]));
}
