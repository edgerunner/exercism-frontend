import Pagination from "./Pagination";

export default {
  title: "Controllers/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 15,
  current: 8,
  spread: 2,
  cap: 1,
  children: ({ page, current }) => (current ? <b>{page}</b> : <> {page} </>),
  spacer: <> … </>,
};
