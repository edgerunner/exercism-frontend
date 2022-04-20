import Avatar from "./Avatar";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  src: "https://avatars0.githubusercontent.com/u/1234?s=460&v=4",
  handle: "johndoe",
};

export const HandleOnly = Template.bind({});
HandleOnly.args = {
  handle: "johndoe",
};

export const NoData = Template.bind({});
NoData.args = {};
