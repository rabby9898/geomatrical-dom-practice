function inputElement(inputId) {
  const element = document.getElementById(inputId);
  const elementString = element.value;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

function showArea(inputId, area) {
  const areaElement = document.getElementById(inputId);
  areaElement.innerText = area;
}
function isValidated(input1, input2) {
  if (isNaN(input1) || isNaN(input2)) {
    alert("You must put a number");
    return false;
  }
  return true;
}

// triangle
function triangleCalculate() {
  const width = inputElement("triangle-base");
  const height = inputElement("triangle-height");

  if (isValidated(width, height)) {
    const area = 0.5 * width * height;

    showArea("triangle-area", area);
    calculationEntry("Triangle", area);
  }
}

// rectangle
function rectangleCalculate() {
  const width = inputElement("rectangle-width");
  const length = inputElement("rectangle-length");

  if (isValidated(width, length)) {
    const area = width * length;

    showArea("rectangle-area", area);
    calculationEntry("Rectangle", area);
  }
}

// parallelogram
function parallelogramCalculate() {
  const base = inputElement("parallelogram-base");
  const length = inputElement("parallelogram-height");

  if (isValidated(base, length)) {
    const area = base * length;

    showArea("parallelogram-area", area);
    calculationEntry("Parallelogram", area);
  }
}

// Ellipse
function calculateEllipseArea() {
  const majorRadius = inputElement("ellipse-major-radius");
  const minorRadius = inputElement("ellipse-minor-radius");

  if (isValidated(majorRadius, minorRadius)) {
    const areaCal = 3.1416 * majorRadius * minorRadius;
    const area = areaCal.toFixed(2);

    showArea("ellipse-area", area);
    calculationEntry("Ellipse", area);
  }
}

function calculationEntry(areaType, area) {
  const entryElement = document.getElementById("calculation-entry");

  const count = entryElement.childElementCount;

  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = `${
    count + 1
  }.  ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

  entryElement.appendChild(p);
}
