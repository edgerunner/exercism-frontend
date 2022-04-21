import TimeAgo from "./TimeAgo";

export default {
  title: "Components/TimeAgo",
  component: TimeAgo,
};

const Template = (props) => <TimeAgo {...props} />;

export const JustNow = Template.bind({});
JustNow.args = {
  date: new Date(),
};
