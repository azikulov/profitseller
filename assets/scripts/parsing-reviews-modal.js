document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".parsing-reviews-modal");
  const openModalButton = document.querySelector(
    ".link-group .link-group-right .link-group__btn"
  );
  const modalCloseButton = document.querySelector(
    ".parsing-reviews-modal .parsing-reviews-modal__close-btn"
  );

  function closeModal() {
    modal.style.diplay = "none";
  }

  function openModal() {
    modal.style.diplay = "block";
  }

  modalCloseButton.addEventListener("click", closeModal);
  openModalButton.addEventListener("click", openModal);
});
