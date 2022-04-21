import Pill from "./Pill";

export default {
  title: "Components/Pill",
  component: Pill,
};

const Template = (args) => <Pill {...args} />;

export const MeaningOfLifeUniverseAndEverything = Template.bind({});
MeaningOfLifeUniverseAndEverything.args = {
  value: 42,
};

export const BeverlyHills = Template.bind({});
BeverlyHills.args = {
  value: 90210,
};
