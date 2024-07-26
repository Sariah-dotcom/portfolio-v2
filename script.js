// Navigation menu
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('menu').style.right = '0px';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('menu').style.right = '-250px';
});

/* Animations */
const splitWord = document.querySelector('.hero-caption span');
const letters = splitWord.textContent.split("");
splitWord.textContent = "";

letters.forEach((letter) =>{
    splitWord.innerHTML += '<span class ="letter">'+ letter + "</span>";
    gsap.set('.letter', {display: 'inline-block'});
});

const tl = gsap.timeline({
    defaults: {duration: 0.75, ease: "Power3.easeOut"},
});

tl.fromTo(
    ".decor-1",
    {
        opacity : 0,
        x: -100,
    },

    {
        opacity : 0.3,
        x: 40,
        duration: 1.5,
    }

);

tl.fromTo(
    ".hero-caption h1",
    {
        opacity : 0,
        x : -20,
    },

    {   
        opacity : 1,
        x : 1,
        delay: 0.55,
        duration: 1,
        ease: "elastic.out(4.5,1)",
    },
    "<20%"
);

tl.fromTo(
    ".letter",
    {
        opacity:0,
        y:"100%",
    },
    {
        opacity:1,
        y:0,
        delay:0.5,
        duration:1,
        stagger: 0.05,
        ease: 'back.out(3)'
    },
    "<20%"
);

tl.fromTo(
    ".hero-caption p",
    {
        opacity : 0
    },

    {   
        opacity : 1,
        duration: 1,
    }
);

tl.fromTo
(
    ".nav-logo, .icons, .hamburger",
    {
        opacity : 0
    },

    {
        opacity : 1,
        duration: 2,
    }

);

tl.fromTo
(
    ".icons svg",
    {
        scale: 0
    },

    {
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(4.5,1)",
        repeat: 1, 
        repeatDelay: 0.1, 
    },
    "<20%"
);