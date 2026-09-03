const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");

const nextButtons = document.querySelectorAll(".nextBtn");

let currentPanel = 0;


/* =========================================
   SHOW PANEL
========================================= */

function showPanel(index) {

    if (index < 0 || index >= screens.length) {
        return;
    }


    screens.forEach((screen) => {

        screen.classList.remove("active");

    });


    screens[index].classList.add("active");

    currentPanel = index;


    restartAnimations(screens[index]);

}


/* =========================================
   RESTART ANIMATIONS
========================================= */

function restartAnimations(screen) {

    const animatedElements = screen.querySelectorAll(
        ".heart, .walking, .vanishing-boy, .moon, .phone, .dialogue, .silence-phone, .message, .typing, .letter-content, .letter-line, .years-line, .goodbye"
    );


    animatedElements.forEach((element) => {

        element.style.animation = "none";

        void element.offsetWidth;

        element.style.animation = "";

    });

}


/* =========================================
   START STORY
========================================= */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        showPanel(1);

    });

}


/* =========================================
   NEXT BUTTONS
========================================= */

nextButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const nextPanel = currentPanel + 1;

        if (nextPanel < screens.length) {

            showPanel(nextPanel);

        }

    });

});


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", (event) => {


    /* RIGHT ARROW / SPACE */

    if (
        event.key === "ArrowRight" ||
        event.key === " "
    ) {

        event.preventDefault();


        if (currentPanel < screens.length - 1) {

            showPanel(currentPanel + 1);

        }

    }


    /* LEFT ARROW */

    if (event.key === "ArrowLeft") {

        event.preventDefault();


        if (currentPanel > 0) {

            showPanel(currentPanel - 1);

        }

    }

});


/* =========================================
   START AT SCREEN 0
========================================= */

showPanel(0);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "❤️ S & M — Our Story — 7 Panels Ready."
);
