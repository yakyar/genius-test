const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
// alert(mobileMenu, menuBtnOpen, menuBtnClose);

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');
// alert(toggleMenu, disableScroll);

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
// alert(mobileMenu, menuBtnOpen, menuBtnClose);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
// alert(mobileMenu, menuBtnOpen, menuBtnClose);

document.querySelectorAll('.mobile-menu__link').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.mobile-menu').className = 'mobile-menu';
  });
});
