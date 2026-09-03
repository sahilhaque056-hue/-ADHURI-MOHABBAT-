/* =================================
   OUR LITTLE STORY
   Interactive Story Script
================================= */


/* =================================
   1. REVEAL PANELS ON SCROLL
================================= */

const panels = document.querySelectorAll(".panel");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.25
    }
);

panels.forEach((panel) => {
    revealObserver.observe(panel);
});


/* =================================
   2. FADE BOY WHEN SCROLLING
================================= */

const disappearingSection =
    document.querySelector(".disappearing");

const fadingBoy =
    document.querySelector(".fading-boy");

const fadeText =
    document.querySelector(".fade-text");


function updateDisappearingBoy() {

    if (!disappearingSection || !fadingBoy) {
        return;
    }

    const rect =
        disappearingSection.getBoundingClientRect();

    const windowHeight =
        window.innerHeight;

    /*
       Section viewport mein enter
       karne ke baad progress calculate
       karte hain.
    */

    let progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

    progress =
        Math.max(0, Math.min(1, progress));


    /*
       Boy opacity:
       Starting = visible
       Ending = almost invisible
    */

    let opacity =
        1 - progress * 1.35;

    opacity =
        Math.max(0, Math.min(1, opacity));


    let scale =
        1 - progress * 0.12;

    fadingBoy.style.opacity = opacity;
    fadingBoy.style.transform =
        `scale(${scale})`;


    /*
       Text bhi dheere fade hoga.
    */

    if (fadeText) {

        let textOpacity =
            0.8 - progress * 0.7;

        textOpacity =
            Math.max(0.1, textOpacity);

        fadeText.style.opacity =
            textOpacity;
    }
}


window.addEventListener(
    "scroll",
    updateDisappearingBoy,
    { passive: true }
);

updateDisappearingBoy();


/* =================================
   3. HEARTBEAT EFFECT
================================= */

const hearts =
    document.querySelectorAll(".heart");

hearts.forEach((heart) => {

    heart.addEventListener("mouseenter", () => {

        heart.style.transform =
            "scale(1.25)";

    });

    heart.addEventListener("mouseleave", () => {

        heart.style.transform =
            "scale(1)";

    });

});


/* =================================
   4. TYPEWRITER EFFECT
================================= */

function typeWriter(element, speed = 45) {

    if (!element) {
        return;
    }

    const originalText =
        element.textContent.trim();

    element.textContent = "";

    let index = 0;

    function write() {

        if (index < originalText.length) {

            element.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(write, speed);

        }
    }

    write();
}


/*
   Final message typewriter.
*/

const finalMessage =
    document.querySelector(".final-message");

let finalTyped = false;

const finalObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting &&
                    !finalTyped
                ) {

                    finalTyped = true;

                    typeWriter(
                        finalMessage,
                        35
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


if (finalMessage) {
    finalObserver.observe(finalMessage);
}


/* =================================
   5. PARALLAX EFFECT
================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrollPosition =
            window.scrollY;

        document
            .querySelectorAll(".moon")
            .forEach((moon) => {

                const movement =
                    scrollPosition * 0.015;

                moon.style.transform =
                    `translateY(${movement}px)`;

            });

    },
    {
        passive: true
    }
);


/* =================================
   6. CONSOLE MESSAGE
================================= */

console.log(
    "❤️ Our Little Story has started..."
);
