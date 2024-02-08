"use strict";

const select = selector => document.querySelector(selector);

const firstPunchline = () =>
{
    var response = document.createElement("h2");
    response.textContent = "Duck Tape!";

    select("#firstJoke").appendChild(response);
};

select("#add1").addEventListener("click", firstPunchline);

const secondPunchline = () =>
{
    var response = document.createElement("h2");
    response.textContent = "'I demand an eggs-planation!'";

    select("#secondJoke").appendChild(response);
};

select("#add2").addEventListener("click", secondPunchline);

const thirdPunchline = () =>
{
    var response = document.createElement("h2");
    response.textContent = "'Put it on my bill!'";

    select("#thirdJoke").appendChild(response);
};

select("#add3").addEventListener("click", thirdPunchline);