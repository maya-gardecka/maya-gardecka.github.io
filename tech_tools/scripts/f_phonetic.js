import { getAlphabet } from "./a_data.js";
import { addToolTitle, hideAllToolDivs } from "./c_utils.js";

function setupHtml() {
  const box = document.getElementById("a_1");
  box.innerHTML = "";
  const label = document.createElement("label");
  label.htmlFor = "word_input";
  label.textContent = "Enter text: ";

  const div = document.createElement("div");
  div.id = "in_and_go";

  const anotherDiv = document.createElement("div");
  anotherDiv.id = "label_in";

  const textIn = document.createElement("input");
  textIn.type = "text";
  textIn.id = "word_input";

  const go = document.createElement("button");
  go.textContent = "Translate";
  go.id = "translate_btn";

  const outDiv = document.createElement("div");
  outDiv.id = "phonetic_out";

  const title = addToolTitle("Phonetic Spelling Generator");
  box.appendChild(title);

  anotherDiv.appendChild(label);
  anotherDiv.appendChild(textIn);
  div.appendChild(anotherDiv);
  div.appendChild(go);
  box.appendChild(div);
  box.appendChild(outDiv);
}

function formatIndexZeroLetter(w) {
  let word = w.toUpperCase();
  let firstLetter = word[0];
  word = word.slice(1);
  return `<span class="first-letter">${firstLetter}</span>${word}`;
}

function translate(text) {
  // console.log(text);
  const alphabet = getAlphabet();

  const phonOut = document.getElementById("phonetic_out");
  phonOut.innerHTML = "";

  let currentRow = document.createElement("div");
  currentRow.className = "row";
  phonOut.appendChild(currentRow);

  for (const c of text) {
    const letter = c.toLowerCase();
    if (/^[a-z]$/.test(letter)) {
      const letterBox = document.createElement("div");
      letterBox.className = "letter-box";

      const formattedWord = formatIndexZeroLetter(alphabet[letter]);
      letterBox.innerHTML = formattedWord;

      currentRow.appendChild(letterBox);
    } else if (letter === " ") {
      currentRow = document.createElement("div");
      currentRow.className = "row";
      phonOut.appendChild(currentRow);
    }
  }
}

function listenPhoneticIns() {
  const textIn = document.getElementById("word_input");
  let word = "";

  const translateClick = document.getElementById("translate_btn");
  translateClick.addEventListener("click", () => {
    word = textIn.value;
    translate(word);
  });

  textIn.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      word = textIn.value;
      translate(word);
    }
  });
}

export function usePhoneticSpeller() {
  hideAllToolDivs();
  // console.log("runing phonetic");
  const box = document.getElementById("a_1");
  box.classList.remove("hidden");
  setupHtml();
  listenPhoneticIns();
}
