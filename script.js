//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("level");
  const level = calculateDOMLevel(element);
  alert("The level of the element is: " + level);
});

function calculateDOMLevel(element) {
  let level = 0;
  let currentElement = element;

  while (currentElement.parentNode !== null) {
    currentElement = currentElement.parentNode;
    level++;
  }

  return level;
}
