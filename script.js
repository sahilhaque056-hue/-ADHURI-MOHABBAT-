const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const nextButtons = document.querySelectorAll(".nextBtn");
const restartBtn = document.getElementById("restartBtn");

let currentPanel = 0;


/* =========================
   SHOW PANEL
========================= */

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


/* =========================
   RESTART PANEL ANIMATIONS
========================= */

function restartAnimations(screen) {

    const animatedElements = screen.querySelectorAll(
        ".heart, .walking, .vanishing-boy, .moon, .phone, .dialogue, .silence-phone, .message, .typing"
    );

    animatedElements.forEach((element) => {

        element.style.animation = "none";

        void element.offsetWidth;

        element.style.animation = "";

    });
}


/* =========================
   START STORY
========================= */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        showPanel(1);

    });

}


/* =========================
   NEXT BUTTONS
========================= */

nextButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        /*
            Start screen = 0
            Panel 1     = 1
            Panel 2     = 2
            Panel 3     = 3
            Panel 4     = 4
            Panel 5     = 5
            Panel 6     = 6
        */

        showPanel(index + 2);

    });

});


/* =========================
   RESTART STORY
========================= */

if (restartBtn) {

    restartBtn.addEventListener("click", () => {

        showPanel(0);

    });

}


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener("keydown", (event) => {

    /*
        Right Arrow / Space
        = Next
    */

    if (
        event.key === "ArrowRight" ||
        event.key === " "
    ) {

        event.preventDefault();

        if (currentPanel < screens.length - 1) {

            showPanel(currentPanel + 1);

        }

    }


    /*
        Left Arrow
        = Previous
    */

    if (event.key === "ArrowLeft") {

        event.preventDefault();

        if (currentPanel > 0) {

            showPanel(currentPanel - 1);

        }

    }

});


/* =========================
   START AT FIRST SCREEN
========================= */

showPanel(0);


/* =========================
   CONSOLE MESSAGE
========================= */

console.log("❤️ S & M — Our Story is ready.");
