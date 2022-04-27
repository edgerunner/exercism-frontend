import TrackSelector from "./TrackSelector";
import fixtures from "./TrackSelector.fixtures.js";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Features/Testimonials/TrackSelector",
  component: TrackSelector,
};

const Template = (args) => {
  const [, updateArgs] = useArgs();
  return (
    <TrackSelector
      {...args}
      onSelect={(selected) => updateArgs({ selected })}
    />
  );
};

export const SomeTracks = Template.bind({});
SomeTracks.args = {
  selected: "erlang",
  tracks: fixtures,
};

export const OneTrack = Template.bind({});
OneTrack.args = {
  selected: "elm",
  tracks: [fixtures[2]],
};
