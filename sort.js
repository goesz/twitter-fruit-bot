const frutas = ["banana", "maçã", "laranja", "uva", "morango", "abacaxi", "manga", "limão", "melancia",
 "melão", "kiwi", "pera", "pêssego", "cereja", "goiaba", "abacate", "ameixa", "figo", "maracujá", "pitaya"];


function fruitSort(frutas) {
    if (frutas.length < 2) {
        console.log("e");
        return;
    }

    let fruta1 = Math.floor(Math.random() * frutas.length);
    let fruta2 = Math.floor(Math.random() * frutas.length);
    
    while (fruta1 === fruta2) {
        fruta2 = Math.floor(Math.random() * frutas.length);
    } 

    const name1 = frutas[fruta1];
    const name2 = frutas[fruta2];

    return `${name1} é melhor que ${name2}`;
};

console.log(fruitSort[frutas])

module.exports = fruitSort;
