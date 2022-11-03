setInterval (() => {
  let myTags = ["#www", "#wtf", "#wafa", "#virtualrave", "#virtual_rave", "#virtual", "#viby", "#vibez", "#vibe", "#urlfest", "#url_fest", "#url", "#tunes", "#trance", "#techno", "#stream", "#slurl", "#sl", "#shoutcast", "#sharp", "#secondlife", "#second_life", "#returnal", "#remix", "#rave", "#prim", "#postnightcore", "#post_nightcore", "#plur", "#party", "#online", "#omg", "#numpy", "#notdead", "#no1_dj_song", "#nightcore", "#nezu", "#nerdy", "#music", "#mousi", "#metaverse", "#media", "#mc", "#lovely", "#love", "#lit", "#kawaii", "#jazz", "#hype", "#http", "#house", "#gabber", "#funk", "#foxy", "#fluffy", "#fancy", "#exclusive", "#etc", "#dj", "#dekbass", "#dek_bass", "#dek", "#cute", "#cpu", "#cool", "#conejoisland", "#conejobeat", "#conejo_island", "#conejo", "#comeback", "#chunchy", "#blessed", "#black_key", "#bassboost", "#bass_boost", "#bass", "#animal", "#angelic", "#angel", "#54%", "#classic", "#chunch", "#awww", "#carrot", "#brb"];

  let shuffledTags = myTags.sort(() => {
    return 0.5 - Math.random();
  });

  console.log(shuffledTags);

  document.querySelector("#tags h1").innerHTML = shuffledTags.join(" ");
}, 250);