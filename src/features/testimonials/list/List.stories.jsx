import List from "./List";
import itemFixtures from "./Items.fixtures.js";
import trackFixtures from "./TrackSelector.fixtures.js";

export default {
  title: "Features/Testimonials/List",
  component: List,
  argTypes: {
    onPageChange: { action: "onPageChange" },
    onTrackChange: { action: "onTrackChange" },
    onSort: { action: "onSort" },
  },
};

const Template = (args) => <List {...args} />;

export const Full = Template.bind({});
Full.args = {
  testimonials: itemFixtures,
  currentPage: 1,
  pageCount: 3,
  tracks: trackFixtures,
  selectedTrack: "ruby",
};

export const Few = Template.bind({});
Few.args = {
  testimonials: itemFixtures.slice(0, 3),
  currentPage: 1,
  pageCount: 1,
  tracks: trackFixtures,
  selectedTrack: "ruby",
};
