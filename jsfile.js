    // FOR IMAGE 1
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDice1 = "dice"+randomNumber1+".png";

var randomImageAdd1 = "images/"+randomDice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageAdd1);

  // FOR IMAGE 2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "dice"+randomNumber2+".png";

var randomImageAdd2 = "images/"+randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageAdd2);


    // IF CONDITIONS
if(randomNumber1>randomNumber2){
  document.querySelector("h1").classList.add("design1");
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").classList.add("design2");
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
document.querySelector("h1").innerHTML = "Draw!";
}
