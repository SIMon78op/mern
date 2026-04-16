//creating an element
const h3Element = document.createElement("h3");

h3Element.textContent = "Hi, I'm a H3 element";

const div1 = document.querySelector("div");
div1.appendChild(h3Element);

const h3Element1 = document.querySelector("h3");

//Events in DOM
const para1 = document.querySelector("p");
para1.addEventListener("click", (event) => {
  para1Clicked(event);
});

function para1Clicked(event) {
  h3Element1.remove();
  console.log("You've clicked a Para", event.type);
}

const h2Element = document.querySelector("h2");
h2Element.addEventListener("mouseover", () => {
  h2Element.style.backgroundColor = "Yellow";
});

h2Element.addEventListener("mousedown", () => {
  h2Element.style.backgroundColor = "red";
});

h2Element.addEventListener("mouseup", () => {
  h2Element.style.backgroundColor = "Yellow";
});

document.addEventListener("keydown", (event) => {
  console.log("event type: " + event.key);
  console.log("event type: " + event.keyCode);
});

const para = document.querySelector("p");
console.log(para);

para.style.color="blue"

const h2 = document.querySelector("h2");
console.log(h2);

h2.style.backgroundColor="grey"



const imageElement = document.querySelector("img");

imageElement.setAttribute("src", "imgae2.png")