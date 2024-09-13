// Navigation Bar effet scroll
window.addEventListener("scroll",function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

// Services section -Modal
const serviceModal=document.querySelectorAll(".service-modal");
const learMoreBtn=document.querySelectorAll(".learn-more-btn");
const modalCloseBtn=document.querySelectorAll(".modal-close-btn");

var modal= function (modalclick) {
    serviceModal[modalclick].classList.add("active");
}

learMoreBtn.forEach((learMoreBtn,i) =>{
    learMoreBtn.addEventListener("click",() =>{
        modal(i);
    });
});


modalCloseBtn.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener("click",()=>{
        serviceModal.forEach((modalView)=>{
            modalView.classList.remove("active");
        })
    });
});

//Portfolio section Modal

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const PortfolioCloseBtns=document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalclick) {
    portfolioModals[modalclick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click",() =>{
        portfolioModal(i);
    });
});


PortfolioCloseBtns.forEach((PortfolioCloseBtn)=>{
    PortfolioCloseBtn.addEventListener("click",()=>{
        portfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        })
    });
});

//============SWIPER===================
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//  ==== Scroll down====
const scrollTOpBtn = document.querySelector(".scroll-down-btn");

window.addEventListener("scroll", function(){
    scrollTOpBtn.classList.toggle("active",this.window.scrollY > 500);
});

scrollTOpBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// =====Navigation=========

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop -50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*="+ id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*="+ id + "]").classList.remove("active");
        }
    });
});

//light | Dark

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("theme-dark") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("theme-dark");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Menu response
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-item a");


menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItems.forEach( (navItem) =>{
    navItem.addEventListener("click", ()=>{
        navigation.classList.remove("active");
    })
} )