// navbar js bar
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("asmit")
        } else {
            $('.navbar').removeClass("asmit")
        }
    });

    // toggle menubar-navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


});


// auto-text Animation JS
const containerE1 = document.querySelector(".home-content span");
const careers = ["a Youtuber.", "a Web Developer.", "a FreeLancer.", "an Instructor."];
let careersIndex = 2;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerE1.innerHTML = `<span>${careers[careersIndex].slice(0,characterIndex)}</span>`
    if (characterIndex === careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
    }
    if (careersIndex === careers.length) {
        careersIndex = 0;
    }
    setTimeout(updateText, 300);

}