// export function fadeOutAfterDelay() {
//     setTimeout(function() {
//       var doubleArrow = document.querySelector('.double-arrow');
//       doubleArrow.classList.add('fade-out');
//     }, 5000); // Fade out after 5 seconds


    
//   }


  export function fadeOutAfterDelay() {
    setTimeout(function() {
      var doubleArrow = document.querySelector('.double-arrow');
      doubleArrow.classList.add('fade-out');
    }, 15000); 
  
    setTimeout(function() {
      var arrowContainer = document.querySelector('.arrow-container');
      arrowContainer.style.opacity = '1';
    }, 10000); // 
  }
  




