let doTheThing=function(){
    //Computer picks a number

  /*Loops have 3 parts: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSION; CONTROL INCREMENT/DECREMENT/UPDATE

    CONTROL VARIABLE - controls when the loop executes

    CONTROL BOOLEAN EXPRESSION - boolean expression using the control variable which should at some point evaluate to false

    CONTROL UPDATE - assigning a new value to the control variable inside the loop so that the boolean expression eventually evaluates to a false
   */

    let restart="Yes";
    while(restart==="Yes"||"yes"){

        //Computer picks number
        let comNum=Math.floor((Math.random()*10)+1);
        //alert to get player's guess

        let playersGuess=parseInt(prompt("Guess a number between 1 and 10"),10);
        while(playersGuess !== comNum){
            //Compare guess to number
            //if higher - Alert too higher and then get player's guess - repeat
            //if lower - Alert too low and then get player's guess - repeat
            if(playersGuess > comNum){
                playersGuess=parseInt(prompt("Too high, guess again"),10);
            }else
                playersGuess=parseInt(prompt("Too low, guess again"),10);
        }
        //if equal - Alert You win then ask to restart
        //if yes - repeat from beginning
        //if no - set computer on fire and escape
        alert("You guessed it!");

        restart=prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)")
    }
};

let doTheOtherThing=function(){

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart;


    do{
        let comNum=Math.floor(Math.random()*10)+1);
        let playersGuess;
        do{
            playersGuess=parseInt(prompt("Guess a number between 1 and 10"),10);

            if(playersGuess > comNum){
                playersGuess=parseInt(prompt("Too high, guess again"),10);
            }else
                playersGuess=parseInt(prompt("Too low, guess again"),10);

        }while(playersGuess !== comNum)
        restart=prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

    }while(restart==="Yes");

};