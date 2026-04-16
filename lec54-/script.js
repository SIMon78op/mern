
const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random();
    if (num < 0.5) resolve("Number is less than 0.5");
    else reject("Numbe is greater than or equal to 0.5");
  }, 1000);
});

console.log(request);

request
  .then((resolveMessage) => {
    console.log({ resolveMessage });
  })
  .catch((rejectMessage) => {
    console.log({ rejectMessage });
  })
  .finally(() => {
    //ex: stop loading button
    console.log("Request is completed");
  });
//5 users
/* generate a random number from 0-9
if this number is a valid index of users array, then resolve the promise with this user
else reject the promise
*/

const users = [
  {
    id: 0,
    name: "Vaibhav",
  },
  {
    id: 1,
    name: "Pratham",
  },
  {
    id: 2,
    name: "Neeraj",
  },
  {
    id: 3,
    name: "Manoj",
  },
  {
    id: 4,
    name: "Shivam",
  },
];

const findUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex < users.length) {
      resolve(users[randomIndex]);
    } else reject("Not a valid index.");
  }, 1000);
});

findUser
  .then((resolveResponse) => {
    console.log({ resolveResponse });
  })
  .catch((rejectResponse) => {
    console.log({ rejectResponse });
  })
  .finally(() => {
    console.log("Request completed.");
  });

/* CODING THE ACTUAL CALLBACK HELL */

const instagramUsers = [
  {
    userId: 0,
    posts: [
      {
        caption: "I'm don",
        imageUrl: "#",
        comments: ["ghanta ka don", "🔥🔥", "chota don 😂"],
      },
    ],
  },
  {
    userId: 1,
    posts: [
      {
        caption: "I'm don",
        imageUrl: "#",
        comments: ["**donkey", "nice photo dear", "don't post 😂"],
      },
    ],
  },
];

/* function fetchUser(userId, callback) {
  setTimeout(() => {
    if (userId >= instagramUsers.length) callback("invalid userId");
    else callback(null, instagramUsers[userId]);
  }, 1000);
}

function fetchPosts(user, callback) {
  setTimeout(() => {
    if (user?.posts?.length) callback(null, user.posts[0]);
    else callback("User has not posted anything");
  }, 2000);
}

function fetchComments(post, callback) {
  setTimeout(() => {
    if (post?.comments?.length) callback(null, post.comments);
    else callback("This post has no comments");
  }, 2000);
}

fetchUser(giveRandomNumber(instagramUsers.length), (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  fetchPosts(data, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    fetchComments(data, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log({ comments: data });
    });
  });
}); */

function giveRandomNumber(high) {
  return Math.floor(Math.random() * high);
}

/* CODING THE SAME CODE WITH PROMISES */

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId >= instagramUsers.length) reject("User doesn't exists");
      else resolve(instagramUsers[userId]);
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user?.posts?.length) resolve(user.posts[0]);
      else reject("User has not posted anything");
    }, 1000);
  });
}

function fetchComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post?.comments?.length) resolve(post.comments);
      else reject("this post doesn't have any comments");
    }, 1000);
  });
}

fetchUser(giveRandomNumber(instagramUsers.length * 2))
  .then((user) => {
    console.log({ user });
    return fetchPosts(user);
  })
  .then((post) => {
    console.log({ post });
    return fetchComments(post);
  })
  .then((comments) => {
    console.log({ comments });
  })
  .catch((error) => {
    console.error(error);
  });



let products = [
	{
		id: 0,
		name: "Mobile",
		quantity: 10,
	},
	{
		id: 1,
		name: "Bottle",
		quantity: 0,
	},
	{
		id: 2,
		name: "Car",
		quantity: 20,
	},
];


let cart = [];
function fetchProduct(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id < products.length) {
				resolve(products[id]);
			} else {
				reject("Product Not Exists");
			}
		});
	});
}

function fetchProductQuantity(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (product.quantity > 0) resolve(product);
			else reject("Quantity must be greater than 0");
		});
	});
}

function cartHasProduct(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!cart.includes(product)) resolve(product);
			else reject("Cart has already");
		});
	});
}

fetchProduct(Math.floor(Math.random() * products.length * 2))
	.then(fetchProductQuantity)
	.then(cartHasProduct)
	.then((data) => {
		cart.push(data);
		console.log(cart);
	})
	.catch((err) => {
		console.log(err);
	});