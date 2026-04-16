const buttonEle = document.querySelector("button");
const spanEle = document.querySelector("span");

buttonEle.addEventListener("click", (event) => {
    event.preventDefault();
    spanEle.textContent = "Welcome to the class";
    setTimeout(() => {
        spanEle.remove();
    }, 500)
});

console.log("hello");
alert("alerting");
console.log("world");