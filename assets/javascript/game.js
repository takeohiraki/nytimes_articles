
  $(document).ready(function() {

      // Make our variables global to the runtime of our application
      var goal = 0;
      var wins = 0;
      var losses = 0;
      var totalScore = 0;
      var gem1;
      var gem2;
      var gem3;
      var gem4;
      var gemType = "";

      newGame();

      function newGame() {
          goal = Math.floor(Math.random() * 120) + 19;
          gem1 = Math.floor(Math.random() * 12) + 1;
          gem2 = Math.floor(Math.random() * 12) + 1;
          gem3 = Math.floor(Math.random() * 12) + 1;
          gem4 = Math.floor(Math.random() * 12) + 1;
          totalScore = 0

          $("#goal").text(goal);
          $("#score").text(totalScore);
          console.log(gem1);
          console.log(gem2);
          console.log(gem3);
          console.log(gem4);
      }


      $(".gems").on("click", function() {
          console.log("old total score: " + totalScore);
          gemType = $(this).val();
          console.log(gemType);
          if (gemType == "gem1") {
              totalScore += gem1;
          }
          else if (gemType == "gem2") {
              totalScore += gem2;
          }
          else if (gemType == "gem3") {
              totalScore += gem3;
          }
          else if (gemType == "gem4") {
              totalScore += gem4;
          }
          console.log("new total score: " + totalScore);
          $("#score").text(totalScore);

          if (totalScore == goal) {
              wins += 1;
              $("#num-wins").text(wins);
              $("#end-game-message").text("You won your last game!");
              console.log("wins: " + wins);
              newGame();
          }
          else if (totalScore > goal) {
              losses += 1;
              $("#num-losses").text(losses);
              $("#end-game-message").text("You lost your last game!");
              console.log("losses: " + losses)
              newGame();
          }


      });
  });
