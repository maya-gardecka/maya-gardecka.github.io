import { showPwOptions } from "./passwordGenerator.js";
import { spellPhonetically } from "./phonetic.js";
import { handleButtonClick, selectTool } from "./selectTool.js";

selectTool();

function testingMode(t) {
  if (t == 0) {
    handleButtonClick(spellPhonetically);
  } else if (t == 1) {
    handleButtonClick(showPwOptions);
  }
}

// testingMode(0);
testingMode(1);
