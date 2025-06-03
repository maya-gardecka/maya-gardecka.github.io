import { spellPhonetically } from "./phonetic.js";
import { handleButtonClick, selectTool } from "./selectTool.js";

selectTool();

function testingMode(t) {
  if (t == (1, 0, 0, 0)) {
    handleButtonClick(spellPhonetically);
  }
}

testingMode((1, 0, 0, 0));
