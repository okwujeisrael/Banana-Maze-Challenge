//jshint esversion:6
$(document).ready(function() {

  let rowCounter = 1;
  let columnCounter = 1;


  $(document).on('keyup', function(e) {

    if (e.key == 'ArrowLeft') {

      if ((columnCounter == 1) && (rowCounter == 1)) {
          $('#box1').removeClass('banana-bg');
          $('#box2').addClass('banana-bg');
          columnCounter++;
          rightMove();
      } else if ((columnCounter == 1) && (rowCounter == 2)) {
          $('#box6').removeClass('banana-bg');
          $('#box7').addClass('banana-bg');
          columnCounter++;
          rightMove();

      } else if ((columnCounter == 2) && (rowCounter == 1)) {
          $('#box2').removeClass('banana-bg');
          $('#box3').addClass('banana-bg');
          columnCounter++;
          rightMove();

      } else if ((columnCounter == 2) && (rowCounter == 2)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box7').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 3) && (rowCounter == 1)) {
          wrongMove();

      } else if ((columnCounter == 2) && (rowCounter == 3)) {
          $('#box12').removeClass('banana-bg');
          $('#box13').addClass('banana-bg');
          columnCounter++;
          rightMove();

      } else if ((columnCounter == 3) && (rowCounter == 3)) {
          $('#box13').removeClass('banana-bg');
          $('#box14').addClass('banana-bg');
          columnCounter++;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 3)) {
          $('#box14').removeClass('banana-bg');
          $('#box15').addClass('banana-bg');
          columnCounter++;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 4)) {
          wrongMove();

      } else if ((columnCounter == 4) && (rowCounter == 5)) {
          $('.winning-display').removeClass('remove-visibility');
          singingMonkey();
          columnCounter = 1;
          rowCounter = 1;
          $('#box24').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');

      } else if ((columnCounter == 5) && (rowCounter == 2)) {
          wrongMove();
      }

    } else if (e.key == 'ArrowRight') {

      if ((columnCounter == 2) && (rowCounter == 1)) {
          $('#box2').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          columnCounter--;
          rightMove();

      } else if ((columnCounter == 3) && (rowCounter == 1)) {
          $('#box3').removeClass('banana-bg');
          $('#box2').addClass('banana-bg');
          columnCounter--;
          rightMove();

      } else if ((columnCounter == 3) && (rowCounter == 1)) {
          wrongMove();

      } else if ((columnCounter == 1) && (rowCounter == 2)) {
          wrongMove();

      } else if ((columnCounter == 2) && (rowCounter == 2)) {
          $('#box7').removeClass('banana-bg');
          $('#box6').addClass('banana-bg');
          columnCounter--;
          rightMove();

      } else if ((columnCounter == 2) && (rowCounter == 3)) {
          wrongMove();

      } else if ((columnCounter == 3) && (rowCounter == 3)) {
          $('#box13').removeClass('banana-bg');
          $('#box12').addClass('banana-bg');
          columnCounter--;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 3)) {
          $('#box14').removeClass('banana-bg');
          $('#box13').addClass('banana-bg');
          columnCounter--;
          rightMove();

      } else if ((columnCounter == 5) && (rowCounter == 3)) {
          $('#box15').removeClass('banana-bg');
          $('#box14').addClass('banana-bg');
          columnCounter--;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 4)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box19').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 4) && (rowCounter == 5)) {
          wrongMove();
      }


    } else if (e.key == 'ArrowUp') {

      if ((columnCounter == 1) && (rowCounter == 1)) {
          $('#box1').removeClass('banana-bg');
          $('#box6').addClass('banana-bg');
          rowCounter++;
          rightMove();

      } else if ((columnCounter == 1) && (rowCounter == 2)) {
          wrongMove();

      } else if ((columnCounter == 2) && (rowCounter == 1)) {
          $('#box2').removeClass('banana-bg');
          $('#box7').addClass('banana-bg');
          rowCounter++;
          rightMove();

      } else if ((columnCounter == 3) && (rowCounter == 1)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box3').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 2) && (rowCounter == 2)) {
          $('#box7').removeClass('banana-bg');
          $('#box12').addClass('banana-bg');
          rowCounter++;
          rightMove();

      } else if ((columnCounter == 2) && (rowCounter == 3)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box12').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 3) && (rowCounter == 3)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box13').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 4) && (rowCounter == 3)) {
          $('#box14').removeClass('banana-bg');
          $('#box19').addClass('banana-bg');
          rowCounter++;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 4)) {
          $('#box19').removeClass('banana-bg');
          $('#box24').addClass('banana-bg');
          rowCounter++;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 5)) {
          wrongMove();

      } else if ((columnCounter == 5) && (rowCounter == 3)) {
          wrongMove();
      }

    } else if (e.key == 'ArrowDown') {

      if ((columnCounter == 1) && (rowCounter == 1)) {
          wrongMove();

      } else if ((columnCounter == 1) && (rowCounter == 2)) {
          $('#box6').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          rowCounter--;
          rightMove();

      } else if ((columnCounter == 2) && (rowCounter == 2)) {
          $('#box7').removeClass('banana-bg');
          $('#box2').addClass('banana-bg');
          rowCounter--;
          rightMove();

      } else if ((columnCounter == 2) && (rowCounter == 3)) {
          $('#box12').removeClass('banana-bg');
          $('#box7').addClass('banana-bg');
          rowCounter--;
          rightMove();

      } else if ((columnCounter == 3) && (rowCounter == 1)) {
          wrongMove();

      } else if ((columnCounter == 3) && (rowCounter == 3)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box13').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 4) && (rowCounter == 3)) {
          $('.gameover-alert').removeClass('remove-visibility');
          columnCounter = 1;
          rowCounter = 1;
          $('#box14').removeClass('banana-bg');
          $('#box1').addClass('banana-bg');
          gameOver();

      } else if ((columnCounter == 5) && (rowCounter == 3)) {
          wrongMove();

      } else if ((columnCounter == 4) && (rowCounter == 4)) {
          $('#box19').removeClass('banana-bg');
          $('#box14').addClass('banana-bg');
          rowCounter--;
          rightMove();

      } else if ((columnCounter == 4) && (rowCounter == 5)) {
          $('#box24').removeClass('banana-bg');
          $('#box19').addClass('banana-bg');
          rowCounter--;
          rightMove();
      }

    }

  });



  function singingMonkey() {
    let sing = new Audio("Sounds/spidermonkey.mp3");
    sing.play();
  }


  function rightMove() {
    let sing = new Audio("Sounds/right.mp3");
    sing.play();
  }

  function wrongMove() {
    let sing = new Audio("Sounds/wrong.mp3");
    sing.play();
  }

  function gameOver() {
    let sing = new Audio("Sounds/gameover.mp3");
    sing.play();
  }



  $('#winner').on('click', () => {
    $('.winning-display').addClass('remove-visibility');
  });

  $('#gameover').on('click', () => {
    $('.gameover-alert').addClass('remove-visibility');
  });


});
