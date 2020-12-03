var tema = localStorage.getItem("tema");
var linkTema = document.getElementById("tema");

if (tema == "dia" || tema == "")
    linkTema.href = "css/stylesDay.css";
    else
    linkTema.href = "css/stylesNight.css";

 tema1.addEventListener("click", (event) => {
    var linkTema = document.getElementById('tema').href ="css/stylesDay.css";  
    localStorage.setItem("tema","dia");
 });

 tema2.addEventListener("click", (event) => {
    var linkTema = document.getElementById('tema').href ="css/stylesNight.css";
    localStorage.setItem("tema","noche");
 });
 