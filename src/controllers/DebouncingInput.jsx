import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { useMemo, useCallback } from "react";

/** @xstate-layout N4IgpgJg5mDOIC5QBEwCMD2BXAdgYwEscoBJHABywBcA6VTXQ4gYgA9YqBDKsGzgMx4AnABQQwAG04BPAJTN62fEVIVqddEqZREochlgEqBDDl0hWiAKwAGGgHYAnAA57Nx04DMANgCMjgBZnABoQaUQAWgAmTxoA72dfH3tfKICo7zdvAF9s0MVGFTJKWmLqZnN9Q2NTc0sEKKj7OO8bK1arFxsbewCrUPCEJLsg+ytEm083Tytc-M1C4jKqZlNlyoMjEzMkC0RPTzsrXxtfANOAs89HHwHImJbEgL7z1pnPKNy8kBwMcXhdgVlEs1KUIBIwBtqts6ohejRnG1XDYMod0t47ggIr4zjQ-IdfFYPvFnO1PHMQEDtMsNAxgTpdlUtrVdvV4giojZnE1uYTTqdMalYi4fN4+p4+glSRSqUVQTR1ozNjUdqB6gdnHEkvZvMd-AEdb5BQ8RZl4mlvGKkjKFvTFXplTDWYhGhyuTyonyTklMdjHI48ZNHO4Uf4mjkvkA */
const machine = createMachine(
  {
    context: { value: "" },
    id: "DebouncingInput",
    on: {
      onInput: {
        actions: "updateValue",
        target: ".Input",
      },
    },
    initial: "Idle",
    states: {
      Idle: {},
      Debouncing: {
        after: {
          delay: {
            actions: "fireChangeEvent",
            target: "Idle",
          },
        },
      },
      Input: {
        always: {
          target: "Debouncing",
        },
      },
    },
  },
  {
    actions: {
      updateValue: assign({ value: (_, event) => event.value }),
    },
  }
);

export default function DebouncingInput({
  delay = 500,
  defaultValue = "",
  onChange,
  children,
}) {
  const options = useMemo(
    () => ({
      delays: { delay },
      actions: {
        fireChangeEvent: (context) => onChange?.(context.value),
      },
      context: { value: defaultValue },
    }),
    [delay, onChange]
  );
  const [state, send] = useMachine(machine, options);

  const handleInput = useCallback(
    (value) => send("onInput", { value }),
    [send]
  );

  return children(
    state.context.value,
    handleInput,
    state.matches("Debouncing")
  );
}
