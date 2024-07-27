// Cursor Trial
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".cursor-circle");

const colors = [
    "#836FFF", // Starting blue color
    "#7D74FD",
    "#7878FB",
    "#727DF9",
    "#6C82F7",
    "#6687F5",
    "#609BF3",
    "#5AAFF1",
    "#54C3EF",
    "#4ED7ED",
    "#48EBEB",
    "#3BE2A5", // Intermediate mint green color
    "#35E4A9",
    "#2FE6AE",
    "#29E8B3",
    "#24EAB8",
    "#1EECBD",
    "#18EEC2",
    "#13F0C7",
    "#15F5BA"  // Ending color
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
























// Navigation menu
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('menu').style.right = '0px';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('menu').style.right = '-250px';
});

/* Animations */
const splitWord = document.querySelector('.split-word');
const letters = splitWord.textContent.split("");
splitWord.textContent = "";

letters.forEach((letter) =>{
    splitWord.innerHTML += '<span class ="letter">'+ letter + "</span>";
    gsap.set('.letter', {display: 'inline-block'});
});

const tl = gsap.timeline({
    defaults: {duration: 0.75, ease: "Power3.easeOut"},
});

tl.fromTo (
    
    ".hero-decor",
    {
        opacity : 0,
        x: 1,
    },

    {
        opacity : 0.2,
        x: 190,
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
    ".nav-logo, .icons, .hamburger,.menu",
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

tl.fromTo 
(
   ".hero-decor",
    {
        rotate: -10
    }, 

    {
        rotate: 10,
        duration: 5,  // Duration in seconds
        yoyo: true,
        repeat: -1,   // Repeat indefinitely
        ease: "linear"  // Linear easing for continuous rotation
    },
    "<5%"

);