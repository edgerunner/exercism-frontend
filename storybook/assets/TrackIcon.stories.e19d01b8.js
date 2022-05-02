import{T as n}from"./TrackIcon.8baf42f0.js";import{j as a}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var i={parameters:{storySource:{source:`import TrackIcon from "./TrackIcon";

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

const Template = ({ track, size }) => (
  <TrackIcon
    src={\`https://dg8krxphbh767.cloudfront.net/tracks/\${track}.svg\`}
    size={size}
  />
);

export const Normal = Template.bind({});
Normal.args = {
  track: "elixir",
};

export const Small = Template.bind({});
Small.args = {
  track: "ruby",
  size: "small",
};
`,locationsMap:{normal:{startLoc:{col:17,line:76},endLoc:{col:1,line:81},startBody:{col:17,line:76},endBody:{col:1,line:81}},small:{startLoc:{col:17,line:76},endLoc:{col:1,line:81},startBody:{col:17,line:76},endBody:{col:1,line:81}}}}},title:"Components/TrackIcon",component:n,argTypes:{size:{options:["normal","small"],control:"radio"},track:{control:"select",options:["abap","bash","c","csharp","cpp","cfml","clojure","clojurescript","coffeescript","common-lisp","crystal","d","dart","delphi","elixir","elm","emacs-lisp","erlang","fsharp","fortran","go","groovy","haskell","java","javascript","julia","kotlin","lfe","lua","mips","nim","objective-c","ocaml","perl5","pharo-smalltalk","php","plsql","prolog","purescript","python","r","racket","raku","reasonml","ruby","rust","scala","scheme","sml","swift","tcl","typescript","vbnet","vimscript","wasm","wren","x86-64-assembly"]}}};const r=({track:o,size:l})=>a(n,{src:`https://dg8krxphbh767.cloudfront.net/tracks/${o}.svg`,size:l}),s=r.bind({});s.args={track:"elixir"};const t=r.bind({});t.args={track:"ruby",size:"small"};const m=["Normal","Small"];export{s as Normal,t as Small,m as __namedExportsOrder,i as default};
//# sourceMappingURL=TrackIcon.stories.e19d01b8.js.map
