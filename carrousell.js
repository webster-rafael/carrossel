let count = 1;
let numberImageSlide = 5;

//set time in mileseconds
let timeAutoTransition = 5000;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
    
}, timeAutoTransition)

function nextImage(){
    count ++;
    if(count>numberImageSlide){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}