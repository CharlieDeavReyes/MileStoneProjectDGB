// code game controls to move player 
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
  });
  var player = document.getElementById("player");
  function moveLeft(){
      let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
      left -= 100;
      //stop player from moving out of bounds 
      if(left>=0){
          player.style.left = left + "px";
      }
  }
  function moveRight(){
      let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
      left += 100;
      if(left<300){
          player.style.left = left + "px";
      }
  }

// code to make enemy move on repeat in random order 
// code scoreboard to count and store highscore 
// start button 
// reset button 