const pwOptions = {
  radio: ["Format", ["Sentence", "Abbreviation", "Multi-word"]],
  checkbox: [
    "Requirement character types",
    ["Upper case", "Lower case", "Number", "Symbol", "Dashes?"],
  ],
  number: ["Character count", ["Each type", "Minimum", "Maximum"]],
};

function generateOptions() {
  const oneB = document.getElementById("b-one");
  let num = 0;
  Object.entries(pwOptions).forEach(([inType, [desc, optList]]) => {
    const oneType = document.createElement("div");
    oneType.className = "one-type";
    oneType.id = `type_${inType}`;

    const descDiv = document.createElement("div");
    descDiv.className = "type-desc";
    descDiv.innerHTML = `<div id="type-desc">${desc}</div>`;
    // oneType.textContent = "testtest";
    oneType.appendChild(descDiv);

    const allOneTypeInput = document.createElement("div");
    allOneTypeInput.className = "one-type-inputs-no-desc";
    // allOneTypeInput.textContent = "anafpoasdim[woig[fv";

    optList.forEach((opt) => {
      const optID = `opt${num++}`;
      const inField = document.createElement("input");
      inField.type = inType;
      inField.id = optID;
      const inLabel = document.createElement("label");
      inLabel.for = optID;
      inLabel.textContent = opt;
      console.log(optID);

      const optDiv = document.createElement("div");
      optDiv.className = "opt-div";

      if (inType === "number") {
        optDiv.style.display = "flex";
        optDiv.style.flexDirection = "column";
        optDiv.appendChild(inLabel);
        optDiv.appendChild(inField);
      } else {
        optDiv.appendChild(inField);
        optDiv.appendChild(inLabel);
      }
      allOneTypeInput.appendChild(optDiv);
      oneType.appendChild(allOneTypeInput);
    });

    oneB.appendChild(oneType);
  });
}

export function showPwOptions() {
  const bContainer = document.getElementById("b-tool");

  generateOptions();

  return bContainer;
}
