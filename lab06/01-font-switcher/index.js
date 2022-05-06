const makeBigger = () => {
   document.querySelector("p").style.fontSize = "110%";
   document.querySelector("h1").style.fontSize = "110%";

};

const makeSmaller = () => {
   document.querySelector("p").style.fontSize = "90%";
   document.querySelector("h1").style.fontSize = "90%";
};



document.getElementById("a1").addEventListener('click', makeBigger);
document.getElementById("a2").addEventListener('click', makeSmaller);

