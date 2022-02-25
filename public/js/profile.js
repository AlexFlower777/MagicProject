const profileContainer = document.querySelector("#profileContainer");

profileContainer?.addEventListener("click", async (e) => {
  e.preventDefault();

  if (e.target.dataset.delete === "delete") {
    const card = e.target.closest(".card");
    const cardId = e.target.dataset.id;

    const response = await fetch(`/users/profile/${cardId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      card.remove();
    }
  }
});
