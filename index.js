require("dotenv").config({ path: __dirname + "/.env" });
const { frutas, fruitSort } = require('./sort.js');
const { twitterClient } = require("./twitterClient.js");
const frase = fruitSort(frutas);

const tweet = async () => {
 try {
   await twitterClient.v2.tweet(frase);
 } catch (e) {
   console.log(e)
 }
}

tweet();
console.log(frase)