function tableCreate() {
    const divCanvas = document.getElementById('divCanvas'),
    tbl = document.createElement('table');
    // tbl.style.tableLayout = "fixed";
    tbl.style.border = '1px solid black';
    const cards = [ "A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

    for (let i = 0; i < 13; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < 13; j++) {
            const td = tr.insertCell();
            if ( i < j) {
                td.appendChild(document.createTextNode(`${cards[i]}${cards[j]}${"s"}`));
                td.setAttribute('id',`${cards[i]}${cards[j]}${"s"}`);
                td.style.backgroundColor = "rgb(200, 200, 200)";     
            } else if ( i > j) {
                td.appendChild(document.createTextNode(`${cards[j]}${cards[i]}${"o"}`));
                td.style.backgroundColor = "rgb(200, 200, 200)";
                td.setAttribute('id',`${cards[i]}${cards[j]}${"s"}`);
            } else if ( i === j) {
                td.appendChild(document.createTextNode(`${cards[j]}${cards[i]}`));
                td.style.backgroundColor = "rgb(232, 232, 232)";
                td.setAttribute('id',`${cards[i]}${cards[j]}${"s"}`);
            }
            tr.style.width = "650px";
            td.style.height = "32px"; //can't be smaller than typo size
            td.style.width = "32px"; //can't be smaller than typo size
        }
    }
    divCanvas.appendChild(tbl);
  }
  
  tableCreate();
