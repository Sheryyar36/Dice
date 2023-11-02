function diceRoll(){

    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");

    var ran1 = Math.ceil(Math.random() * 6);
    var ran2 = Math.ceil(Math.random() * 6);

    switch(ran1){
        case 1: die1.setAttribute("src", "./diceimages/dice1.png");
                break;
        case 2: die1.setAttribute("src", "./diceimages/dice2.png");
                break;
        case 3: die1.setAttribute("src", "./diceimages/dice3.png");
                break;
        case 4: die1.setAttribute("src", "./diceimages/dice4.png");
                break;
        case 5: die1.setAttribute("src", "./diceimages/dice5.png");
                break;
        case 6: die1.setAttribute("src", "./diceimages/dice6.png");
                break;
        default: die1.setAttribute("src", "./diceimages/random.png");
    };
    switch(ran2){
        case 1: die2.setAttribute("src", "./diceimages/dice1.png");
                break;
        case 2: die2.setAttribute("src", "./diceimages/dice2.png");
                break;
        case 3: die2.setAttribute("src", "./diceimages/dice3.png");
                break;
        case 4: die2.setAttribute("src", "./diceimages/dice4.png");
                break;
        case 5: die2.setAttribute("src", "./diceimages/dice5.png");
                break;
        case 6: die2.setAttribute("src", "./diceimages/dice6.png");
                break;
        default: die2.setAttribute("src", "./diceimages/random.png");

    }
};