let cardsChart;
const tdRise = "rgb(0, 255, 150)";

function tableCreate() {
    const divCanvas = document.getElementById('divCanvas'),
    tbl = document.createElement('table');
    // tbl.style.tableLayout = "fixed";
    tbl.style.border = '1px solid black';
    const cards = [ "A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
    const cardsChart = {};

    for (let i = 0; i < 13; i++) { // create procedural table cards range chart
        const tr = tbl.insertRow();
        for (let j = 0; j < 13; j++) {
            const td = tr.insertCell();
            if ( i < j) {
                var tdValue = `${cards[i]}${cards[j]}${"s"}`;
                var idchart = `${"_"}${cards[i]}${cards[j]}${"s"}`; //symbol "x" to create object properties that start with numbers
                td.appendChild(document.createTextNode(tdValue)); //creates text inside in every td
                td.setAttribute('id', idchart); // add custom "id"s to every td
                td.style.backgroundColor = "rgb(200, 200, 200)"; //add color to every td
                td.setAttribute('onclick', `clickable(id)`); // creates onclick related to custom id
                cardsChart[idchart] = "rgb(200, 200, 200)"; //add to object a custom property and value
            } else if ( i > j) {
                var tdValue = `${cards[i]}${cards[j]}${"o"}`;
                var idchart = `${"_"}${cards[i]}${cards[j]}${"o"}`;
                td.appendChild(document.createTextNode(tdValue)); //creates text inside in every td
                td.setAttribute('id', idchart); // add custom "id"s to every td
                td.style.backgroundColor = "rgb(200, 200, 200)"; //add color to every td
                td.setAttribute('onclick', `clickable(id)`); // creates onclick related to custom id
                cardsChart[idchart] = "rgb(200, 200, 200)"; //add to object a custom property and value
            } else if ( i === j) {
                var tdValue = `${cards[i]}${cards[j]}`;
                var idchart = `${"_"}${cards[i]}${cards[j]}`;
                td.appendChild(document.createTextNode(tdValue)); //creates text inside in every td
                td.setAttribute('id', idchart); // add custom "id"s to every td
                td.style.backgroundColor = "rgb(232, 232, 232)"; //add color to every td
                td.setAttribute('onclick', `clickable(id)`); // creates onclick related to custom id
                cardsChart[idchart] = "rgb(232, 232, 232)"; //add to object a custom property and value

            }
            tr.style.width = "650px";
            td.style.height = "32px"; //can't be smaller than typo size
            td.style.width = "32px"; //can't be smaller than typo size
        }
    }
    divCanvas.appendChild(tbl);
    return cardsChart;
}
  
cardsChart = tableCreate();

function clickable(value) {
    document.getElementById(value).style.backgroundColor = tdRise;
    cardsChart[value] = "rgb(0, 255, 150)";
}

document.getElementById('checkSol').onclick = function() {
    checkSolution(cardsChart);
}
  

function checkSolution(cardsChart) {
    console.log("btn check clicked");
    console.log(cardsChart);
  
    function addLineBreaks(match, p1, p2, p3, offset, string) {
      return `<br>${p1}:${p2}`;
    }
    document.getElementById('p').innerHTML = JSON.stringify(cardsChart).replace(/"([^"]+)":("[^"]+")/g, addLineBreaks);
    const chartDefault = {
        _AA:"rgb(232, 232, 232)",
        _AKs:"rgb(200, 200, 200)",
        _AQs:"rgb(200, 200, 200)",
        _AJs:"rgb(200, 200, 200)",
        _ATs:"rgb(200, 200, 200)",
        _A9s:"rgb(200, 200, 200)",
        _A8s:"rgb(200, 200, 200)",
        _A7s:"rgb(200, 200, 200)",
        _A6s:"rgb(200, 200, 200)",
        _A5s:"rgb(200, 200, 200)",
        _A4s:"rgb(200, 200, 200)",
        _A3s:"rgb(200, 200, 200)",
        _A2s:"rgb(200, 200, 200)",
        _KAo:"rgb(200, 200, 200)",
        _KK:"rgb(232, 232, 232)",
        _KQs:"rgb(200, 200, 200)",
        _KJs:"rgb(200, 200, 200)",
        _KTs:"rgb(200, 200, 200)",
        _K9s:"rgb(200, 200, 200)",
        _K8s:"rgb(200, 200, 200)",
        _K7s:"rgb(200, 200, 200)",
        _K6s:"rgb(200, 200, 200)",
        _K5s:"rgb(200, 200, 200)",
        _K4s:"rgb(200, 200, 200)",
        _K3s:"rgb(200, 200, 200)",
        _K2s:"rgb(200, 200, 200)",
        _QAo:"rgb(200, 200, 200)",
        _QKo:"rgb(200, 200, 200)",
        _QQ:"rgb(232, 232, 232)",
        _QJs:"rgb(200, 200, 200)",
        _QTs:"rgb(200, 200, 200)",
        _Q9s:"rgb(200, 200, 200)",
        _Q8s:"rgb(200, 200, 200)",
        _Q7s:"rgb(200, 200, 200)",
        _Q6s:"rgb(200, 200, 200)",
        _Q5s:"rgb(200, 200, 200)",
        _Q4s:"rgb(200, 200, 200)",
        _Q3s:"rgb(200, 200, 200)",
        _Q2s:"rgb(200, 200, 200)",
        _JAo:"rgb(200, 200, 200)",
        _JKo:"rgb(200, 200, 200)",
        _JQo:"rgb(200, 200, 200)",
        _JJ:"rgb(232, 232, 232)",
        _JTs:"rgb(200, 200, 200)",
        _J9s:"rgb(200, 200, 200)",
        _J8s:"rgb(200, 200, 200)",
        _J7s:"rgb(200, 200, 200)",
        _J6s:"rgb(200, 200, 200)",
        _J5s:"rgb(200, 200, 200)",
        _J4s:"rgb(200, 200, 200)",
        _J3s:"rgb(200, 200, 200)",
        _J2s:"rgb(200, 200, 200)",
        _TAo:"rgb(200, 200, 200)",
        _TKo:"rgb(200, 200, 200)",
        _TQo:"rgb(200, 200, 200)",
        _TJo:"rgb(200, 200, 200)",
        _TT:"rgb(232, 232, 232)",
        _T9s:"rgb(200, 200, 200)",
        _T8s:"rgb(200, 200, 200)",
        _T7s:"rgb(200, 200, 200)",
        _T6s:"rgb(200, 200, 200)",
        _T5s:"rgb(200, 200, 200)",
        _T4s:"rgb(200, 200, 200)",
        _T3s:"rgb(200, 200, 200)",
        _T2s:"rgb(200, 200, 200)",
        _9Ao:"rgb(200, 200, 200)",
        _9Ko:"rgb(200, 200, 200)",
        _9Qo:"rgb(200, 200, 200)",
        _9Jo:"rgb(200, 200, 200)",
        _9To:"rgb(200, 200, 200)",
        _99:"rgb(232, 232, 232)",
        _98s:"rgb(200, 200, 200)",
        _97s:"rgb(200, 200, 200)",
        _96s:"rgb(200, 200, 200)",
        _95s:"rgb(200, 200, 200)",
        _94s:"rgb(200, 200, 200)",
        _93s:"rgb(200, 200, 200)",
        _92s:"rgb(200, 200, 200)",
        _8Ao:"rgb(200, 200, 200)",
        _8Ko:"rgb(200, 200, 200)",
        _8Qo:"rgb(200, 200, 200)",
        _8Jo:"rgb(200, 200, 200)",
        _8To:"rgb(200, 200, 200)",
        _89o:"rgb(200, 200, 200)",
        _88:"rgb(232, 232, 232)",
        _87s:"rgb(200, 200, 200)",
        _86s:"rgb(200, 200, 200)",
        _85s:"rgb(200, 200, 200)",
        _84s:"rgb(200, 200, 200)",
        _83s:"rgb(200, 200, 200)",
        _82s:"rgb(200, 200, 200)",
        _7Ao:"rgb(200, 200, 200)",
        _7Ko:"rgb(200, 200, 200)",
        _7Qo:"rgb(200, 200, 200)",
        _7Jo:"rgb(200, 200, 200)",
        _7To:"rgb(200, 200, 200)",
        _79o:"rgb(200, 200, 200)",
        _78o:"rgb(200, 200, 200)",
        _77:"rgb(232, 232, 232)",
        _76s:"rgb(200, 200, 200)",
        _75s:"rgb(200, 200, 200)",
        _74s:"rgb(200, 200, 200)",
        _73s:"rgb(200, 200, 200)",
        _72s:"rgb(200, 200, 200)",
        _6Ao:"rgb(200, 200, 200)",
        _6Ko:"rgb(200, 200, 200)",
        _6Qo:"rgb(200, 200, 200)",
        _6Jo:"rgb(200, 200, 200)",
        _6To:"rgb(200, 200, 200)",
        _69o:"rgb(200, 200, 200)",
        _68o:"rgb(200, 200, 200)",
        _67o:"rgb(200, 200, 200)",
        _66:"rgb(232, 232, 232)",
        _65s:"rgb(200, 200, 200)",
        _64s:"rgb(200, 200, 200)",
        _63s:"rgb(200, 200, 200)",
        _62s:"rgb(200, 200, 200)",
        _5Ao:"rgb(200, 200, 200)",
        _5Ko:"rgb(200, 200, 200)",
        _5Qo:"rgb(200, 200, 200)",
        _5Jo:"rgb(200, 200, 200)",
        _5To:"rgb(200, 200, 200)",
        _59o:"rgb(200, 200, 200)",
        _58o:"rgb(200, 200, 200)",
        _57o:"rgb(200, 200, 200)",
        _56o:"rgb(200, 200, 200)",
        _55:"rgb(232, 232, 232)",
        _54s:"rgb(200, 200, 200)",
        _53s:"rgb(200, 200, 200)",
        _52s:"rgb(200, 200, 200)",
        _4Ao:"rgb(200, 200, 200)",
        _4Ko:"rgb(200, 200, 200)",
        _4Qo:"rgb(200, 200, 200)",
        _4Jo:"rgb(200, 200, 200)",
        _4To:"rgb(200, 200, 200)",
        _49o:"rgb(200, 200, 200)",
        _48o:"rgb(200, 200, 200)",
        _47o:"rgb(200, 200, 200)",
        _46o:"rgb(200, 200, 200)",
        _45o:"rgb(200, 200, 200)",
        _44:"rgb(232, 232, 232)",
        _43s:"rgb(200, 200, 200)",
        _42s:"rgb(200, 200, 200)",
        _3Ao:"rgb(200, 200, 200)",
        _3Ko:"rgb(200, 200, 200)",
        _3Qo:"rgb(200, 200, 200)",
        _3Jo:"rgb(200, 200, 200)",
        _3To:"rgb(200, 200, 200)",
        _39o:"rgb(200, 200, 200)",
        _38o:"rgb(200, 200, 200)",
        _37o:"rgb(200, 200, 200)",
        _36o:"rgb(200, 200, 200)",
        _35o:"rgb(200, 200, 200)",
        _34o:"rgb(200, 200, 200)",
        _33:"rgb(232, 232, 232)",
        _32s:"rgb(200, 200, 200)",
        _2Ao:"rgb(200, 200, 200)",
        _2Ko:"rgb(200, 200, 200)",
        _2Qo:"rgb(200, 200, 200)",
        _2Jo:"rgb(200, 200, 200)",
        _2To:"rgb(200, 200, 200)",
        _29o:"rgb(200, 200, 200)",
        _28o:"rgb(200, 200, 200)",
        _27o:"rgb(200, 200, 200)",
        _26o:"rgb(200, 200, 200)",
        _25o:"rgb(200, 200, 200)",
        _24o:"rgb(200, 200, 200)",
        _23o:"rgb(200, 200, 200)",
        _22:"rgb(232, 232, 232)"
    };
    const solutionAA = {
        _AA:"rgb(0, 255, 150)",
        _AKs:"rgb(200, 200, 200)",
        _AQs:"rgb(200, 200, 200)",
        _AJs:"rgb(200, 200, 200)",
        _ATs:"rgb(200, 200, 200)",
        _A9s:"rgb(200, 200, 200)",
        _A8s:"rgb(200, 200, 200)",
        _A7s:"rgb(200, 200, 200)",
        _A6s:"rgb(200, 200, 200)",
        _A5s:"rgb(200, 200, 200)",
        _A4s:"rgb(200, 200, 200)",
        _A3s:"rgb(200, 200, 200)",
        _A2s:"rgb(200, 200, 200)",
        _KAo:"rgb(200, 200, 200)",
        _KK:"rgb(232, 232, 232)",
        _KQs:"rgb(200, 200, 200)",
        _KJs:"rgb(200, 200, 200)",
        _KTs:"rgb(200, 200, 200)",
        _K9s:"rgb(200, 200, 200)",
        _K8s:"rgb(200, 200, 200)",
        _K7s:"rgb(200, 200, 200)",
        _K6s:"rgb(200, 200, 200)",
        _K5s:"rgb(200, 200, 200)",
        _K4s:"rgb(200, 200, 200)",
        _K3s:"rgb(200, 200, 200)",
        _K2s:"rgb(200, 200, 200)",
        _QAo:"rgb(200, 200, 200)",
        _QKo:"rgb(200, 200, 200)",
        _QQ:"rgb(232, 232, 232)",
        _QJs:"rgb(200, 200, 200)",
        _QTs:"rgb(200, 200, 200)",
        _Q9s:"rgb(200, 200, 200)",
        _Q8s:"rgb(200, 200, 200)",
        _Q7s:"rgb(200, 200, 200)",
        _Q6s:"rgb(200, 200, 200)",
        _Q5s:"rgb(200, 200, 200)",
        _Q4s:"rgb(200, 200, 200)",
        _Q3s:"rgb(200, 200, 200)",
        _Q2s:"rgb(200, 200, 200)",
        _JAo:"rgb(200, 200, 200)",
        _JKo:"rgb(200, 200, 200)",
        _JQo:"rgb(200, 200, 200)",
        _JJ:"rgb(232, 232, 232)",
        _JTs:"rgb(200, 200, 200)",
        _J9s:"rgb(200, 200, 200)",
        _J8s:"rgb(200, 200, 200)",
        _J7s:"rgb(200, 200, 200)",
        _J6s:"rgb(200, 200, 200)",
        _J5s:"rgb(200, 200, 200)",
        _J4s:"rgb(200, 200, 200)",
        _J3s:"rgb(200, 200, 200)",
        _J2s:"rgb(200, 200, 200)",
        _TAo:"rgb(200, 200, 200)",
        _TKo:"rgb(200, 200, 200)",
        _TQo:"rgb(200, 200, 200)",
        _TJo:"rgb(200, 200, 200)",
        _TT:"rgb(232, 232, 232)",
        _T9s:"rgb(200, 200, 200)",
        _T8s:"rgb(200, 200, 200)",
        _T7s:"rgb(200, 200, 200)",
        _T6s:"rgb(200, 200, 200)",
        _T5s:"rgb(200, 200, 200)",
        _T4s:"rgb(200, 200, 200)",
        _T3s:"rgb(200, 200, 200)",
        _T2s:"rgb(200, 200, 200)",
        _9Ao:"rgb(200, 200, 200)",
        _9Ko:"rgb(200, 200, 200)",
        _9Qo:"rgb(200, 200, 200)",
        _9Jo:"rgb(200, 200, 200)",
        _9To:"rgb(200, 200, 200)",
        _99:"rgb(232, 232, 232)",
        _98s:"rgb(200, 200, 200)",
        _97s:"rgb(200, 200, 200)",
        _96s:"rgb(200, 200, 200)",
        _95s:"rgb(200, 200, 200)",
        _94s:"rgb(200, 200, 200)",
        _93s:"rgb(200, 200, 200)",
        _92s:"rgb(200, 200, 200)",
        _8Ao:"rgb(200, 200, 200)",
        _8Ko:"rgb(200, 200, 200)",
        _8Qo:"rgb(200, 200, 200)",
        _8Jo:"rgb(200, 200, 200)",
        _8To:"rgb(200, 200, 200)",
        _89o:"rgb(200, 200, 200)",
        _88:"rgb(232, 232, 232)",
        _87s:"rgb(200, 200, 200)",
        _86s:"rgb(200, 200, 200)",
        _85s:"rgb(200, 200, 200)",
        _84s:"rgb(200, 200, 200)",
        _83s:"rgb(200, 200, 200)",
        _82s:"rgb(200, 200, 200)",
        _7Ao:"rgb(200, 200, 200)",
        _7Ko:"rgb(200, 200, 200)",
        _7Qo:"rgb(200, 200, 200)",
        _7Jo:"rgb(200, 200, 200)",
        _7To:"rgb(200, 200, 200)",
        _79o:"rgb(200, 200, 200)",
        _78o:"rgb(200, 200, 200)",
        _77:"rgb(232, 232, 232)",
        _76s:"rgb(200, 200, 200)",
        _75s:"rgb(200, 200, 200)",
        _74s:"rgb(200, 200, 200)",
        _73s:"rgb(200, 200, 200)",
        _72s:"rgb(200, 200, 200)",
        _6Ao:"rgb(200, 200, 200)",
        _6Ko:"rgb(200, 200, 200)",
        _6Qo:"rgb(200, 200, 200)",
        _6Jo:"rgb(200, 200, 200)",
        _6To:"rgb(200, 200, 200)",
        _69o:"rgb(200, 200, 200)",
        _68o:"rgb(200, 200, 200)",
        _67o:"rgb(200, 200, 200)",
        _66:"rgb(232, 232, 232)",
        _65s:"rgb(200, 200, 200)",
        _64s:"rgb(200, 200, 200)",
        _63s:"rgb(200, 200, 200)",
        _62s:"rgb(200, 200, 200)",
        _5Ao:"rgb(200, 200, 200)",
        _5Ko:"rgb(200, 200, 200)",
        _5Qo:"rgb(200, 200, 200)",
        _5Jo:"rgb(200, 200, 200)",
        _5To:"rgb(200, 200, 200)",
        _59o:"rgb(200, 200, 200)",
        _58o:"rgb(200, 200, 200)",
        _57o:"rgb(200, 200, 200)",
        _56o:"rgb(200, 200, 200)",
        _55:"rgb(232, 232, 232)",
        _54s:"rgb(200, 200, 200)",
        _53s:"rgb(200, 200, 200)",
        _52s:"rgb(200, 200, 200)",
        _4Ao:"rgb(200, 200, 200)",
        _4Ko:"rgb(200, 200, 200)",
        _4Qo:"rgb(200, 200, 200)",
        _4Jo:"rgb(200, 200, 200)",
        _4To:"rgb(200, 200, 200)",
        _49o:"rgb(200, 200, 200)",
        _48o:"rgb(200, 200, 200)",
        _47o:"rgb(200, 200, 200)",
        _46o:"rgb(200, 200, 200)",
        _45o:"rgb(200, 200, 200)",
        _44:"rgb(232, 232, 232)",
        _43s:"rgb(200, 200, 200)",
        _42s:"rgb(200, 200, 200)",
        _3Ao:"rgb(200, 200, 200)",
        _3Ko:"rgb(200, 200, 200)",
        _3Qo:"rgb(200, 200, 200)",
        _3Jo:"rgb(200, 200, 200)",
        _3To:"rgb(200, 200, 200)",
        _39o:"rgb(200, 200, 200)",
        _38o:"rgb(200, 200, 200)",
        _37o:"rgb(200, 200, 200)",
        _36o:"rgb(200, 200, 200)",
        _35o:"rgb(200, 200, 200)",
        _34o:"rgb(200, 200, 200)",
        _33:"rgb(232, 232, 232)",
        _32s:"rgb(200, 200, 200)",
        _2Ao:"rgb(200, 200, 200)",
        _2Ko:"rgb(200, 200, 200)",
        _2Qo:"rgb(200, 200, 200)",
        _2Jo:"rgb(200, 200, 200)",
        _2To:"rgb(200, 200, 200)",
        _29o:"rgb(200, 200, 200)",
        _28o:"rgb(200, 200, 200)",
        _27o:"rgb(200, 200, 200)",
        _26o:"rgb(200, 200, 200)",
        _25o:"rgb(200, 200, 200)",
        _24o:"rgb(200, 200, 200)",
        _23o:"rgb(200, 200, 200)",
        _22:"rgb(232, 232, 232)"
    };
    console.log(objectsEqual(cardsChart, solutionAA)); // logs "false"
}
  
function objectsEqual(obj1, obj2) {
    // get the properties of both objects
    const properties1 = Object.getOwnPropertyNames(obj1);
    const properties2 = Object.getOwnPropertyNames(obj2);
  
    // check if the objects have a different number of properties
    if (properties1.length !== properties2.length) {
        console.log("no");
        return false;
    }
  
    // iterate over the properties and compare their values
    for (let i = 0; i < properties1.length; i++) {
      const propertyName = properties1[i];
      if (obj1[propertyName] !== obj2[propertyName]) {
            console.log("no");
            return false;
      }
    }
  
    // if all properties and values are equal, the objects are equal
    console.log("yes");
    return true;
  }
  

  

