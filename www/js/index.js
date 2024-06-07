function calculerIMC() {
    const poids = document.getElementById('poids').value;
    const taille = document.getElementById('taille').value;
    
    if (!poids || !taille) {
        alert("Veuillez saisir les deux valeurs, poids et taille.");
        return;
    }

    const imc = poids / Math.pow(taille, 2);

    let interpretation = "Vous êtes en état ";
    if (imc < 16.5) {
        interpretation += "de dénutrition";
    } else if (imc < 18.5) {
        interpretation += "de maigreur";
    } else if (imc < 25) {
        interpretation = "Vous avez un poids normal";
    } else if (imc < 30) {
        interpretation += "de surpoids";
    } else if (imc < 35) {
        interpretation += "d'obésité modérée";
    } else if (imc < 40) {
        interpretation += "d'obésité sévère";
    } else {
        interpretation += "d'obésité morbide ou massive";
    }

    const message = `Votre IMC est : ${imc.toFixed(2)}<br>${interpretation}`;
    
    const resultArea = document.querySelector("span");
    resultArea.innerHTML = message;
    resultArea.parentNode.hidden = false;
}
