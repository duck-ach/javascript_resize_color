const body = document.querySelector("body");
const colors = ["#CD5C5C", "#5F9EA0", "#9370DB", "#708090", "#DB7093"];
body.style.backgroundColor = colors[0];
function handleResize() {
  let width = window.innerWidth;
  if (width > 1200) {
    body.style.backgroundColor = colors[0];
  } else if (width <= 1200 && width > 1000) {
    body.style.backgroundColor = colors[1];
  } else if (width <= 1000 && width > 800) {
    body.style.backgroundColor = colors[2];
  } else if (width <= 800 && width > 600) {
    body.style.backgroundColor = colors[3];
  } else {
    body.style.backgroundColor = colors[4];
  }
}

window.addEventListener("resize", handleResize);
