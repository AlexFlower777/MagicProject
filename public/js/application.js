const buyCard = document.querySelector(".container_buy");

// const cityInput = document.querySelector("#cityInput");
// console.log(cityInput);

// Запрос в поисковой строке на все города по начальным буквам
// cityInput.addEventListener("input", async (e) => {
//   console.log(e.target.value);
//   let search = e.target.value;
//   let response = await fetch(`/`, {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({ search }),
//   });
//   let answer = await response.json();
//   console.log(answer);
// });

console.log(buyCard);
const cart = document.querySelector("#cart");
console.log(cart);

buyCard?.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!localStorage.cart) {
    console.log("1212");
    localStorage.setItem("cart", JSON.stringify([]));
  }
  console.log(localStorage.cart);
  // check for clicking on buy btn
  const { id } = e.target.dataset;
  console.log(e.target.dataset);
  console.log(id);
  if (e.target.dataset.id) {
    const cart = JSON.parse(localStorage.cart) || []; // array of id (cards)
    console.log(cart);
    // check if card was already added
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.cart = JSON.stringify(cart);
    }
  }
  console.log(localStorage.cart);
});

cart?.addEventListener("click", async (e) => {
  e.preventDefault();
  let cards = localStorage.cart;
  console.log(cards);
  let response = await fetch("/cart", {
    model: {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ cards }),
    },
  });
});

const { formBlock } = document.forms;

const indexUrl = "/newImg";

formBlock?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const tweetInputs = Object.fromEntries(new FormData(formBlock));
  const response = await fetch(indexUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweetInputs),
  });
  let answer = await response.json();
  console.log(answer);
  if (response.ok) {
    window.location = `/users/profile/${answer}`;
  } else {
    console(response);
    console.log("Not Ok");
  }
});
