import Avatar from "./Avatar";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Avatar",
  component: Avatar,
};

export const Default = () => (
  <Avatar
    src="https://avatars1.githubusercontent.com/u/1234?s=460&v=4"
    handle="handle"
  />
);

export const WithHandle = () => <Avatar handle="handle" />;

export const AllUnknown = () => <Avatar />;
