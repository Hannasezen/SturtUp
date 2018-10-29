/* Slider in Team block */
let left = document.querySelector('#left');
let right = document.querySelector('#right');
var leftPosition = 0;

left.addEventListener('click', function(){
    let container = document.querySelector('#slider');
    leftPosition -= 286;
    if(leftPosition < -4004) {
        leftPosition = 0;
    }
    container.style.left = leftPosition + 'px';
})

right.addEventListener('click', function(){
    let container = document.querySelector('#slider');
    leftPosition += 286;
    if(leftPosition > 0) {
        leftPosition = 0;
    }
    container.style.left = leftPosition + 'px';
})

/* Filter in Works block */
const works = document.querySelectorAll('.gal_holder');
const button = document.querySelectorAll('.filter li a');

for(let i = 0; i < button.length; i++) {
    let name = button[i].id;
    button[i].addEventListener('click', function() {
        for(let i = 0; i < works.length; i++) {
            if(works[i].id === name) {
                works[i].style.display = "block";
            }
            else {
                works[i].style.display = "none";
            }
        }
    })
}

var all = document.getElementById("all");
all.addEventListener('click', function() {
    for(let i = 0; i < works.length; i++) {
        works[i].style.display = "block";
    }
})