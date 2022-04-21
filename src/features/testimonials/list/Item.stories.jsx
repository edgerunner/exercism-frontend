import Item from "./Item";

export default {
  title: "Features/Testimonials/List/Item",
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 23530,
  track: {
    slug: "ruby",
    title: "Ruby",
    icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/ruby.svg",
  },
  exercise: {
    slug: "log-line-parser",
    title: "Log line Parser",
    icon_url:
      "https://dg8krxphbh767.cloudfront.net/exercises/logs-logs-logs.svg",
  },
  mentor: {
    handle: "taekari",
    avatar_url:
      "https://exercism.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3gzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9048fb093ecc9d507ec34d595023b1b7cc63aa2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWNocEFjZz0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e51c85b8d2c9669c631b964f2f35132e4e43e95f/avatar.jpg",
  },
  content:
    "This was my first mentoring experience, and I learned a lot from the careful guidance I received.\nI would like to become a similar mentor once I have acquired s",
  created_at: "2022-02-28T21:37:36.104Z",
};
