
let menuBar = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");

window.onscroll = () => {
    menuBar.classList.remove("fa-chevron-up");
    navBar.classList.remove("active");
    if(scrollY > 70) {
        document.querySelector("#scroll-top").classList.add("active")
    }
    else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
}

menuBar.onclick = () => {
    menuBar.classList.toggle("fa-chevron-up");
    navBar.classList.toggle("active");
}

document.querySelectorAll(".images-slider img").forEach(image => {
    image.onclick = () => { 
        let src = image.getAttribute("src");
        let mainHomeImg = document.querySelector(".main-home-img");
        mainHomeImg.src = src;
    }
})

// Features Loading
function loading() {
    document.querySelector(".loading-container").classList.add("fade-out");
}
function fadeOut() {
    setInterval(loading, 2800);
}

window.onload = fadeOut();


// Initialize Swiper
let swiper = new Swiper(".reviews-slider", {
    pagination: {
        el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
        deplay: 7500,
        disibleOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    }
})