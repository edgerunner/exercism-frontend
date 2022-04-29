import Loading from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    scoped: {
      description:
        "This is not a real prop. If a parent element has `Loading-scope` class, then the component will be scoped.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

export function Overlay({ scoped }) {
  return (
    <div className={scoped ? "Loading-scope" : null}>
      <h1>Loading</h1>
      {[1, 2, 3, 4].map((i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          euismod, nunc euismod euismod consectetur, nisl nisl euismod nisl,
          euismod euismod nisl nisl euismod.
        </p>
      ))}
      <Loading />
    </div>
  );
}
Overlay.args = {
  scoped: false,
};
