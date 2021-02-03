// When the user scrolls down 80px from the top of the document, slide down the navbar
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("navbar").style.top = "-85px";
    }
}

// Bootstrap Scroll Spy
$('body').scrollspy({
    target: '#navbar'
})
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})


// OWL Carousel for testimonial
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        nav: false,
        responsiveClass: true,
        // center: true,
        // stagePadding: 150,
        responsive: {
            0: {
                items: 1,
            },
            900: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    })
});