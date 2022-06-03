// Challenge 1: Age in Days

// function ageInDays(){
//     var birthyear = prompt('Enter your Birthyear.');
//     var agetoDays=(2022-birthyear)*365;
//     document.getElementById('flex-box-result').innerHTML="<h1> You are "+ agetoDays +" days old.";
// }

function ageInDays(){
    var birthyear = prompt('Enter your Birthyear.');
    var agetoDays=(2022-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer =document.createTextNode('You are '+ agetoDays+ 'days ')
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function clearResult(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Dog Generator
function AddDog(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-dog-gen');
    image.src="http://thedogapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors


// function rpsGame(yourChoice){
//     choices=["rock","paper","scissors"];
//     var humanChoice, botChoice;
//     humanChoice = yourChoice.id;
//     botChoice=choices[Math.floor(Math.random()* choices.length)]
//     var results= decideWinner(humanChoice,botChoice);
//     var message=finalMessage(results);
//     rpsFrontEnd(humanChoice,botChoice,message);
// }

// function decideWinner(humanChoice,botChoice){
//     if(humanChoice==botChoice){
//         return 0.5;
//     }
//     else if(humanChoice=='rock' && botChoice=='scissors'){
//         return 1;
//     }
    
//     else if(humanChoice=='paper' && botChoice=='rock'){
//         return 1;
//     }
    
//     else if(humanChoice=='scissors' && botChoice=='paper'){
//         return 1;
//     }
//     else if(humanChoice=='rock' && botChoice=='paper'){
//         return 0;
//     }
    
//     else if(humanChoice=='paper' && botChoice=='scissors'){
//         return 0;
//     }
    
//     else if(humanChoice=='scissors' && botChoice=='rock'){
//         return 0;
//     }
// }

// function finalMessage(results){
//     if(results==0.5){
//         return("You Drew!");
//     }
//     else if(results==0){
//         return("You Lost!");
//     }
//     else if(results==1){
//         return("You Won!");
//     }
// }

// function rpsFrontEnd(humanChoice,botChoice,message){
//     document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissors').remove();
//     var div=document.getElementById('flex-box-rps-div');
//     var img1=document.createElement('img');
//     img1.setAttribute('height',150);
//     img1.setAttribute('width',150);
//     if(humanChoice=="rock"){
//         img1.src="http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png";
//     }
//     else if(humanChoice=="paper"){
//         img1.src="http://images.clipartpanda.com/paper-clip-art-niEBBqMiA.svg";
//     }
//     else if(humanChoice=="scissors"){
//         img1.src="http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg";
//     }
    
    
   
//     div.append(img1);
//     var h1=document.createElement('h1');
//     h1.style.margin= 'auto';
//     if(message=="You Drew!"){
//         h1.style.color="yellow";
//         h1.append(message);
//     }
//     else if(message=="You Lost!"){
//         h1.style.color="red";
//         h1.append(message);
//     }
//     else if(message=="You Won!"){
//         h1.style.color="green";
//         h1.append(message);
//     }

//     div.append(h1);

//     var img2=document.createElement('img');
//     if(botChoice=="rock"){
//         img2.src="http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png";
//     }
//     else if(botChoice=="paper"){
//         img2.src="http://images.clipartpanda.com/paper-clip-art-niEBBqMiA.svg";
//     }
//     else if(botChoice=="scissors"){
//         img2.src="http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg";
//     }
//     img2.setAttribute('height',150);
//     img2.setAttribute('width',150);
//     div.append(img2);
// }

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice= numberToChoice(rndToRpsInt());
    console.log(botChoice);
    results= decideWinner(humanChoice,botChoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}

function rndToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decideWinner(humanChoice,botChoice){
    var rpsDatabase={
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper': {'rock':1,'paper':0.5,'scissors':0},
        'scissors': {'paper':1,'scissors':0.5,'rock':0}
    };

    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore =rpsDatabase[botChoice][humanChoice];
    
    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore == 0){
        return{
            'message':'You Lost!',
            'color':'red'
        };
    }
    else if(yourScore == 0.5){
        return{
            'message':'You Tied!',
            'color':'Yellow'
        };
    }
    else{
        return{
            'message':'You Won!',
            'color':'green'
        };
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };

    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//challenge 4: change the color of ALL buttons

var all_buttons=document.getElementsByTagName('button');
// console.log(all_buttons);

var copyAllButtons = [];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
//console.log(copyAllButtons);

function buttonColorChange(buttonState){
    if(buttonState.value==='red'){
        buttonsRed();
    }
    else if(buttonState.value==='green'){
        buttonsGreen();
    }
    else if(buttonState.value==='reset'){
        buttonsReset();
    }
    else if(buttonState.value==='random'){
        buttonsRandom();
    }  
}

function buttonsRed(){
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
 }

function buttonsReset(){
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom(){
    // console.log(copyAllButtons);
    for(let i=0;i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        var randNumber=Math.floor(Math.random()*all_buttons.length);
        all_buttons[i].classList.add(copyAllButtons[randNumber]);
    }
}

//Challenge 5: Black Jack

let blackjackGame={
    'you':{
        'scoreSpan': '#your-blackjack-result',
        'div': '#your-box',
        'score':0
    },
    'dealer':{
        'scoreSpan': '#dealer-blackjack-result',
        'div': '#dealer-box',
        'score':0
    },
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        '10':10,
        'K':10,
        'Q':10,
        'J':10,
        'A':[1,11]
    },
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver': false,
};

const YOU= blackjackGame['you'];
const DEALER =blackjackGame['dealer'];

const hitSound =new Audio('static/sounds/swish.m4a');
const winSound= new Audio('static/sounds/cash.mp3');
const lossSound= new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',delaerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);


function blackjackHit() {
    if(blackjackGame['isStand']=== false){
    let card=randomCard();
    showCard(card,YOU);
    UpdateScore(card,YOU);
    showScore(YOU);
    }
}

function randomCard(){
    let randomIndex= Math.floor(Math.random()* 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score'] <= 21){
    let cardImage=document.createElement('img');
    cardImage.src=`static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal(){
    // showResult(computeWinner());
    if(blackjackGame['turnsOver']=== true){

    blackjackGame['isStand']=false;
    let yourImages= document.querySelector('#your-box').querySelectorAll('img');
    
    for(i=0; i<yourImages.length; i++){
        yourImages[i].remove();
    }

    let dealerImages= document.querySelector('#dealer-box').querySelectorAll('img');
    for(i=0; i<dealerImages.length; i++){
        dealerImages[i].remove();
    }
    YOU['score']=0;
    DEALER['score']=0;

    document.querySelector('#your-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').textContent=0;
    document.querySelector('#your-blackjack-result').style.color='white';
    document.querySelector('#dealer-blackjack-result').style.color='white';
    document.querySelector('#blackjack-result').textContent="Let's Play";
    document.querySelector('#blackjack-result').style.color='black';
    blackjackGame['turnsOver']=false;
    }
    }


function UpdateScore(card,activePlayer){
    // if adding 11 keeps me below 21, add 11 otherwise, add 1 for ace.
    if(card === 'A'){
     if(activePlayer['score']+ blackjackGame['cardsMap'][card][1] <= 21){
        activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
    }
    else {
    activePlayer['score'] +=blackjackGame['cardsMap'][card];
    }
}


function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';
    }
    else{
    document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function delaerLogic(){
    blackjackGame['isStand']= true;

    while(DEALER['score']<16 && blackjackGame['isStand']===true){
        let card= randomCard();
        showCard(card,DEALER);
        UpdateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver']=true;
    showResult(computeWinner());
    
}

//compute winner and return who just won
//update table

function computeWinner(){
    let winner;

    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            blackjackGame['wins']++;
            winner=YOU;
        }
        else if(YOU['score']< DEALER['score']){
            blackjackGame['losses']++;
            winner=DEALER;
        } else if(YOU['score']==DEALER['score']){
            blackjackGame['draws']++;
        }
    }
    else if(YOU['score'] > 21 && DEALER['score']<=21){
        blackjackGame['losses']++;
        winner=DEALER;
    }
    else if(YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draws']++;
    }
     console.log('Winner is: ', winner);
    return winner;
}

function showResult(winner){
    let message,messageColor;

    if(blackjackGame['turnsOver']=== true){

    if(winner === YOU){
        document.querySelector('#wins').textContent=blackjackGame['wins'];
        message='You Won!';
        messageColor='green';
        winSound.play();
    }
    else if(winner === DEALER){
        document.querySelector('#losses').textContent=blackjackGame['losses'];
        message='You Lost!';
        messageColor='red';
        lossSound.play();
    }
    else {
        document.querySelector('#draws').textContent=blackjackGame['draws'];
        message='You Drew';
        messageColor='black';
    }

    document.querySelector('#blackjack-result').textContent=message;
    document.querySelector('#blackjack-result').style.color= messageColor;
    }
}
