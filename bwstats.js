const fetch = require("node-fetch");

function getStats(key, ign) {
    var url = `https://api.hypixel.net/player?key=${key}&name=${ign}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.success === false) return ["nosuc", data.cause];
    if (data.player === null) return ["nodata"];
    
    var networklvl = ((Math.sqrt((2 * `${data.player.networkExp}`) + 30625) / 50) - 2.5).toFixed(1);
    return(networklvl);
}

var getvar = getStats("sdf", "technoblade");
console.log(getvar);