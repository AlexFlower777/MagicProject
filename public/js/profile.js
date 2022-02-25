const profileContainer = document.querySelector('#profileContainer');
profileContainer?.addEventListener('click', async (e) => {
  if (e.target.id === 'delete-button') {
    const profileCard = e.target.closest('[data-id]');
    const cardId = profileCard.dataset.id;
    const response = await fetch(`/post/${cardId}`, {
      method: 'DELETE',
      });
    console.log(response);
    if (response.ok) {
      cardId.remove();
    }
  }
});
