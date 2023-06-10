const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    console.log('Click');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
     
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
  
    aside.classList.toggle('inactive');
}


/* function toggleCarritoAside() {
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
      
    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
  
    aside.classList.toggle('inactive');
} */


