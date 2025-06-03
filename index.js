const mainContainer = document.getElementById("main-container");

const pages = {
  "Helpdesk Tools": [
    "../helpdesk/helpdesk.html",
    "A dynamic and responsive site built using HTML, CSS, and JavaScript",
    "Set tools for the helpdesk employee",
  ],
  // test2: ["z", "y", "x"],
};

function loadToolButtons() {
  const pagesContainer = document.getElementById("page-selection");
  const ol = document.createElement("ol");
  Object.entries(pages).forEach(([toolName, toolInfo]) => {
    const main_li = document.createElement("li");
    const a = document.createElement("a");
    a.href = toolInfo[0];
    a.textContent = toolName;
    a.target = "_blank";
    main_li.appendChild(a);
    const ul = document.createElement("ul");
    for (const subItem of toolInfo.slice(1)) {
      const li = document.createElement("li");
      li.textContent = subItem;
      ul.appendChild(li);
    }
    main_li.appendChild(ul);
    ol.appendChild(main_li);
    pagesContainer.appendChild(ol);
  });
}

loadToolButtons();
