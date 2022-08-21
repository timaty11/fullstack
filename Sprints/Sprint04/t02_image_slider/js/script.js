let slide_index = 1;
let slides = document.getElementsByClassName("slide");
let timer = 0;

show_slides(slide_index);

function plusSlides(n) {
    show_slides(slide_index += n);
}

function show_slides(n) {
    if (n < 1) {
        slide_index = slides.length;
    } else if (n > slides.length) {
        slide_index = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
        
    slides[slide_index - 1].style.display = "block";

    clearInterval(timer);
    timer = setInterval(show_slides, 3000, slide_index += 1);
}
