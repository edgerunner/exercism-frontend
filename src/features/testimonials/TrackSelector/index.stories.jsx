import TrackSelector from "./";
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
  tracks: [
    {
      slug: "ruby",
      title: "Ruby",
      icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/ruby.svg",
      count: 12,
    },
    {
      slug: "erlang",
      title: "Erlang",
      icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/erlang.svg",
      count: 9,
    },
    {
      slug: "elm",
      title: "Elm",
      icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/elm.svg",
      count: 7,
    },
  ],
};
