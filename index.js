var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;
var image1="dice"+ran1+".png";
var image1src="images/"+image1;
document.querySelectorAll("img")[0].setAttribute("src",image1src);
var image2="dice"+ran2+".png";
var image2src="images/"+image2;
document.querySelectorAll("img")[1].setAttribute("src",image2src);
if(ran1>ran2){
  document.querySelector("h1").innerText=" Player1 Wins";
}
else if(ran2>ran1){
  document.querySelector("h1").innerText=" Player2 Wins";
}
else{
document.querySelector("h1").innerText=" ! Draw";
}
