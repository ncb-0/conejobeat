/* setInterval (() => {
  let myTags = ["#www", "#wtf", "#wafa", "#virtualrave", "#virtual", "#viby", "#vibez", "#vibe", "#urlfest", "#url", "#tunes", "#trance", "#techno", "#stream", "#slurl", "#sl", "#shoutcast", "#sharp", "#secondlife", "#returnal", "#remix", "#rave", "#prim", "#postnightcore", "#plur", "#party", "#online", "#omg", "#numpy", "#notdead", "#nightcore", "#nezu", "#nerdy", "#music", "#mousi", "#metaverse", "#media", "#mc", "#lovely", "#love", "#lit", "#kawaii", "#jazz", "#hype", "#http", "#house", "#gabber", "#funk", "#foxy", "#fluffy", "#fancy", "#exclusive", "#etc", "#dj", "#dekbass", "#dek", "#cute", "#cpu", "#cool", "#conejoisland", "#conejobeat", "#conejo", "#comeback", "#chunchy", "#blessed", "#bassboost", "#bass", "#animal", "#angelic", "#angel", "#54%", "#classic", "#chunch", "#awww", "#carrot", "#brb", "#avatar", "#rez", "#queso", "#ayyquerico", "#yaye", "#1080p", "#lowfps"];

  let shuffledTags = myTags.sort(() => {
    return 0.5 - Math.random();
  });

  console.log(shuffledTags);

  document.querySelector("#tags h3").innerHTML = shuffledTags.join(" ");
}, 500); */

function randomQuote() {
  let quotes = [
    "bring your finest <strike>wine</strike> CHEESE!",
    "it’s just conejobeat...",
    "we overclocked the lovemeter~",
    "if you’re wearing perfume, please be sure to remind us~ nezu doesn’t have smell sensors...",
    "are you feeling fluffy?",
    "dress SHARP.",
    "for the first time ever, we’ve sourced 100% organic linden water for the venue~",
    "i can’t be the only one vibing to some music right now"
  ];
  
  let shuffledQuotes = quotes.sort(() => {
    return 0.5 - Math.random();
  });

  document.querySelector("#quote").innerHTML = shuffledQuotes[0];
}

document.onload = randomQuote();