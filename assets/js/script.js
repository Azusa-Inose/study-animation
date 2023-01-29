
window.onload = function() {

  setTimeout(() => {
    document.querySelector('.splash-logo').classList.add('fadeout');
  }, 1500);

  document.querySelector('.splash').classList.add('fadeout');
  
  setTimeout(() => {
    const documentBody = document.querySelector('body');
    documentBody.classList.add('appear');
  }, 1500);

}