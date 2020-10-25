// Filter Item 
const filterContainer = document.querySelector(".project__list");
// console.log(filterContainer);
const filterBtns = document.querySelectorAll(".project__link");
const totalBtns = filterBtns.length;
// console.log(totalBtns);

const filterBox = document.querySelectorAll(".project__box");
const totalFilterBox = filterBox.length;

    for (let i = 0; i < totalBtns; i++) {
        filterBtns[i].addEventListener("click", function() {
           filterContainer.querySelector(".active").classList.remove("active");
           this.classList.add("active");

           const filterValue = this.getAttribute("data-filter");
           console.log(filterValue);

           for (let k = 0; k < totalFilterBox; k++) {
                if (filterValue === filterBox[k].getAttribute("data-category")) {
                    filterBox[k].classList.remove("hide");
                    filterBox[k].classList.add("show");
                }
                else {
                    filterBox[k].classList.remove("show");
                    filterBox[k].classList.add("hide");
                }
                if (filterValue === "all") {
                    filterBox[k].classList.remove("hide");
                    filterBox[k].classList.add("show");
                }
           }
        })

    }

// Back To Top 

const toTop = document.querySelector(".to-top");
// console.log(toTop);


$(document).ready(function() {
    $(window).scroll(function() {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        }
        else {
            toTop.classList.remove("active");
        }
    });
 
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });

})

$(document).ready(function() {
    $(".header__navbar--link").click(function() {
        $('html, body').animate({
            scrollTop : $($.attr(this, "href")).offset().top
        }, 1500)
    })
})

// Cursor 

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

// Toggle Menu

function toggleMenu() {
    var menu = document.querySelector(".header__navbar--mobile");
    menu.classList.toggle("active");

}












