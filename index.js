const arrayCards = [
    {
        name:'dog',
        img: './images/dog.png'
    },
    {
        name:'dog',
        img: './images/dog.png'
    },
    {
        name:'elephant',
        img: './images/elephant.png'
    },
    {
        name:'elephant',
        img: './images/elephant.png'
    },
    {
        name:'fox',
        img: './images/fox.png'
    },
    {
        name:'fox',
        img: './images/fox.png'
    },
    {
        name:'koala',
        img: './images/koala.png'
    },
    {
        name:'koala',
        img: './images/koala.png'
    },
    {
        name:'lion',
        img: './images/lion.png'
    },
    {
        name:'lion',
        img: './images/lion.png'
    },
    {
        name:'turtle',
        img: './images/turtle.png'
    },
    {
        name:'turtle',
        img: './images/turtle.png'
    }
]

arrayCards.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
const myscore = document.querySelector('.score');
const result = document.querySelector('.result');

var cardChoosen = [];
var cardChoosenId = [];
var score = 0;
let won = 0;


function createBoard(){
    for(let i=0; i<arrayCards.length; i++){
        var card = document.createElement("img");
        card.setAttribute('src','./images/wall.png');
        card.setAttribute('data-id', i);
        card.classList.add('image');
        card.style.height = "100px";
        card.style.margin = "3px 3px"
        card.style.width = "100px";
        card.addEventListener('click', turnOverCard);
        grid.appendChild(card);        
    }
}

function cheakPair(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChoosenId[0];
    const optionTwoId = cardChoosenId[1];
    if(cardChoosen[0] === cardChoosen[1]){
        cards[optionOneId].setAttribute('src', './images/white.png');
        cards[optionTwoId].setAttribute('src', './images/white.png');
        score = score + 1;
        won = won + 1;
    }
    else{
        cards[optionOneId].setAttribute('src', './images/wall.png');
        cards[optionTwoId].setAttribute('src', './images/wall.png');
        score = score - 0.50;
    }
    cardChoosen = [];
    cardChoosenId = [];
    myscore.innerHTML = score;
    if((arrayCards.length / 2) === won){
        result.innerHTML = "Congratulation you won " + score;
    }

}

function turnOverCard(){
    const cardId = this.getAttribute('data-id');
    cardChoosen.push(arrayCards[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute('src', arrayCards[cardId].img);
    if(cardChoosen.length === 2){
        setTimeout(cheakPair, 500);
    }
}


createBoard();