/* =================================
   TYPING EFFECT
================================= */

const typingElement =
    document.getElementById(
        "typing-text"
    );


if (typingElement) {

    const text =
        "You are one of the most beautiful parts of my life ❤️";

    let index = 0;


    function typeText() {

        if (index < text.length) {

            typingElement.textContent +=
                text.charAt(index);

            index++;

            setTimeout(
                typeText,
                70
            );

        }

    }


    typeText();

}


/* =================================
   COUNTDOWN
================================= */


/*
   IMPORTANT:

   Aa date ne tamari wife's birthday
   pramane change karjo.

   Example:
   September 20, 2026
*/


const birthdayDate =
    new Date(
        "September 12, 2026 00:00:00"
    ).getTime();


const countdown =
    setInterval(function () {


        const now =
            new Date().getTime();


        const distance =
            birthdayDate - now;


        if (distance < 0) {

            clearInterval(countdown);

            return;

        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60))
                /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60))
                /
                1000
            );


        const d =
            document.getElementById(
                "days"
            );


        const h =
            document.getElementById(
                "hours"
            );


        const m =
            document.getElementById(
                "minutes"
            );


        const s =
            document.getElementById(
                "seconds"
            );


        if (d) {
            d.innerText =
                String(days).padStart(2, "0");
        }


        if (h) {
            h.innerText =
                String(hours).padStart(2, "0");
        }


        if (m) {
            m.innerText =
                String(minutes).padStart(2, "0");
        }


        if (s) {
            s.innerText =
                String(seconds).padStart(2, "0");
        }


    }, 1000);


/* =================================
   OPEN ENVELOPE
================================= */


function openEnvelope() {

    const envelope =
        document.getElementById(
            "envelope"
        );


    if (envelope) {

        envelope.classList.toggle(
            "open"
        );

    }

}


/* =================================
   BIRTHDAY CELEBRATION
================================= */


function celebrate() {


    const message =
        document.getElementById(
            "birthday-message"
        );


    if (message) {

        message.innerHTML =
            "✨ Your wish is on its way... ❤️";

    }


    /* Create confetti */

    for (
        let i = 0;
        i < 100;
        i++
    ) {


        const particle =
            document.createElement(
                "div"
            );


        const symbols = [
            "❤️",
            "💕",
            "✨",
            "💗",
            "🌸",
            "🎉",
            "⭐"
        ];


        particle.innerText =
            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            Math.random() *
            100 +
            "vw";


        particle.style.top =
            "-40px";


        particle.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";


        particle.style.zIndex =
            "9999";


        particle.style.pointerEvents =
            "none";


        document.body.appendChild(
            particle
        );


        const duration =
            2000 +
            Math.random() * 3000;


        particle.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(110vh)
                         rotate(${Math.random() * 720}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "ease-out"

            }

        );


        setTimeout(
            () => particle.remove(),
            duration
        );


    }

}