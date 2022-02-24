const { formBlock } = document.forms;

const indexUrl = '/newImg'

formBlock.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tweetInputs = Object.fromEntries(new FormData(formBlock));
  const response = await fetch(indexUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tweetInputs),
  })
})
