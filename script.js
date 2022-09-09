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
      if(left<500){
          player.style.left = left + "px";
      }
  }
// spawn police at random
  var police = document.getElementById("police");

  police.addEventListener('animationiteration', () => {
      var random = Math.floor(Math.random() * 5);
      left = random * 100;
      police.style.left = left + "px"; 
  });

// score&detection
  var score = document.getElementById("score");
   var score_counter = 0;

    

  setInterval(function(){
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    var policeLeft = parseInt(window.getComputedStyle(police).getPropertyValue("left"));
    var policeTop = parseInt(window.getComputedStyle(police).getPropertyValue("top"));
    score_counter = score_counter + 0.01;
    
     score.textContent = Math.round(score_counter);

    // poilicecollision
    if(playerLeft==policeLeft && policeTop<500 && policeTop>300){
         alert("Busted. Score: " + Math.round(score_counter));
         score_counter = 0;
        police.style.animation = "none";
        restart.style.display="inline-block";
    } 
},1);








// code to make enemy move on repeat in random order 
// code scoreboard to count and store highscore 
// start button 
// reset button 





