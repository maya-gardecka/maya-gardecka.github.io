import { getUseFunction } from "./a_data.js";
import { getToolKey, updateToolStates } from "./b_states.js";

function navBtnClicked(tool_id) {
  // console.log(`before: ${getToolKey()}`);
  const clickedBtn = document.getElementById(tool_id);
  if (clickedBtn.id !== getToolKey()) {
    const allBtns = document.querySelectorAll(".tool-btn");
    allBtns.forEach((other) => {
      if (other !== clickedBtn) {
        other.classList.remove("clicked");
      }
    });
    updateToolStates(clickedBtn.id);
  }
  if (!clickedBtn.classList.contains("clicked")) {
    clickedBtn.classList.add("clicked");
    const runTool = getUseFunction(getToolKey());
    runTool();
  } else {
    clickedBtn.classList.remove("clicked");
  }
  // console.log(`after: ${getToolKey()}`);
}

export function navBtnListener() {
  const navBtns = document.querySelectorAll(".tool-btn");
  // console.log(navBtns);
  navBtns.forEach((tool) => {
    tool.addEventListener("click", () => {
      // console.log(tool.id);
      navBtnClicked(tool.id);
    });
  });
}
