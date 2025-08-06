'use-strict';

/**
 *  Jquery
 */
$(document).ready(function(){
    // Carousel
    $(".carousel-hero").owlCarousel(
        {
            animateOut: 'animate__zoomOutLeft',
            animateIn: 'animate__bounceInRight',
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 300,
            items:1
        }
    );

    $(".carousel-client").owlCarousel(
        {
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 300,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 2
                },
                992: {
                items: 3
                }
            }
        }
    );

});


/**
 *  CounterUP
 */
const counterUp = window.counterUp.default;

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 20,
			} );
			el.classList.add( 'is-visible' )
		}
	} );
}

const IO = new IntersectionObserver( callback, { threshold: 1 } );

const el = document.querySelectorAll( '.counter' );
el.forEach((item)=>{
    IO.observe(item);
})




/**
 *  Section Animation
 */
new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
).init();

/**
 *  Sticky Nav
 */
let navSectionEl = document.querySelector('.nav-section');


window.addEventListener('scroll',function(){
    if(this.scrollY > 80){
        navSectionEl.classList.add("sticky-nav","animate__animated", "animate__slideInDown");
    }else{
        navSectionEl.classList.remove("sticky-nav","animate__slideInDown");
    }
});