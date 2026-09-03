/* =========================================
   OUR LITTLE STORY
   PANEL CONTROLLER
========================================= */

const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");

const nextButtons = document.querySelectorAll(".nextBtn");

const restartBtn = document.getElementById("restartBtn");

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

    /*
       Har panel ke animation ko
       dobara start karne ke liye.
    */

    const animatedElements =
        screens[index].querySelectorAll(
            ".vanishing-boy, .walking, .heart, .moon"
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

nextButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        /*
           Panel sequence:

           0 = Start
           1 = Story 01
           2 = Story 02
           3 = Story 03
           4 = Story 04
           5 = Story 05
           6 = Ending
        */

        showPanel(index + 2);

    });

});


/* =========================================
   RESTART STORY
========================================= */

if (restartBtn) {

    restartBtn.addEventListener("click", () => {

        showPanel(0);

    });

}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", (event) => {

    /*
       Right arrow / Space = next
    */

    if (
        event.key === "ArrowRight" ||
        event.key === " "
    ) {

        if (currentPanel < screens.length - 1) {

            showPanel(currentPanel + 1);

        }

    }


    /*
       Left arrow = previous
    */

    if (event.key === "ArrowLeft") {

        if (currentPanel > 0) {

            showPanel(currentPanel - 1);

        }

    }

});


/* =========================================
   INITIAL PANEL
========================================= */

showPanel(0);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "❤️ Our Little Story is ready."
);
