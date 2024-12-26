let btn=document.querySelector("button");
btn.addEventListener("click",function()
{
    let h3=document.querySelector("h3");
    let color=GenerateRandomNumber();
    h3.innerText=color;
    console.log(color);
    let div=document.querySelector("div");
    div.style.backgroundColor=color;
});
function GenerateRandomNumber()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}