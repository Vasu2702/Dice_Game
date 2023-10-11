var rand=Math.random();
rand=rand*6;
rand=Math.floor(rand)+1;
console.log(rand);
var add="dice"+rand+".png";
var att="./images/"+add;
var im1=document.querySelectorAll("img")[0];
var im2=document.querySelectorAll("img")[1];
im1.setAttribute("src",att);
var rand1=Math.random();
rand1=rand1*6;
rand1=Math.floor(rand1)+1;
console.log(rand1);
var add1="dice"+rand1+".png";
var att1="./images/"+add1;
im2.setAttribute("src",att1);
if(rand>rand1)
{
    document.querySelector("h1").innerHTML="👑 Its player 1";
}
else if(rand1>rand)
{
    document.querySelector("h1").innerHTML="👑 Its player 2"
}
else
{
    document.querySelector("h1").innerHTML="Draw"
}


//alert("djfgnf");