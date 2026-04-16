
const imgEle = document.querySelector("img")

fetch("https://dog.ceo/api/breedss/image/random")
.then((response) => {
    console.log(response);
    return response.json(); //.json is asynchronus function
})
.then((response) => {
    console.log(response);
    if(response.status === "error") {
        throw new Error(response.message);
    }
    imgEle.src = response.message;
})
.catch((error) => {
    console.log(error);
});


const dummyPostData = {
    title: "This is a POST post",
    userId: 7,
}
fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    header: { "Content-Type" : "application/json"},
    body: JSON.stringify(dummyPostData),
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

function fetchProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    console.log( {response});
    if(!response.title) {
        throw new Error(response.message)
    }
    const liChildEle = document.createElement("li");
    liChildEle.textContent = response.title;
    ulEle.appendChild(liChildEle);
  })
  .catch((error) => console.error(error));
}

fetchProduct(1)