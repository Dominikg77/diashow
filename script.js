let images = [`a.jpg`, `b.jpg`, `c.jpg`] //wichtig [] diese Klammern zu verwenden Option 5
    // Bei arrays wird bei 0 angefangen zu Zählen  
let currentImage = 0;


function start() {
    let millisecons = +document.getElementById(`inputfield`).value * 1000; //1000 da es in Millisekunden umgerechnet werden muss


    if (millisecons > 10000) { // Zahl muss kleienr als 10000 (10sekunden)
        alert(`Bitte kleiner Zahl eingeben!`)
    } else {
        if (millisecons < 1000) { // Zahl muss grösser als 1000 (1sekunden)
            alert(`Bitte mindeste eine Sekunden als Zeit angben!`);
        } else {
            showImage(currentImage);
            currentImage++; //i wird um eins erhöt

            if (currentImage == 3) { // wenn i wert 3 erreicht hat, dann soll das {} ausgelösst werden
                currentImage = 0; // i wieder auf null setzen
            }
        }
    }

    setTimeout(start, millisecons); // funtkion start() nur start, schreiben

}

function showImage(i) { //Variable in die Funktion übergehben (i)
    document.getElementById(`image`).src = images[i]
}