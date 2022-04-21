import TrackIcon from "./TrackIcon";

export default {
  title: "Components/TrackIcon",
  component: TrackIcon,
  argTypes: {
    size: {
      options: ["normal", "small"],
      control: "radio",
    },
    track: {
      control: "select",
      options: [
        "abap",
        "bash",
        "c",
        "csharp",
        "cpp",
        "cfml",
        "clojure",
        "clojurescript",
        "coffeescript",
        "common-lisp",
        "crystal",
        "d",
        "dart",
        "delphi",
        "elixir",
        "elm",
        "emacs-lisp",
        "erlang",
        "fsharp",
        "fortran",
        "go",
        "groovy",
        "haskell",
        "java",
        "javascript",
        "julia",
        "kotlin",
        "lfe",
        "lua",
        "mips",
        "nim",
        "objective-c",
        "ocaml",
        "perl5",
        "pharo-smalltalk",
        "php",
        "plsql",
        "prolog",
        "purescript",
        "python",
        "r",
        "racket",
        "raku",
        "reasonml",
        "ruby",
        "rust",
        "scala",
        "scheme",
        "sml",
        "swift",
        "tcl",
        "typescript",
        "vbnet",
        "vimscript",
        "wasm",
        "wren",
        "x86-64-assembly",
      ],
    },
  },
};

const Template = (args) => <TrackIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  track: "elixir",
};

export const Small = Template.bind({});
Small.args = {
  track: "ruby",
  size: "small",
};
