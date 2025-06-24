import { usePhoneticSpeller } from "./f_phonetic.js";

const toolsData = {
  t_a: {
    title: "Phonetic Spelling",
    useFunction: usePhoneticSpeller,
    sectionId: "a_1",
  },
  t_b: {
    title: "Number System",
    useFunction: function () {
      console.log("running b");
      // const testTitle = `<h2>b title</h2>`;
      // const b = document.getElementById("b_1");
      // b.innerHTML = testTitle;
      // b.classList.remove("hidden");
    },
    sectionId: "b_1",
  },
  t_c: {
    title: "Word Unscramble",
    useFunction: function () {
      console.log("running c");
    },
    sectionId: "c_1",
  },
  t_d: {
    title: "Tool D",
    useFunction: function () {
      console.log("running d");
    },
    sectionId: "d_1",
  },
};

const alphabet = {
  a: "assembly",
  b: "basic",
  c: "cloud",
  d: "dart",
  e: "email",
  f: "flutter",
  g: "graphics",
  h: "host",
  i: "interface",
  j: "java",
  k: "kotlin",
  l: "library",
  m: "malware",
  n: "network",
  o: "object",
  p: "python",
  q: "quantum",
  r: "racket",
  s: "swift",
  t: "thread",
  u: "user",
  v: "verilog",
  w: "wireless",
  x: "xml",
  y: "yacc",
  z: "zigzag",
};

export function getAlphabet() {
  return alphabet;
}

export function getTools() {
  return toolsData;
}
export function getOneToolObject(t_id) {
  return toolsData[t_id];
}
export function getTitle(t_id) {
  return toolsData[t_id].title;
}
export function getSectionId(t_id) {
  return toolsData[t_id].sectionId;
}
export function getUseFunction(t_id) {
  return toolsData[t_id].useFunction;
}
