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

const aSecond = document.getElementById("a-second");

function translate(word) {
  aSecond.innerHTML = "";

  for (const c of word) {
    const letter = c.toLowerCase();
    if (/^[a-z]$/.test(letter)) {
      const letterBox = document.createElement("div");
      letterBox.className = "letter-box";
      letterBox.textContent = alphabet[letter];
      aSecond.appendChild(letterBox);
    }
  }
}

export function spellPhonetically() {
  const aContainer = document.getElementById("a-tool");
  const wordInput = document.getElementById("word-input");
  let word = "";
  const goTranslate = document.getElementById("translateBtn");
  goTranslate.onclick = () => {
    aSecond.innerHTML = "";
    word = wordInput.value;
    translate(word);
  };

  wordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      word = wordInput.value;
      translate(word);
    }
  });

  return aContainer;
}
