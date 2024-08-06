var msg1 = document.getElementById('message_1');
var msg2 = document.getElementById('message_2');
var msg3 = document.getElementById('message_3');

var guessAnswer = Math.floor(Math.random()*100)+1;
var no_of_guesses =0;
var guessed_numbers =[];

function play(){
    var user_guess = document.getElementById('guessed-val').value;
    if(user_guess <1 || user_guess>100){
        Swal.fire({
            text: 'Please! Enter a Number From 1 to 100',
            icon: 'info',
          })
    }
    else{
        guessed_numbers.push(user_guess);
        no_of_guesses+=1;
        if(user_guess<guessAnswer){
            msg1.textContent="your guess is too low.";
            msg2.textContent="no. of guesses are: " +no_of_guesses;
            msg3.textContent="guessed numbers are: "+guessed_numbers
        }
        else if(user_guess>guessAnswer){
            msg1.textContent="your guess is too high.";
            msg2.textContent="no. of guesses are: " +no_of_guesses;
            msg3.textContent="guessed numbers are: "+guessed_numbers
        }
        else if(user_guess == guessAnswer){
            msg1.textContent="congrates you win !!";
            msg2.textContent="the number was: " +guessAnswer;
            msg3.textContent="you guessed it in: "+ no_of_guesses + " guesses";
            document.getElementById('guess-btn').disabled=true;
        }
    }
}
