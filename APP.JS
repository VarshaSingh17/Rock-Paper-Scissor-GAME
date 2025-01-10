let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

let userScore=0;
let compScore=0;

const genCompChoice = () => {
    let options=["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let drawGame = ( )=> {
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

let playGame=(userChoice)=>
{
    const compChoice = genCompChoice();
    if(userChoice === compChoice)
        {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
        userWin= compChoice === "paper" ? false:true;
        }
        else if(userChoice==="paper")
        {
        userWin= compChoice === "scissor" ? false:true;
        }
        else 
        {
        userWin= compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
}
};

