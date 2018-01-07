$(document).ready(function() {
    var gemOne, gemTwo, gemThree, gemFour;
  	var wins = 0;
  	var losses = 0;
  	var computerNumber;
   	var userNumber;
  
  	function startGame() {
 		// have computer pick a number between 19-120
  		computerNumber = 19 + Math.floor(Math.random() * 102);
 		// pick random gem values between 1-12
  		gemOne   = 1 + Math.floor(Math.random() * 12);
  		gemTwo   = 1 + Math.floor(Math.random() * 12);
  		gemThree = 1 + Math.floor(Math.random() * 12);
  		gemFour  = 1 + Math.floor(Math.random() * 12);
 		 	userNumber = 0;

  	$("#randomNumber").html(computerNumber);
    $("#userScore").html(userNumber);	
  	$("#wins").html(wins);
 		$("#losses").html(losses);
 		
 		gemResult();
 	}
 
 	function score() {
 		// check if user has lost
 		if (userNumber > computerNumber)  {

 			losses++;
      var b =  userNumber - computerNumber;
      alert("Sorry!!! You lose, Your Number is " + userNumber + "--- you loose by "+ b );
 			startGame();
 		}
    // check if user has won
 		if (userNumber == computerNumber) {
 			wins++;
 			alert("You win!!!!" );
 			startGame();
 		}
 	}
 
 	// debugging functionality function
 	function gemResult() {
 		console.log("wins: " + wins + " losses: " + losses);
 		console.log("gemOne: ", gemOne + " gemTwo: " + gemTwo + " gemThree: " + gemThree + " gemFour: " + gemFour);
 		console.log("ComputerNumber : " + computerNumber + " userNumber: " + userNumber);
 		console.log("----------------------------------");
  }
  startGame();

   	// listen for clicks on any of the gems by targeting the gem class
  	$(".gem").on("click", function() {
 		   

    var youClick = $(this).attr("id");
    console.log(youClick);
      
      if (youClick == "gem1") {
        userNumber += gemOne;
      } else if (youClick == "gem2") {
        userNumber += gemTwo;
      } else if (youClick == "gem3") {
        userNumber += gemThree;
      } else if (youClick == "gem4") {
        userNumber += gemFour;
      } else {
        console.log("error");
      }
      $("#userScore").html(userNumber);
      
      setTimeout(function (){
        score();
        gemResult();
      }, 10);
    });
}); 