// ==UserScript==
// @name         minimap
// @namespace    http://tampermonkey.net/
// @version      0.g
// @description  try to take over the world!
// @author       You
// @match        https://fuckyouarkeros.fun/
// @grant        none
// ==/UserScript==

//setTimeout(init, 3000);
setInterval(init, 3000);
function init() {
 var coorDOM = document.getElementsByClassName("coorbox");
    coorDOM = coorDOM[0];
    var coordsXY = coorDOM.innerHTML.split(/(-\d+|\d+)/);
           var X = coordsXY[1];
           var Y = coordsXY[3];
           coordsXY = [X, Y];
          console.log(coordsXY);
}