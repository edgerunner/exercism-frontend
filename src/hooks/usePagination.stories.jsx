import usePagination from "./usePagination";

export default {
  title: "Hooks/usePagination",
  argTypes: {
    count: { control: "number" },
    current: { control: "number" },
    spread: { control: "number" },
    cap: { control: "number" },
  },
};

export function Default(...args) {
  const pageGenerator = usePagination(...args);

  return [
    [...pageGenerator()].map(({ page, current, spacer }) =>
      spacer ? <>…</> : current ? <b>{page}</b> : <> {page} </>
    ),
  ];
}

Default.args = {
  count: 15,
  current: 8,
  spread: 2,
  cap: 1,
};

export function FirstAndLast(...args) {
  const pageGenerator = usePagination(...args);

  return [
    [...pageGenerator()].map(({ page, current, spacer, first, last }) => [
      first ? <>&lt; </> : null,
      spacer ? <>…</> : current ? <b>{page}</b> : <> {page} </>,
      last ? <> &gt;</> : null,
    ]),
  ];
}
FirstAndLast.args = Default.args;
