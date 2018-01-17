const DOMstring = {
    recentPosts: document.querySelector('.recent-posts'),
    recentPost: document.querySelectorAll('.recent-posts .post'),
    mainBlog: document.querySelector('.blog-left'),
    post: document.querySelectorAll('.blog-left .post'),
    wrap: document.querySelectorAll('.choose-us .wrapper'),
    show: document.querySelectorAll('.choose-us .wrapper h5'),
    h4: document.querySelectorAll('section.about-ability .choose-us h4'),
    icon: document.querySelectorAll('.choose-us .wrapper i'),


}

var acc = document.querySelectorAll(".wrapper h4");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        acc.forEach(element => {
            element.classList.remove("active");
            element.nextElementSibling.classList.remove("show");
        });
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
$(document).ready(function() {


    $('.fade').slick({

        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 600,
            settings: {

                arrows: false,
            }
        }]


    });

});