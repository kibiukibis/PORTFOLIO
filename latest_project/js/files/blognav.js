const DOMstring = {
    recentPosts: document.querySelector('.recent-posts'),
    recentPost: document.querySelectorAll('.recent-posts .post'),
    mainBlog: document.querySelector('.blog-left'),
    post: document.querySelectorAll('.blog-left .post'),
    wrap: document.querySelectorAll('.choose-us .wrapper'),
    show: document.querySelectorAll('.choose-us .wrapper h5'),
    h4: document.querySelectorAll('section.about-ability .choose-us h4'),
    icon: document.querySelectorAll('.choose-us .wrapper i'),
    readMore: document.querySelectorAll('.blog-left .post .read-more'),
    showMore: document.querySelectorAll('.blog-left .post .show-more'),
    span: document.querySelectorAll('.blog-left .post .post-text span'),
    navigation: document.querySelector('.blog-left .navigation'),
    navigationNr: document.querySelectorAll('.blog-left .navigation .blog-page'),
}
var navNr = Math.ceil(DOMstring.post.length / 3);
console.log(navNr)

for (let x = 0; x < 3; x++) {
    DOMstring.post[x].style.display = "inline-block";

}
for (let x = navNr - 1; x >= 0; x--) {
    var html = `<div class="blog-page" data-nr="${x}">${x+1}</div>`;
    DOMstring.navigation.insertAdjacentHTML('afterbegin', html);
}