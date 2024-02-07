"use strict";

const select = selector => document.querySelector(selector);

var num = prompt("Please pick a number between 1 and 10");
var gawrsh = parseInt(num);

for (let i = 1; i <= gawrsh; i++)
{
    var newParagraph = document.createElement("h3");
    newParagraph.textContent = "Gawrsh!";

    select("#goofy").appendChild(newParagraph);
}

const grumpierDonald = () =>
{
    document.body.style.backgroundColor = "red";
    select("#grumpy").src = "angry.png";

   document.getElementById("header").textContent = "Oh no! We have made him angrier! Let's help put him in a better mood. (Hint: Double click)";
};

const happyDonald = () =>
{
    document.body.style.backgroundColor = "skyblue";
    select("#grumpy").src = "happy.png";

    document.getElementById("header").textContent = "Hooray! You've helped make him happy. Great job!";
};

select("#grumpy").addEventListener("click", grumpierDonald);

select("#grumpy").addEventListener("dblclick", happyDonald);