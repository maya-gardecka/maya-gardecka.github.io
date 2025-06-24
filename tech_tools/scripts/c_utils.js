export function addToolTitle(title) {
  const h2 = document.createElement("h2");
  h2.textContent = title;
  return h2;
}

export function hideAllToolDivs() {
  const allToolDivs = document.querySelectorAll(".tool-divs");
  allToolDivs.forEach((div) => {
    if (!div.classList.contains("hidden")) {
      div.classList.add("hidden");
    }
  });
}
