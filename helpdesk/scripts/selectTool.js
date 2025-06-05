import { showPwOptions } from "./passwordGenerator.js";
import { spellPhonetically } from "./phonetic.js";

const buttonInfo = {
  "Phonetic Spelling": spellPhonetically,
  "Password Generator": showPwOptions,
  // nameC: C,
  // nameD: D,
};

function C() {
  return document.getElementById("c-tool");
}
function D() {
  return document.getElementById("d-tool");
}
export function selectTool() {
  const buttons = document.getElementById("tool-button-set");
  Object.entries(buttonInfo).forEach(([toolName, toolFunct]) => {
    const wholeButton = document.createElement("button");
    wholeButton.className = "whole-button";
    wholeButton.textContent = toolName;
    wholeButton.addEventListener("click", () => {
      handleButtonClick(toolFunct);
    });

    buttons.appendChild(wholeButton);
  });
}

export function handleButtonClick(btnFunction) {
  document.querySelectorAll(".one-tool").forEach((element) => {
    element.style.display = "none";
  });
  const displayedTool = btnFunction();
  displayedTool.style.display = "block";
}
