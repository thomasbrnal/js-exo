operateur.onclick = calculer();
function calculer() {
    let nbr1 = document.getElementById("nbr1").value;
    let nbr2 = document.getElementById("nbr2").value;
    let operateur = document.getElementById("operateur").value;
    nbr1 = parseInt(nbr1);
    nbr2 = parseInt(nbr2);
    if (operateur == "+") {
        console.log("le résultat est", parseInt(nbr1) + parseInt(nbr2));
    }
    else if (operateur == "-") {
        console.log("le résultat est", parseInt(nbr1) - parseInt(nbr2));
    }
    else if (operateur == "/") {
        console.log("le résultat est", parseInt(nbr1) / parseInt(nbr2));
    }
    else if (operateur == "*") {
        console.log("le résultat est", parseInt(nbr1) * parseInt(nbr2));
    }
    else if (operateur == "**") {
        console.log("le résultat est", parseInt(nbr1) ** parseInt(nbr2));
    }
}