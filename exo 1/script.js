let newList = document.createElement("li");
newList.innerHTML = "";

let ul = document.getElementById("liste-commissions");
ul.append(newList);

let saisi = document.getElementById("saisie");

let button = document.getElementById("clickOn");
button.addEventListener("click", function () {
newList.innerHTML = saisi.value;
})

let supp = document.getElementById("clickOnForSupp");
supp.addEventListener("click", function () {
 let list = document.getElementById("liste-commissions");
    console.log()
})