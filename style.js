$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1280: {
                items: 3
            }
        }
    });

    // Custom Navigation
    $('.custom-nav .owl-prev').click(function () {
        $(".owl-carousel").trigger('prev.owl.carousel');
    });
    $('.custom-nav .owl-next').click(function () {
        $(".owl-carousel").trigger('next.owl.carousel');
    });
});


/*#testimonial Section */
$(document).ready(function () {
    $("#testimonial-carousel").owlCarousel({ // testimonial-carousel id'siyle çağırıyoruz
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1280: {
                items: 3
            }
        }
    });

     // Custom Navigation
 
     $('.custom-nav .owl-prev, .custom-nav .owl-next').on('click', function() {
         $(this).toggleClass('active'); // Tıklandığında aktif durum ekleyelim
     });
 
     $('.custom-nav .owl-prev, .custom-nav .owl-next').on('mouseleave', function() {
         $(this).removeClass('active'); // Fare ayrıldığında aktif durumu kaldıralım
     });
 
     // Owl Carousel Previous Button
     $('.custom-nav .owl-prev').click(function () {
         $("#testimonial-carousel").trigger('prev.owl.carousel'); // testimonial-carousel id'siyle çağırıyoruz
     });
 
     // Owl Carousel Next Button
     $('.custom-nav .owl-next').click(function () {
         $("#testimonial-carousel").trigger('next.owl.carousel'); // testimonial-carousel id'siyle çağırıyoruz
     });
 });

//Courses button color change
document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('.btn-price');
    btns.forEach(function (btn) {
        if (btn.textContent.trim().toLowerCase() === 'free') {
            btn.style.backgroundColor = '#3f51b5';
        }
    });
});
