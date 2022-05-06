/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeOcean = () => {
   document.querySelector("body").className = 'ocean';
   alert("Hello! I am an alert box!!");
};

const makeDefault = () =>{
   document.querySelector("body").className = null;
};

const makeDesert = () =>{
   document.querySelector("body").className = 'desert';
};

const makeHigh_Contrast = () =>{
   document.querySelector("body").className = 'high-contrast';
};


document.getElementById("default").addEventListener('click', makeDefault);
document.getElementById("ocean").addEventListener('click', makeOcean);
document.getElementById("desert").addEventListener('click', makeDesert);
document.getElementById("high-contrast").addEventListener('click', makeHigh_Contrast);