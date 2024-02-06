require("dotenv").config({ path: __dirname + "/.env" });
const fruitSort = require('./sort.js');
const { twitterClient } = require("./twitterClient.js");
const frase = fruitSort(["banana", "maçã", "laranja", "uva", "morango", "abacaxi", "manga", "limão",
"melancia", "melão", "kiwi", "pera", "pêssego", "cereja", "goiaba", "abacate", "ameixa", "figo", "maracujá", "pitaya"]);

const tweet = async () => {
 try {
   await twitterClient.v2.tweet(frase);
 } catch (e) {
   console.log(e)
 }
}

tweet();
console.log(frase)