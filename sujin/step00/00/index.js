// (() => {

// });

function parallaxOverlay(){
    let scroll = true;
    let parallaxText01 = document.querySelectorAll('.section-02-parallax-text');
    let parallaxText02 = document.querySelectorAll('.section-03-parallax-text');

    const scrollProgress = () => {
        scroll = true;
    };

    const raf = () => {
        if(scroll){
            parallaxText01.forEach((elm, index) => {
                elm.style.transform = 'translateX(' + window.scrollY / 20 + '%)';
            });

            parallaxText02.forEach((elm, index) => {
                elm.style.transform = 'translateX(' + window.scrollY / 50 + '%)';
            });

            scroll = false;
        }
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    window.addEventListener('scroll', scrollProgress);

}

function comparisonSlide(){
    let slide = document.querySelector('#slide');
    window.onmousemove = function(elm){
        let clientX = elm.clientX;
        slide.style.left = clientX + 'px';
    }
}



parallaxOverlay();
comparisonSlide();
