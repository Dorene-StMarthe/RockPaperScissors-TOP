const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const bigRed = document.createElement("p");
bigRed.classList.add("bigRed");
bigRed.textContent = "Hey I'm red!";
bigRed.style.color = "red";
container.appendChild(bigRed);

const blueTwo = document.createElement("h3");
blueTwo.classList.add("blueTwo");
blueTwo.textContent ="I'm blue h3!";
blueTwo.style.color ="blue";
container.appendChild(blueTwo);

const numThree = document.createElement ("div");
numThree.classList.add("numThree");
numThree.setAttribute("style", "border: 1px solid, black; padding: 0.5em 0.5em 0.5em 0.5em; background-color:pink");
container.appendChild(numThree);

const h3= document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm in a div";
numThree.appendChild(h3);

const para = document.createElement("p");
para.classList.add("p");
para.textContent ="ME TOO!"
numThree.appendChild(para);

const btn= document.querySelector("#btn");
//btn.addEventListener("click", () => {
    //alert("Hello World!");
//})


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";  });
  
