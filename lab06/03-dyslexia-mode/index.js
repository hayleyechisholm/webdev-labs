/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const makeDyslexicFriendly = () => {
  document.querySelector("body").className = 'dyslexia-mode';
  alert("Hello! I am an alert box!!");
};


document.getElementById("dyslexia-toggle").addEventListener('click', makeDyslexicFriendly);