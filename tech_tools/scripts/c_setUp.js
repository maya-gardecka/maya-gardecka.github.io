import { getTools } from "./a_data.js";

function makeHiddenToolDivs() {
  const toolsBox = document.getElementById("all_hidden_tools");
  const tools = getTools();
  Object.entries(tools).forEach(([k, v]) => {
    const div = document.createElement("div");
    div.id = v.sectionId;
    div.className = "tool-divs";
    div.classList.add("hidden");
    // div.innerHTML = `<h2>${v.title}</h2>`;
    const div2 = document.createElement("div");
    div2.id = `tool_${k[2]}`;
    div2.className = "actual-tool";
    div.appendChild(div2);
    toolsBox.appendChild(div);
  });
}

function makeHeader() {
  const hdr = document.getElementById("hdr");
  const h1 = document.createElement("h1");
  h1.textContent = "Tech Tools";
  hdr.appendChild(h1);
}

function makeFooter() {
  const info = ["Maya Gardecka", "June 2025", "Maya's GitHub"];
  const ftr = document.getElementById("ftr");
  info.forEach((item) => {
    if (item.includes("GitHub")) {
      const a = document.createElement("a");
      a.href = "https://github.com/maya-gardecka";
      a.target = "_blank";
      a.textContent = item;
      ftr.appendChild(a);
    } else {
      const div = document.createElement("div");
      div.textContent = item;
      ftr.appendChild(div);
    }
  });
}

function makeToolsBtns() {
  const tools = getTools();
  const nav = document.getElementById("tools_nav");
  Object.entries(tools).forEach(([k, v]) => {
    const btn = document.createElement("button");
    btn.textContent = v.title;
    btn.className = "tool-btn";
    btn.id = k;
    nav.appendChild(btn);
  });
}

export function createStaticContent() {
  makeToolsBtns();
  makeHeader();
  makeFooter();
  makeHiddenToolDivs();
}
