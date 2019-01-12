//We have to create the random "number to guess" by grabbing the id from html and implementing it here.//
$( document ).ready(function(){
    var randomNumber = Math.floor(Math.random()*103+17)  //Creates the random number (hopefully) in between 17-120 to be shown upon start of the game.//
        $("#randomNum").text(randomNumber); //This is how the random number will show up on the HTML //

    var jewel1 = Math.floor(Math.random()*15+1)
    var jewel2 = Math.floor(Math.random()*15+1)
    var jewel3 = Math.floor(Math.random()*15+1)
    var jewel4 = Math.floor(Math.random()*15+1) //Giving random numbers to each "crystal" that should be in between 1-16//

    var wins = 0;
    var losses = 0;
    var total = 0; //Keeping track of the users Wins, Losses, and the Total Score. //

    $("#winNum").text(wins);
    $("#lossNum").text(losses); //applies the number of wins and losses to the HTML//

    //Now I want to give the crystals functionality//
    //Start with an on click function for each individual crystal and set values accordingly //
    //clicks will also console.log the outcome of each crystal.

    //Now we will set up a reset function that will "reset" the users score when a "win" or "loss" is found.//
      //We will also console.log the random number for checking purposes//
      function reset() {
        randomNumber = Math.floor(Math.random()*103+17);
        console.log(randomNumber);
        $("#randomNum").text(randomNumber);
        var jewel1 = Math.floor(Math.random()*15+1)
        var jewel2 = Math.floor(Math.random()*15+1)
        var jewel3 = Math.floor(Math.random()*15+1)
        var jewel4 = Math.floor(Math.random()*15+1)
        total = 0;
        $('#userTotal').text(total);

      }

    $('#crystal1').on ('click', function(){
        total = total + jewel1;
        console.log("New userTotal= " + total);
        $('#userTotal').text(total); 
              
            if (total == randomNumber){
              goodJob();
            }
            else if ( total > randomNumber){
              youSuck();
            }   
      })

      $('#diamond').on ('click', function(){
        total = total + jewel2;
        console.log("New userTotal= " + total);
        $('#userTotal').text(total); 
              
            if (total == randomNumber){
              goodJob();
            }
            else if ( total > randomNumber){
              youSuck();
            }   
      })

      $('#gemstone').on ('click', function(){
        total = total + jewel3;
        console.log("New userTotal= " + total);
        $('#userTotal').text(total); 
              
            if (total == randomNumber){
              goodJob();
            }
            else if ( total > randomNumber){
              youSuck();
            }   
      })

      $('#diamond1').on ('click', function(){
        total = total + jewel4;
        console.log("New userTotal= " + total);
        $('#userTotal').text(total); 
              
            if (total == randomNumber){
              goodJob();
            }
            else if ( total > randomNumber){
              youSuck();
            }   
      })

      


      //Now we want to set up functions that will increment both "wins" and "losses"//

      function goodJob() {
          alert("WINNER!!!");
          wins = wins + 1;
          $("#winNum").text(wins);
          reset();

      }

      function youSuck() {
          alert("YOU LOSE!");
          losses = losses + 1;
          $("lossNum").text(losses);
          reset();
      }

    })



