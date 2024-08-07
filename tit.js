const containerEl =document.querySelector("container");
let playertxt=document.querySelector("message");
let rstart=document.getElementById(rstart);
let boxes=document.querySelectorAll("box");

const letter1="O";
const letter2="X";
let sum=0;

let currentPlayer=letter1;
let spaces=Array(9).fill(null);
let winnerIdicator=getComputedStyle(document.body).getPropertyValue(

)

function playerHasWon(){
    for (const condition of winningCombination){
        let [a,b,c]=condition;
        if (spaces[a]&&spaces[a]==spaces[b]&&spaces[a]==spaces[c]){
            return [a,b,c];
        }
    }
 return false;   
}

function boxClicked (e){
    ++sum
    if (sum==9){
        containerEl.classList.add("success");
        playertxt.innerHTML=`<h2 class="message">congratulation player x </h2>`;
    }

    const id= e.target.id;

    if(spaces [id]){
        alert ("this is box is filled");

    }

    spaces[id]=currentPlayer
    e.target.innertext=currentPlayer

    if (playerHasWon()!==false){
        playertxt.innerHTML=`<h2 class="message">congratulation player x </h2>`
        winnerIdicator=playerHasWon()
        winnerIdicator.map((box)=> boxes[box].style.backgroundColor='pink')
        containerEl.classList.add("success")
    }
   if (currentPlayer==letter2){
    currentPlayer=letter1
   }else if (currentPlayer==letter1){
     currentPlayer=letter2
   }
}
function restartGame (){
    spaces.fill(null)
    b0xes.forEach((box) => {
        box.innerHTML=""
        box.style.backgroundColor=''

        
    });
    playertxt.innerHTML="tic tac toe"
    currentPlayer=letter1
    containerEl.classList.remove("success")

}

const startGame=()=>{
    boxes.forEach((box)=>{
        box.addEventListener("click",boxClicked)

    })
}

const winningCombination =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

rstart.addEventListener("click",restartGame)

startGame()