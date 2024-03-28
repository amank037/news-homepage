
const mobileNavBtn = document.querySelector('.mobileNavBtn');
const navbarList = document.querySelector('.navbarList');

mobileNavBtn.addEventListener('click', function() {
    navbarList.classList.toggle('active')
    mobileNavBtn.classList.toggle('active')
});

