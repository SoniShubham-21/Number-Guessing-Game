confirm("Ready to Play number Guessing Game")
const num=prompt("Enter the max range for random number generator");

const random=Math.floor(Math.random()*num)+1;

let guess=prompt("Enter a guessing number");

while(true){
    if(guess=="quit"){
        console.log("you entered quit");
        break;
    }
    if(guess == random){
        console.log("Your are right! Congrats!! random number was",random);
        break;
    }
    else if(guess < random){
        guess=prompt("Hint :Your guess was too small. please try again");
    }
    else{
        guess=prompt("hint :Your guess was too large. please try again");

    }
}


