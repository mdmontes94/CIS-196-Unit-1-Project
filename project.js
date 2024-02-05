"use strict";

var goofyDiv = document.querySelector("#goofy");

var num = prompt("Please pick a number between 1 and 10");
var gawrsh = parseInt(num);

for (let i = 1; i <= gawrsh; i++)
{
    var newParagraph = document.createElement("h3");
    newParagraph.textContent = "Gawrsh!";

    goofyDiv.appendChild(newParagraph);
}