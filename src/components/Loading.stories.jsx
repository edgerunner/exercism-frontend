import Loading from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
};

export function Overlay() {
  return (
    <div className="example">
      <h1>Loading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod,
        nunc euismod euismod consectetur, nisl nisl euismod nisl, euismod
        euismod nisl nisl euismod.
      </p>
      <Loading />
    </div>
  );
}
