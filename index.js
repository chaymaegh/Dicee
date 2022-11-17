/* my aswer  


var images = ["images/dice1.png",
"images/dice2.png",
"images/dice3.png",
"images/dice4.png",
"images/dice5.png",
"images/dice6.png"];

var randomNumver1;
var randomNumver2;
randomNumver1 = Math.random();
randomNumver1=randomNumver1*images.length;
randomNumver1 = Math.floor(randomNumver1);

var x=images[randomNumver1];



randomNumver2=Math.floor(Math.random()*images.length);
var y=images[randomNumver2];

document.querySelector(".img1").setAttribute("src",x);
document.querySelector(".img2").setAttribute("src",y);


if(randomNumver1 > randomNumver2){
    var selectHeading = document.querySelector("h1");
    selectHeading.innerHTML="Player 1 Wins!"
}
else if(randomNumver2 > randomNumver1){
    var selectHeading = document.querySelector("h1");
    selectHeading.innerHTML="Player 2 Wins!"}
else{
    var selectHeading = document.querySelector("h1");
    selectHeading.innerHTML="Draw"
}
*/

/* answer of angela*/

var randomNumver1 = Math.floor(Math.random()*6+1);

var randomDiceImage ="dice" + randomNumver1 +".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);





var randomNumver2 = Math.floor(Math.random()*6+1);

var randomDiceImage1 ="dice" + randomNumver2 +".png";

var randomImageSource2 = "images/"+randomDiceImage1;
image2.setAttribute("src",randomImageSource2);



if(randomNumver1>randomNumver2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins  ";
}
else if(randomNumver2>randomNumver1){
    document.querySelector("h1").innerHTML= "Player 2 Wins 🚩 ";

}else{
    document.querySelector("h1").innerHTML= "Draw";

}
