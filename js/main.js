
var quotes= 
[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        name:"― Oscar Wilde",

    },
    {
        quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        name:"― Marilyn Monroe",
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        name:"― Albert Einstein",
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        name:"― Marcus Tullius Cicero",

    },
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name:"― Bernard M. Baruch",

    },
    {
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        name:"― Dr. Seuss",

    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        name:"― Mae West",

    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        name:"― Mahatma Gandhi",

    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        name:"― Robert Frost",

    },
    {
        quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        name:"― J.K. Rowling",

    },
]

var usedRandom="";

function random(){
return Math.floor(Math.random()*quotes.length)
}
function randomcheck(){
    var theNewNum= random();
    while(theNewNum===usedRandom){
        theNewNum= random();
    }

    usedRandom=theNewNum;
return theNewNum;
}

function show(){
    newquote=randomcheck();
    var getquote = `
        <div class="d-flex justify-content-center align-content-center mt-3">
            <h3>${quotes[newquote].quote}</h3>
            </div>
            <div class="d-flex justify-content-center align-content-center mt-3">
            <h5>${quotes[newquote].name}</h5>
        </div>
    `;
    document.getElementById('quote').innerHTML = getquote;
}