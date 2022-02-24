const buyCard = document.querySelector('.container');
console.log(buyCard);
const cart = document.querySelector('#cart');
console.log(cart);

buyCard?.addEventListener('click', async (e) => {
  e.preventDefault();
  if (!localStorage.cart) {
    console.log('1212');
    localStorage.setItem('cart', JSON.stringify([]));
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

cart?.addEventListener('click', async (e) => {
  e.preventDefault();
  let cards = localStorage.cart;
  console.log(cards);
  let response = await fetch('/cart', {
    model: {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ cards }),
    },
  });
});
