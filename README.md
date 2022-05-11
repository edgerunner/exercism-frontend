# Exercism frontend developer challenge

Hi Exercism people. Here's [my take on the frontend developer challenge](https://edgerunner.github.io/exercism-frontend/), or at least the first part of it where I built the components bottom-up (ie. starting from atomic ones and building compound components from those.) The second part (where I implement the API communication and state management) was meant for after the first screening as [mentioned here](https://github.com/exercism/job-application-process/) but I did it up-front anyway
because I had some time and it was fun.

### Some notes

- There's a [Storybook setup](https://edgerunner.github.io/exercism-frontend/storybook/) as well. Play with individual components if you like.
- The `<SiteNavigation>` component is a dummy placeholder. Normally it would consist of a more componentized approach, as in `<MyTestimonials>` down
- One main focus has been keeping the output DOM as lean as possible.
  Only 8-deep from the top level component, and no decorative/wrapper elements. CSS can handle all those requirements here.
- I used [XState](https://xstate.js.org) for app state management
- I used [Cypress](https://cypress.io) for E2E testing.
  Run `yarn cy:open` to see it in action. Don't forget to have the dev server running already (`yarn dev`).
- I worked in short bursts in-between other stuff on this, but this definitely
  takes more than 5-6 hours for well-thought output.

Hope you like it…

Cheers,  
[Mert](https://exercism.org/profiles/edgerunner)
