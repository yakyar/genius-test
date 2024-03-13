<<<<<<< HEAD
// const modal = document.querySelector(".backdrop");
// const modalBtnOpen = document.querySelector(".modal-btn-open");
// const modalBtnOpenn = document.querySelector(".modal-btn-openn");
// const modalBtnClose = document.querySelector(".modal-btn-close");

// const toggleModal = () => modal.classList.toggle("is-hidden");

// modalBtnOpen.addEventListener("click", toggleModal);
// modalBtnOpenn.addEventListener("click", toggleModal);
// modalBtnClose.addEventListener("click", toggleModal);
const modal = document.querySelector(".backdrop");

const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelectorAll(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach(function (e) {
  e.addEventListener("click", toggleModal);
});

modalBtnClose.forEach(function (e) {
  e.addEventListener("click", toggleModal);
});
=======
// const modal = document.querySelector(".backdrop");
// const modalBtnOpen = document.querySelector(".modal-btn-open");
// const modalBtnOpenn = document.querySelector(".modal-btn-openn");
// const modalBtnClose = document.querySelector(".modal-btn-close");

// const toggleModal = () => modal.classList.toggle("is-hidden");

// modalBtnOpen.addEventListener("click", toggleModal);
// modalBtnOpenn.addEventListener("click", toggleModal);
// modalBtnClose.addEventListener("click", toggleModal);
const modal = document.querySelector(".backdrop");

const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelectorAll(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach(function (e) {
  e.addEventListener("click", toggleModal);
});

modalBtnClose.forEach(function (e) {
  e.addEventListener("click", toggleModal);
});
>>>>>>> f063963e72cc067ba98155880cf45025fe2c1fc0
