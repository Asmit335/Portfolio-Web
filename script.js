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

// darkmode js
let inputE1 = document.querySelector(".input")
    // let labelE1 = document.querySelector(".label")
    // let circleE1 = document.querySelector(".circle")

let bodyE1 = document.querySelector("body")

inputE1.checked = false;
updateBody();

function updateBody() {
    if (inputE1.checked) {
        bodyE1.style.background = "#111";
        bodyE1.style.color = "#fff";
    } else {
        bodyE1.style.background = "#fff";
    }
}

inputE1.addEventListener("input", () => {
    updateBody();
})

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

// about section click js

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-links")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}